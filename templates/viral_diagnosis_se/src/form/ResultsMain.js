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
    HStack,
    Text
  } from "@chakra-ui/react";

const ResultsMain = (results) => {
    console.log("main", results.results);
    return Object.entries(results.results).length > 0 ? (
        <Box px="20vw" py="15vh">
            <VStack alignItems="left" spacing="2rem">
                <Heading
                    className="title"
                >Resultados</Heading>
                <Heading
                    className="subtitle"
                >Según los datos ingresados hemos identificado <span>{Object.entries(results.results).length}</span> de <span>20</span> posibles enfermedades virales</Heading>
                <VStack alignItems="left">
                {Object.entries(results.results).map(([key, value]) => (
                    <Box className="form-card">
                        <VStack alignItems="left">
                            <Heading
                                className="card-title"
                            >{key}</Heading>
                            <VStack spacing="0.25rem" alignItems="left">
                                <Text
                                    className="card-subtitle"
                                >Descripción:</Text>
                                <Text
                                    className="card-body"
                                >{value.descripcion}</Text>
                                <Text
                                    className="card-subtitle"
                                >Tratamiento:</Text>
                                <Text
                                    className="card-body"
                                >{value.tratamiento}</Text>
                            </VStack>
                        </VStack>
                    </Box>
                ))}
                </VStack>
                <Text
                    color="#089BAC"
                >* Estos resultados están ordenados de más probables a un poco menos probables</Text>
            </VStack>
        </Box>
    ) : (<Box px="20vw" py="15vh">
            <Heading
                className="title"
            >Según los datos ingresados no hemos podido identificar ninguna enfermedad viral</Heading>
        </Box>);
};
export default ResultsMain;