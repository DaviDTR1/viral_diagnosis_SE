from flask import Flask, request, jsonify, render_template
from knowledge_base import KnowledgeBase
from engine import InferenceEngine

app = Flask(__name__)

# Inicializa la base de conocimiento y el motor de inferencia
kb = KnowledgeBase()
my_engine = InferenceEngine(kb)
list_sintomas = set([x for enf, info in kb.get_data().items() for x in info['sintomas']])
list_sintomas = sorted(list_sintomas)

@app.route('/', methods=['GET'])
def index():
    """start the program"""
    return render_template('index.html')

@app.route('/symptoms', methods=['POST', 'GET'])
def add_symptoms():
    """This function if recive a get request send a json with a the list of symptoms. If the 
    function recive a post request this add the symptoms recived to the engine
    """
    if(request.method == 'GET'):
       return jsonify({"symptoms" : list(list_sintomas)})
    
    symptoms = request.json.get('symptoms', [])
    for sintoma in symptoms:
        my_engine.add_sintoma(sintoma)
    

@app.route('/questions', methods=['POST'])
def get_questions():
    """Return a json file with the questions to ask in the format {"question" : (date for engine, question for the user)}"""
    
    questions = my_engine.preguntar_informacion_adicional()
    return jsonify({"questions": questions})

# @app.route('/questions_answers', methods=['POST'])
# def get_questions_answers():
#     answers = request.json.get('answers', [])
    
#     for answer in answers:
#         my_engine.actualizar_datos_adicionales(answer, )

# @app.route('/diagnose', methods=['POST'])
# def get_diagnose():
    

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
