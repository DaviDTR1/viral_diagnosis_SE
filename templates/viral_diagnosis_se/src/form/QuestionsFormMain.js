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
import ResultsMain from "./ResultsMain"

const QuestionsFormMain = (questions) => {
    const [answers, setAnswers] = useState({});
    const handleAnswer = (e) => {
        const { name, value} = e.target;
        setAnswers(prevAnswers => ({...prevAnswers, [name]: value}));
    }
    //results request
    const [results, setResults] = useState([]);
    const [shouldFetchResults, setShouldFetchResults] = useState(Object.entries(questions.questions).length === 0);
    console.log("length", Object.entries(questions.questions).length);

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
        setShouldFetchResults(false);
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

      useEffect(() => {
        console.log("entreeeee");
        if (shouldFetchResults) {
          fetch('/diagnose')
            .then(response => response.json())
            .then(resultsFetchedData => {
              setResults(resultsFetchedData);
              setShouldFetchResults(false); // Reset the flag
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }
      }, [shouldFetchResults]);
    // Conditional rendering based on the fetched data
    
    console.log(shouldFetchResults);
    if (Object.keys(results).length > 0) {
        return <ResultsMain results={results.diagnose} />
    }

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