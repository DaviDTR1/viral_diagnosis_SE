import React from "react";
import NavBar from "../common/NavBar";
import Main from "./Main";
import { HStack } from "@chakra-ui/react";

const Homepage = () => {
    return(
        <>
            <HStack spacing={0} alignItems="left" justifyContent="start">
                <NavBar />
                <Main />
            </HStack>
        </>
    );
};
export default Homepage;

