import React from "react";
import {
    Box,
    Button,
    Heading,
    VStack,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import logo from "../img/logo.svg";

const Main = () => {
    return (
        <Box px="20vw" py="15vh" background="radial-gradient(#C0EFF1, rgba(0, 0, 0, 0))" w="45vw">
            <main>
                <VStack justifyContent="center" spacing="2.5rem" w="30vw">
                    <img src={logo} alt="Viral Diagnosis logo" width="60%"/>
                    <Heading
                        textAlign="center"
                        color="#089BAC"
                        lineHeight="150%"
                        fontWeight="600"
                    >Bienvenido a la aplicación de predicción de enfermedades virales</Heading>
                    <Button
                        className="primary-button"
                    >
                    <Link to="/symptomForm" color="white">Obtén predicción</Link></Button>
                </VStack>
            </main>
        </Box>
    );
};
export default Main;

