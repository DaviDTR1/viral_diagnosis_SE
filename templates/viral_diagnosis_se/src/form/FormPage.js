import React from "react";
import NavBar from "../common/NavBar";
import SymptomsFormMain from "./SymptomsFormMain";
import { HStack } from "@chakra-ui/react";

const FormPage = () => {
    return(
        <>
            <HStack spacing={0}>
                <NavBar />
                <SymptomsFormMain />
            </HStack>
        </>
    );
};
export default FormPage;

