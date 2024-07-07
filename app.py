from flask import Flask, request, jsonify, render_template
from knowledge_base import KnowledgeBase
from engine import InferenceEngine

app = Flask(__name__)

# Inicializa la base de conocimiento y el motor de inferencia
kb = KnowledgeBase()
ie = InferenceEngine(kb)
# list_sintomas = set([(x.lower()).replace(' ','_') for enf, info in kb.get_data().items() for x in info['sintomas']])
# list_sintomas = sorted(list_sintomas)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/diagnose', methods=['POST'])
def diagnose():
    symptoms = request.json.get('symptoms', [])
    
    for sintoma in symptoms:
        ie.add_sintoma(sintoma.replace('_',' '))
    
    diagnosis, questions = ie.diagnose()
    print(questions)
    return jsonify({"diagnosis": diagnosis, "questions": questions})

@app.route('/process_answer', methods=['POST'])
def process_answer():
    answers = request.json
    for sintoma, respuesta in answers.items():
        if respuesta is not None:
            ie.actualizar_datos_adicionales(sintoma, respuesta)
    diagnosis, questions = ie.diagnose()
    return jsonify({"diagnosis": diagnosis, "questions": questions})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
