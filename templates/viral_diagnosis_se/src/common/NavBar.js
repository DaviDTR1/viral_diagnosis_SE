import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import './NavBar.css';

const Home = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#089BAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 22V12H15V22" stroke="#089BAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
};

const Prediction = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_10_55)">
                <path d="M2.2124 13.5C4.0529 16.26 7.1684 19.3065 11.9999 22.5C16.8314 19.3065 19.9469 16.26 21.7874 13.5H17.9999C17.8501 13.5 17.7038 13.4551 17.5797 13.3712C17.4557 13.2872 17.3596 13.1681 17.3039 13.029L15.1184 7.56604L12.7214 15.9555C12.6785 16.106 12.5897 16.2393 12.4673 16.3368C12.345 16.4342 12.1952 16.491 12.0389 16.4991C11.8827 16.5072 11.7278 16.4662 11.596 16.3819C11.4642 16.2977 11.3621 16.1743 11.3039 16.029L8.8334 9.85204L6.6239 13.167C6.55531 13.2696 6.46247 13.3536 6.35362 13.4117C6.24478 13.4698 6.12328 13.5001 5.9999 13.5H2.2124Z" fill="#089BAC"/>
                <path d="M1.31993 12.0002C-3.64057 2.52021 6.61493 -2.99979 11.7344 1.71471C11.8244 1.79771 11.9124 1.88321 11.9984 1.97121C12.0829 1.88266 12.171 1.79759 12.2624 1.71621C17.3849 -2.99979 27.6389 2.52021 22.6799 12.0002H18.5054L15.6944 4.97121C15.6362 4.82599 15.5341 4.7026 15.4023 4.61832C15.2705 4.53403 15.1156 4.49307 14.9594 4.50118C14.8032 4.50928 14.6534 4.56603 14.531 4.6635C14.4086 4.76096 14.3198 4.89425 14.2769 5.04471L11.8814 13.4342L9.69593 7.97121C9.64503 7.84448 9.56049 7.73406 9.45144 7.65185C9.34239 7.56964 9.21296 7.51876 9.07711 7.50472C8.94127 7.49067 8.80416 7.51398 8.6806 7.57213C8.55703 7.63029 8.45168 7.72108 8.37593 7.83471L5.59793 12.0002H1.31993Z" fill="#089BAC"/>
            </g>
            <defs>
                <clipPath id="clip0_10_55">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
};

const NavBar = () => {
    return (
        <Box
            width="15vw"
            height="100vh"
            py="2.5rem"
            borderRight="1px solid #E0E0E0"
            boxShadow="4px 0px 8px 0px #F2F6F5"
        >
            <VStack
                alignItems="center"
                spacing="1rem"
            >
                <img src={logo} alt="Viral Diagnosis logo" width={150}/>
                <nav>
                    <VStack
                        spacing="0"
                        fontWeight="500"
                        fontSize="1.25rem"
                        alignItems="left"
                    >
                        <Button
                            className="navbar-button"
                            leftIcon={<Home />}
                            justifyContent="start"
                        ><Link to="/" >Inicio</Link></Button>
                        <Button
                            className="navbar-button"
                            leftIcon={<Prediction />}
                            justifyContent="start"
                        ><Link to="/symptomForm" >Predicción</Link></Button>
                    </VStack>
                </nav>
            </VStack>
        </Box>
    );
};
export default NavBar;
