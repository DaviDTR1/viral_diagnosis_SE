class InferenceEngine:
    def __init__(self, base_conocimientos):
        self.base_conocimientos = base_conocimientos
        self.sintomas_paciente = set()
        self.datos_adicionales = set()
        self.reglas = self.base_conocimientos.get_rules()
        self.preguntas_realizadas = set() 

    def sobrecarga(self, cont):
        return (1+((cont/cont**0.5) * cont/20))**2

    def add_sintoma(self, sintoma):
        self.sintomas_paciente.add(sintoma)
    
    def mejor_regla_aplicable(self, sintomas):
        mejor_regla = None
        mejor_puntaje = 0
        for all_sintomas, dato, pregunta in self.reglas:
            if pregunta in self.preguntas_realizadas:
                continue
            puntaje = len(set(all_sintomas).intersection(set(sintomas)))
            if puntaje > mejor_puntaje:
                mejor_puntaje = puntaje
                mejor_regla = (all_sintomas, dato, pregunta)
        return mejor_regla if mejor_puntaje > 0 else (None,None,None)

    def preguntar_informacion_adicional(self):
        preguntas = []
        while(True):
            antecedente, dato, pregunta = self.mejor_regla_aplicable(self.sintomas_paciente)
            if antecedente is None and dato is None and pregunta is None:
                break
            if pregunta not in self.preguntas_realizadas:
                self.preguntas_realizadas.add(pregunta)
                preguntas.append({"sintoma": dato, "pregunta": pregunta})
            
        
        return preguntas

    def actualizar_datos_adicionales(self, sintoma, respuesta):
        if respuesta is not None and respuesta.lower() in ["sí", "si", "yes"]:
            self.datos_adicionales.add(sintoma)

    def diagnose(self):
        enfermedades_probables = {}
        data = self.base_conocimientos.get_data()
        for enfermedad, info in data.items():
            x = 0
            y = 0
            z = 0
            
            for sintoma , val in info['sintomas'].items():
                if sintoma in self.sintomas_paciente:
                    z = z+1
                    x = max(x, val)
                    y = y+(val/len(info['sintomas'])/10)
                    
            for sintoma, val in info['evolucion'].items():
                if sintoma in self.sintomas_paciente:
                    y += val/10
            
            x = x*(1/sobrecarga(len(self.sintomas_paciente)-z))+y

            if x > 0.5:
                enfermedades_probables.update(
                    {
                        enfermedad: {
                        "descripcion": data[enfermedad]["descripcion"],
                        "tratamiento": data[enfermedad]["tratamiento"],
                        "puntuacion": x
                        }
                    }
                )
        enfermedades_probables = dict(sorted(enfermedades_probables.items(), key=lambda item:item[1]['puntuacion'], reverse=True))
        # print(enfermedades_probables)
        return enfermedades_probables 