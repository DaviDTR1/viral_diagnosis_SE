class InferenceEngine:
    def __init__(self, base_conocimientos):
        self.base_conocimientos = base_conocimientos
        self.sintomas_paciente = set()
        self.datos_adicionales = set()
        self.reglas = self.base_conocimientos.get_rules()
        self.preguntas_realizadas = set() 

    def sobrecarga(self, cont):
        if cont == 0:
            return 1    
        return (1+((cont/cont**0.5) * cont/20))**2

    def clear_sintomas(self):
        self.sintomas_paciente = set()
        
    def clear_questions(self):
        self.preguntas_realizadas = set()
        self.datos_adicionales = set()
    
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
                mejor_regla = (dato, pregunta)
        return mejor_regla if mejor_puntaje > 0 else (None,None)

    def preguntar_informacion_adicional(self):
        preguntas = []
        while(True):
            dato, pregunta = self.mejor_regla_aplicable(self.sintomas_paciente)
            if dato is None and pregunta is None:
                break
            if pregunta not in self.preguntas_realizadas:
                self.preguntas_realizadas.add(pregunta)
                preguntas.append({"info": dato, "question": pregunta})
        return preguntas

    def actualizar_datos_adicionales(self, dato, respuesta):
        if respuesta == 'True':
            self.datos_adicionales.add(dato)

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
                if sintoma in self.datos_adicionales:
                    y += val/10
            
            x = x*(1/self.sobrecarga(len(self.sintomas_paciente)-z))+y

            if x > 0.70:
                enfermedades_probables.update(
                    {
                        enfermedad: {
                        "descripcion": data[enfermedad]["descripcion"],
                        "tratamiento": data[enfermedad]["tratamiento"],
                        "puntuacion": x
                        }
                    }
                )
        if len(enfermedades_probables) > 0:
            enfermedades_probables = dict(sorted(enfermedades_probables.items(), key=lambda item:item[1]['puntuacion'], reverse=True))
        return enfermedades_probables 