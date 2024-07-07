import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack,
    HStack
  } from "@chakra-ui/react";
  import Select, { 
    //   StylesConfig 
   } from 'react-select';
import { Link } from "react-router-dom";

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
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        clearForm();
      };

    return (
        <Box>
            <VStack>
                <Heading>Escribe los datos</Heading>
                <Box>
                <form
                    onSubmit={handleSubmit}
                >
                    <VStack spacing={4} alignItems="left" w="30vw">
                    <FormControl>
                        <FormLabel htmlFor="fullName">Nombre</FormLabel>
                        <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
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
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="symptomsSelect">Síntomas</FormLabel>
                        <Select
                            //type="text"
                            isMulti
                            // closeMenuOnSelect={false}
                            id="symptomsSelect"
                            name="symptomsSelect"
                            value={symptomsSelect}
                            onChange={values => setSymptomsSelect(values)}
                            options={symptomsOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        width="full"
                        color="white"
                        borderStyle="none"
                        borderRadius= "1.25rem"
                        background= "#C0EFF1"
                        boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
                        // isLoading={isLoading}
                    >Obtén predicción
                        {/* <Link
                        // to="/evolutionForm"
                        // to="/results"
                        >
                        Obtén predicción</Link> */}
                    </Button>
                    </VStack>
                </form>
                </Box>
            </VStack>
        </Box>
    );
};
export default SymptomsFormMain;