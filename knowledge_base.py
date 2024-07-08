class KnowledgeBase:
    def __init__(self):
        self.enfermedades = {
            "Resfriado Comun": {
                "descripcion": "Sindrome ocasionado por infeccion viral de las mucosas de las vias respiratorias altas.",
                "sintomas": {
                    "secrecion nasal clara y acuosa": 0.8896,
                    "secresiones faringeas": 0.8557,
                    "obstruccion nasal": 0.7609,
                    "dolor de garganta": 0.9186,
                    "malestar general": 0.8018,
                    "dolores musculares": 0.924,
                    "dolor de cabeza": 0.728,
                    "tos expectorante": 0.936,
                    "estornudos": 0.9215,
                    "escalofrios": 0.7482,
                    "fiebre ligera": 0.8297
                },
                "evolucion": {
                    "cambio_secrecion_nasal": 0.8294,
                    "tos_persistente": 0.9362
                },
                "tratamiento": "La terapeutica queda limitada a medidas inespecificas como analgesicos y los anticongestivos, ademas de abundantes liquidos.\tHasta el momento no existen farmacos eficaces contra los virus que ocasionan el Resfriado comun.  Son inutiles los antibioticos utilizados contra las bacterias y no deben ser administrados, salvo en caso de complicaciones bacterianas."
            },
            "Faringitis Febril": {
                "descripcion": "Es una infección a corto plazo de la faringe (garganta), causada por diversos virus o bacterias",
                "sintomas": {
                    "ligero dolor de garganta": 0.8192,
                    "obstruccion nasal": 0.8218,
                    "malestar general": 0.7778,
                    "fiebre alta": 0.8893,
                    "tos": 0.7469
                },
                "evolucion": {},
                "tratamiento": "No hay tratamiento especifico de las infecciones por adenovirus, la aspirina y los jarabes ordinarios pueden aliviar un poco los sintomas. Deben evitarse las albercas durante la epidemia  de Fiebre faringo conjuntival, y debe evitarse tambien la contaminacion de una persona a otra a traves de las secreciones oculares."
            },
            "Herpangina": {
                "descripcion": "Enfermedad infecciosa leve, mas frecuente en ninos pequenos",
                "sintomas": {
                    "dolor de garganta": 0.9328,
                    "malestar general": 0.8251,
                    "fiebre alta": 0.7497,
                    "nauseas": 0.7839,
                    "vomitos": 0.8764
                },
                "evolucion": {
                    "aumento_brusco_temperatura": 0.8322,
                    "pupulas_petequias_paladar": 0.7035
                },
                "tratamiento": "Medidas sintomaticas locales, gargaras con analgesicos como elixir de Benadril o butacaina, alimentacion liquida o muy blanda"
            },
            "Bronquitis Aguda": {
                "descripcion": "Inflamacion de la mucosa bronquial, generalmente causada por virus.",
                "sintomas": {
                    "dolor de cabeza": 0.7669,
                    "dolor de garganta": 0.835,
                    "malestar general": 0.9207,
                    "secresiones nasales": 0.8733,
                    "fiebre moderada": 0.9067,
                    "respiracion dificil y ruidosa": 0.8705,
                    "dolor retrosternal": 0.8292,
                    "tos seca": 0.8475
                },
                "evolucion": {},
                "tratamiento": "No hay tratamiento especifico, observacion y valoracion cuidadosa de la funcion respiratoria"
            },
            "Influenza": {
                "descripcion": "Infeccion respiratoria aguda de etiologia viral especifica.",
                "sintomas": {
                    "secresiones nasales": 0.7153,
                    "obstruccion nasal": 0.9085,
                    "malestar general": 0.747,
                    "dolor de cabeza": 0.7118,
                    "tos expectorante": 0.8689,
                    "dolores musculares": 0.8914,
                    "fiebre ligera": 0.7513,
                    "dolor retroorbitario punzante": 0.9186,
                    "estornudos": 0.7123,
                    "escalofrios": 0.7894
                },
                "evolucion": {
                    "aparicion_brusca_fiebre_postracion": 0.8396
                },
                "tratamiento": "No hay tratamiento especifico, sulfato de codeina para aliviar la tos y la irritabilidad, reposo en cama"
            },
            "Neumonia Viral": {
                "descripcion": "Enfermedad aguda que afecta a los pulmones.",
                "sintomas": {
                    "dificultades respiratorias": 0.9461,
                    "taquipnea": 0.7658,
                    "cianosis": 0.9135,
                    "malestar general": 0.8183,
                    "tos seca": 0.8969,
                    "escalofrios": 0.7762,
                    "fiebre alta": 0.9301,
                    "dolor toracico": 0.9179,
                    "respiracion acelerada": 0.8692
                },
                "evolucion": {},
                "tratamiento": "Derivados de la codeina contra la tos y el dolor toracico. Antipireticos solo si la temperatura es muy alta."
            },
            "Mialgia Epidemica": {
                "descripcion": "Enfermedad viral aguda caracterizada por dolor paroxistico intenso en la parte alta del abdomen.",
                "sintomas": {
                    "dolor de cabeza": 0.7846,
                    "malestar": 0.7922,
                    "escalofrios": 0.7061,
                    "fiebre alta": 0.7812,
                    "respiracion dolorosa": 0.7103,
                    "diarreas": 0.939,
                    "nauseas": 0.7778,
                    "vomitos": 0.7802
                },
                "evolucion": {
                    "aparicion_brusca_dolor_paroxistico_parte_alta_abdomen": 0.8064
                },
                "tratamiento": "Reposo y bebidas calientes para despejar la garganta."
            },
            "Sarampion": {
                "descripcion": "Enfermedad producida por el virus Virion, afecta principalmente a ninos.",
                "sintomas": {
                    "secresiones nasales": 0.923,
                    "malestar": 0.8656,
                    "dolor de cabeza": 0.7717,
                    "tos seca": 0.7357,
                    "dolores musculares": 0.8256,
                    "fiebre ligera": 0.9173,
                    "estornudos": 0.9427,
                    "manchas de Koplik": 0.8147
                },
                "evolucion": {},
                "tratamiento": "Tratamiento sintomatico con aspirina y sulfato de codeina. Oscurecer el cuarto para disminuir molestias fotofobicas. Administracion de globulina gama mezclada para prevencion."
            },
            "Rubeola": {
                "descripcion": "Enfermedad exantematica benigna causada por el virus de la rubeola, un togavirus.",
                "sintomas": {
                    "dolor de garganta": 0.8612,
                    "malestar": 0.7712,
                    "dolor de cabeza": 0.8131,
                    "tos expectorante": 0.9441,
                    "fiebre ligera": 0.705,
                    "enrojecimiento de la piel": 0.8684
                },
                "evolucion": {},
                "tratamiento": "No hay tratamiento eficaz conocido. Se enfoca en la prevencion y educacion."
            },
            "Varicela": {
                "descripcion": "Enfermedad benigna y contagiosa causada por el virus Varicela-Zoster.",
                "sintomas": {
                    "malestar": 0.9332,
                    "dolores musculares": 0.849,
                    "fiebre moderada": 0.8788,
                    "lesiones cutaneas": 0.7159,
                    "ulceracion del epitelio": 0.8123
                },
                "evolucion": {},
                "tratamiento": "Tratamiento sintomatico con locion de calamina para el prurito, atropina y cortisona para lesiones oculares, aspirina y codeina para el dolor."
            },
            "Viruela": {
                "descripcion": "Enfermedad febril contagiosa con lesiones vesiculares y pustulares.",
                "sintomas": {
                    "dolor de cabeza": 0.7307,
                    "fiebre ligera": 0.7522,
                    "vomitos": 0.8837,
                    "dolor abdominal": 0.9443,
                    "lesiones en las palmas de las manos": 0.886
                },
                "evolucion": {},
                "tratamiento": "No hay tratamiento eficaz conocido. La betatiosemicarbazona es util profilacticamente."
            },
            "Molusco Contagioso": {
                "descripcion": "Enfermedad infecciosa benigna de la piel con nodulos perlados.",
                "sintomas": {
                    "nodulos verrugosos blancos": 0.8621,
                    "lesiones en la cara y el tronco": 0.8067,
                    "proliferacion de celulas epiteliales": 0.7127,
                    "hiperplasia y engrosamiento de la piel": 0.7949
                },
                "evolucion": {},
                "tratamiento": "No hay tratamiento eficaz conocido. Posible extirpacion quirurgica de las lesiones."
            },
            "Verrugas": {
                "descripcion": "Tumores epiteliales causados por el virus del papiloma humano.",
                "sintomas": {
                    "papulas elevadas y lisas en la piel": 0.9349,
                    "superficie rugosa de las verrugas": 0.8478,
                    "persistencia y posible extension por autoinoculacion": 0.9019
                },
                "evolucion": {},
                "tratamiento": "Tratamiento empirico. Electrodesecacion, congelacion con nitrogeno liquido o hielo seco, aplicacion de podofilina o acido salicilico en casos dificiles."
            },
            "Poliomielitis": {
                "descripcion": "Enfermedad infecciosa aguda que puede afectar el sistema nervioso central.",
                "sintomas": {
                    "dolor de garganta": 0.9328,
                    "malestar general": 0.8424,
                    "dolores musculares": 0.7769,
                    "fiebre alta": 0.8723,
                    "nauseas": 0.7744,
                    "rigidez muscular": 0.7726
                },
                "evolucion": {},
                "tratamiento": "Vacunacion con virus vivos (Sabin) o muertos (Salk) con valor profilactico."
            },
            "Meningitis Aseptica": {
                "descripcion": "Puede ser causada por virus, espiroquetas, bacterias, micoplasmas o clamidias.",
                "sintomas": {
                    "fiebre alta": 0.9327,
                    "dolor de cabeza": 0.7893,
                    "dolores musculares": 0.8846,
                    "vomitos": 0.8587,
                    "erupcion maculopapulosa": 0.8802,
                    "lesiones en las amigdalas": 0.9324,
                    "rigidez del cuello": 0.8188
                },
                "evolucion": {
                    "inicio_brusco_sintomas": 0.7005
                },
                "tratamiento": "No hay tratamiento especifico. Se recomienda aislamiento de ninos con sintomas febriles y erupcion."
            },
            "Fiebre Amarilla": {
                "descripcion": "Enfermedad viral aguda caracterizada por fiebre alta, postracion y pulso lento.",
                "sintomas": {
                    "fiebre alta": 0.8309,
                    "postracion": 0.8211,
                    "pulso lento": 0.7377,
                    "lesiones en las encias": 0.9275,
                    "hemorragias locales": 0.937,
                    "vomitos de sangre": 0.8728,
                    "albuminuria": 0.7704,
                    "ictericia": 0.7816,
                    "formacion de trombos": 0.844
                },
                "evolucion": {
                    "inicio_brusco_escalofrio_dolor_cabeza_vomitos": 0.8462
                },
                "tratamiento": "Vacunacion con virus vivos atenuados. Aislamiento en habitacion a prueba de mosquitos durante los primeros dias."
            },
            "Paperas": {
                "descripcion": "Infeccion viral de las glandulas parotidas causada por el virus de RNA de los paramixovirus.",
                "sintomas": {
                    "inflamacion de las glandulas parotidas": 0.8015,
                    "dolor de garganta": 0.7032,
                    "malestar": 0.7903,
                    "escalofrios": 0.7292,
                    "fiebre moderada": 0.8998
                },
                "evolucion": {},
                "tratamiento": "Administracion de globulina gama hiperinmune previene o atenua la enfermedad en personas expuestas."
            },
            "Fiebre Ganglionar": {
                "descripcion": "Enfermedad caracterizada por fiebre irregular, faringitis y linfadenopatia.",
                "sintomas": {
                    "fiebre irregular": 0.7798,
                    "faringitis": 0.7886,
                    "hipertrofia de ganglios linfaticos": 0.7388,
                    "esplenomegalia": 0.701,
                    "linfocitosis": 0.7891,
                    "lesiones maculopapulosas": 0.8782,
                    "dolor de garganta": 0.804,
                    "malestar general": 0.7766,
                    "dolor de cabeza": 0.93,
                    "crecimiento de ganglios linfaticos del cuello": 0.7186
                },
                "evolucion": {},
                "tratamiento": "No hay vacuna eficaz. Uso de aspirina para paliar la fiebre."
            },
            "Queratoconjuntivitis Epidemica": {
                "descripcion": "Inflamacion infecciosa aguda de la conjuntiva por adenovirus tipo 8.",
                "sintomas": {
                    "conjuntivitis folicular unilateral": 0.9378,
                    "conjuntivitis catarral intensa": 0.9174,
                    "edema e hiperplasia de la mucosa ocular": 0.7297,
                    "numerosos foliculos": 0.9485,
                    "malestar": 0.8571,
                    "fiebre alta": 0.7215,
                    "lagrimeo intenso con fotofobia": 0.7354,
                    "lesiones corneales": 0.8163
                },
                "evolucion": {
                    "inicio_brusco_sintomas": 0.8658
                },
                "tratamiento": "No hay tratamiento especifico. Uso de esteroides locales para opacidades corneales graves."
            },
            "Sindrome de Inmuno Deficiencia Adquirida (SIDA)": {
                "descripcion": "Enfermedad causada por el VIH que debilita las defensas naturales del organismo.",
                "sintomas": {
                    "tos seca": 0.8414,
                    "escalofrios": 0.7269,
                    "fiebre alta": 0.7161,
                    "ganglios inflamados": 0.8254,
                    "respiracion dificil y ruidosa": 0.868,
                    "diarreas": 0.8432,
                    "manchas anormales en la piel": 0.9449,
                    "perdida de peso": 0.8727,
                    "fatiga inexplicable": 0.7208
                },
                "evolucion": {},
                "tratamiento": "No hay tratamiento curativo. Prevencion es el unico tratamiento."
            }
        }


        # Reglas de Producción
        self.reglas = [
            # Resfriado comun
            (self.enfermedades['Resfriado Comun']['sintomas'], "cambio_secrecion_nasal","La secreción nasal clara y acuosa se transformarmo en mucopurulenta?"),
            (self.enfermedades['Resfriado Comun']['sintomas'], "tos_persistente","Posee una tos persistente?"),

            # Herpangina
            (self.enfermedades['Herpangina']['sintomas'], "aumento_brusco_temperatura", "Presento un aumento brusco en la temperatura?"),
            (self.enfermedades['Herpangina']['sintomas'], "pupulas_petequias_paladar", "Presenta un pupulas o petequias en el paladar?"),
            
            # Influenza
            (self.enfermedades['Influenza']['sintomas'], "aparicion_brusca_fiebre_postracion", "Presento una aparicion brusca de sintomas como fiebre o postracion?"),
            
            # Mialgia Epidémica
            (self.enfermedades['Mialgia Epidemica']['sintomas'], "aparicion_brusca_dolor_paroxistico_parte_alta_abdomen", "Presento una aparicion brusca de dolor en la parte alta del abdomen?"),
            
            # Meningitis Aséptica
            (self.enfermedades['Meningitis Aseptica']['sintomas'], "inicio_brusco_sintomas", "Presento un inicio brusco de los sintomas?"),
            
            # Fiebre Amarilla
            (self.enfermedades['Fiebre Amarilla']['sintomas'], "inicio_brusco_escalofrio_dolor_cabeza_vomitos", "Presento un inicio brusco con sintomas de dolor de cabeza y/o vomitos?"),
            
            # Queratoconjuntivitis Epidémica
            (self.enfermedades['Queratoconjuntivitis Epidemica']['sintomas'], "inicio_brusco_sintomas", "Presento un inicio brusco de los sintomas?")
        ]
        
        
    def get_data(self):
        return self.enfermedades

    def get_rules(self):
        return self.reglas
    
    def get_all_diseases(self):
       return list(self.enfermedades.keys())

    def get_symptoms_for_disease(self, disease):
       if disease in self.enfermedades:
           return self.enfermedades[disease]['sintomas']
       else:
           return {}

    def get_disease_description(self, disease):
       if disease in self.enfermedades:
           return self.enfermedades[disease]['descripcion']
       else:
           return "Virus no encontrado"
