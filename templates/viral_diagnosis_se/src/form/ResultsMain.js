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
        <Box>
            <VStack>
                <Heading>Resultados</Heading>
                <Heading>Según los datos ingresados hemos identificado {Object.entries(results.results).length} de 20 posibles enfermedades virales</Heading>
                <VStack>
                {Object.entries(results.results).map(([key, value]) => (
                    <Box>
                        <Heading>{key}</Heading>
                        <VStack spacing={0}>
                            <Text>Descripción:</Text>
                            <Text>{value.descripcion}</Text>
                            <Text>Tratamiento:</Text>
                            <Text>{value.tratamiento}</Text>
                        </VStack>
                    </Box>
                ))}
                </VStack>
                <Text>Estos resultados están ordenados de más probables a un poco menos probables</Text>
            </VStack>
        </Box>
    ) : (<Heading>Según los datos ingresados no hemos podido identificar ninguna enfermedad viral</Heading>);
};
export default ResultsMain;