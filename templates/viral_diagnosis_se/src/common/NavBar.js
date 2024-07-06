import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <sidebar>
            <Box width="20vw" py="2.5rem">
                <VStack
                    alignItems="center"
                    spacing="1rem"
                >
                    {/* <img src={logo} alt="Viral Diagnosis logo" width={200}/> */}
                    <nav>
                        <VStack
                            spacing="1.75rem"
                            fontWeight="500"
                            fontSize="1.25rem"
                        >
                            <Link to="/" >Inicio</Link>
                            <Link to="/symptomForm" >Predicción</Link>
                        </VStack>
                    </nav>
                </VStack>
            </Box>
        </sidebar>
    );
};
export default NavBar;
