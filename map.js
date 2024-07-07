const datas = {'symptoms' : ['a b','c d', 'e d']};

const symptomsValueLabel = datas.symptoms.map((data) => (
    { value: data.replaceAll(' ','_'), label: data }
));

console.log(symptomsValueLabel);


const [symptomsData, setSymptomsData] = useState([]);
    // url = 'localhost:5000/symptoms'
    const fetchData = () => {
        (datas) => setSymptomsData(datas);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const symptomsOptions = symptomsData.symptoms.map((symptomData) => (
        { value: symptomData.replaceAll(' ','_'), label: symptomData }
    ));