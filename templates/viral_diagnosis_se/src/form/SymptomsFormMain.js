import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from "@chakra-ui/react";
  import Select from 'react-select';
import QuestionsFormMain from "./QuestionsFormMain";

const SymptomsFormMain = () => {
    const [symptomsData, setSymptomsData] = useState([]);
    // url = 'localhost:5000/symptoms'
    const fetchData = () => {
        fetch('/symptoms')
        .then((response) => response.json())
        .then((data) => setSymptomsData(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    let symptomsOptions = [];

    try{
        const symptoms = symptomsData.symptoms.map((symptomData) => (
            { value: symptomData.replaceAll(' ','_'), label: symptomData }
        ));
        symptomsOptions = symptoms;
    } catch(e){

    };
    //initial values
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [symptomsSelect, setSymptomsSelect] = useState([]);

    const clearForm = () => {
        setFullName("");
        setAge("");
        setSymptomsSelect([]);
    };

    //questions request
    const [questions, setQuestions] = useState([]);
    const [shouldFetchQuestions, setShouldFetchQuestions] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/symptoms',{
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({'symptoms': symptomsSelect.map((symptomSelect) => (
                symptomSelect.label
            ))})
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        setShouldFetchQuestions(true);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        clearForm();
      };

      useEffect(() => {
        if (shouldFetchQuestions) {
          fetch('/questions')
            .then(response => response.json())
            .then(questionsFetchedData => {
              setQuestions(questionsFetchedData);
              setShouldFetchQuestions(false); // Reset the flag
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }
      }, [shouldFetchQuestions]);
    // Conditional rendering based on the fetched data
    if (Object.keys(questions).length > 0) {
        return <QuestionsFormMain questions={questions.questions} />
    } 
        return (
            <Box px="20vw" py="15vh">
                <VStack alignItems="left" spacing="2rem">
                    <Heading
                    className="title"
                    >Escribe los datos</Heading>
                    <Box>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <VStack spacing="2rem" alignItems="start">
                            <VStack spacing="1rem" alignItems="left" w="30vw">
                                <FormControl>
                                    <FormLabel htmlFor="fullName">Nombre</FormLabel>
                                    <Input
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Nombre completo"
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                    w="95%"
                                    className="input-text"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="age">Edad</FormLabel>
                                    <Input
                                    id="age"
                                    name="age"
                                    placeholder="Edad"
                                    value={age}
                                    onChange={e => setAge(e.target.value)}
                                    w="95%"
                                    className="input-text"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel
                                    htmlFor="symptomsSelect"
                                    marginBottom="0.5rem"
                                    >Síntomas</FormLabel>
                                    <Select
                                        isMulti
                                        id="symptomsSelect"
                                        name="symptomsSelect"
                                        value={symptomsSelect}
                                        onChange={values => setSymptomsSelect(values)}
                                        options={symptomsOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                // primary25:"neutral10",
                                                primary:"neutral160",
                                                // primary50:"dangerLight",
                                            },
                                        })}
                                    />
                                </FormControl>
                            </VStack>
                            <Button
                                    type="submit"
                                    className="primary-button"
                                >
                                Obtén predicción</Button>
                            </VStack>
                        </form>
                    </Box>
                </VStack>
            </Box>
        );
};
export default SymptomsFormMain;