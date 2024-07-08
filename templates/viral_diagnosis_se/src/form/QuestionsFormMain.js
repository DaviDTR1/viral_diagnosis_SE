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
import { RadioGroup, RadioOption } from "./Radio";

const QuestionsFormMain = (questions) => {
    const [selected, setSelected] = useState([]);
    //results request
    const [results, setResults] = useState(null);
    const [shouldFetchResults, setShouldFetchResults] = useState(false);

    const QuestionsForm = () => {
        return questions.questions.map((question) => (
            <FormControl>
                <FormLabel htmlFor={question.info}>{question.question}</FormLabel>
                <RadioGroup onChange={setSelected} selected={selected}>
                    <RadioOption value="true">Sí</RadioOption>
                    <RadioOption value="false">No</RadioOption>
                </RadioGroup>
            </FormControl>
        ));
    };

    const handleQuestionsSubmit = (e) => {
        e.preventDefault();
        console.log(selected);
        // fetch('/questions',{
        //     method: "POST",
        //     headers: {
        //         "Content-Type": 'application/json',
        //     },
        //     body: JSON.stringify({'answers': symptomsSelect.map((symptomSelect) => (
        //         symptomSelect.label
        //     ))})
        // })
        // .then(response => response.json())
        // .then(data => {
        // console.log('Success:', data);
        // setShouldFetchResults(true);
        // })
        // .catch((error) => {
        // console.error('Error:', error);
        // });
        // clearQuestionsForm();
      };

    return (
        <Box>
            <VStack>
                <Heading>Responde a las preguntas si o no</Heading>
                <Box>
                <form
                    onSubmit={handleQuestionsSubmit}
                >
                    <VStack spacing={4} alignItems="left" w="30vw">
                    <Box
                    
                    >
                        <QuestionsForm />
                    </Box>
                    {/*  */}
                    <Button
                        type="submit"
                        width="full"
                        color="white"
                        borderStyle="none"
                        borderRadius= "1.25rem"
                        background= "#C0EFF1"
                        boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
                        disabled={!selected}
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
export default QuestionsFormMain;