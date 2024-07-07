"""Server app for Viral Diagnosis"""
from flask import Flask, request, jsonify, render_template
from knowledge_base import KnowledgeBase
from engine import InferenceEngine

app = Flask(__name__)

# Inicializa la base de conocimiento y el motor de inferencia
my_knowledge_base = KnowledgeBase()
my_engine = InferenceEngine(my_knowledge_base)
list_sintomas = set([x for enf, info in my_knowledge_base.get_data().items() for x in info['sintomas']])
list_sintomas = sorted(list_sintomas)

@app.route('/', methods=['GET'])
def index():
    """start the program"""
    return render_template('index.html')

@app.route('/symptoms', methods=['POST', 'GET'])
def api_symptoms():
    """This function if recive a get request send a json with a the list of symptoms. If the 
    function recive a post request this add the symptoms recived to the engine
    """
    if(request.method == 'GET'):
       return jsonify({"symptoms" : list(list_sintomas)})
    
    symptoms = request.json.get('symptoms', [])
    my_engine.clear_sintomas()
    for sintoma in symptoms:
        my_engine.add_sintoma(sintoma)
    return jsonify({"success" : True})

@app.route('/questions', methods=['POST', 'GET'])
def api_questions():
    """Return a json file with the questions to ask in the format {"question" : ("info" for engine, "question" for the user)}
    and recive a json file with the answer of the questions and add it to the engine"""
    if request.method == 'GET':
        questions = my_engine.preguntar_informacion_adicional()
        return jsonify({"questions": questions})
    
    answers = request.json.get('answers')
    my_engine.clear_questions()
    for answer in answers:
        my_engine.actualizar_datos_adicionales(answer['info'], answer['answer'])
    return jsonify({"success" : True})

@app.route('/diagnose')
def get_diagnose():
    """Return the diagnose of the user based in the symptoms and the answer of the questions"""
    diagnose = my_engine.diagnose()
    return jsonify({'diagnose' : diagnose})



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
