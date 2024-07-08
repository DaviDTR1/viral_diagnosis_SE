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
    const [answers, setAnswers] = useState({});
    const handleAnswer = (e) => {
        const { name, value} = e.target;
        setAnswers(prevAnswers => ({...prevAnswers, [name]: value}));
    }
    //results request
    const [results, setResults] = useState(null);
    const [shouldFetchResults, setShouldFetchResults] = useState(false);

    const QuestionsForm = () => {
        return questions.questions.map((question) => (
            <FormControl key={question.info}>
                <FormLabel htmlFor={question.info}>{question.question}</FormLabel>
                <RadioGroup info={question.info} onChange={handleAnswer} answers={answers[question.info]}>
                    <RadioOption info={question.info} value="true">Sí</RadioOption>
                    <RadioOption info={question.info} value="false">No</RadioOption>
                </RadioGroup>
            </FormControl>
        ));
    };

    const clearQuestionsForm = () => {
        setAnswers({});
    };

    const handleQuestionsSubmit = (e) => {
        e.preventDefault();
        fetch('/questions',{
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({'answers': answers
            })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        setShouldFetchResults(true);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        clearQuestionsForm();
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
                        disabled={!answers}
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