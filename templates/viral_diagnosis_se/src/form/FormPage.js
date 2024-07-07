import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import NavBar from "../common/NavBar";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from "@chakra-ui/react";
import Select, { StylesConfig } from 'react-select';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const FormPage = () => {
    const [symptomsData, setSymptomsData] = useState([]);
    // url = 'localhost:5000/symptoms'
    const fetchData = () => {
        fetch('/symptoms')
        .then((response) => response.json())
        .then((data) => setSymptomsData(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    let symptomsOptions = [];
    
    try{
        const symptoms = symptomsData.symptoms.map((symptomData) => (
            { value: symptomData.replaceAll(' ','_'), label: symptomData }
        ));
        symptomsOptions = symptoms
    } catch(e){

    }

  const formik = useFormik({
    initialValues: {
        fullName: "",
        age: "",
        symptoms: "",
    },
    // onSubmit: async (values) => {
    //   submit("", values);
    //   if(response){
    //     onOpen(response.type, response.message);};
    //   if(response.type === 'success') {
    //     formik.resetForm();};
    // },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      age: Yup.string().required("Required"),
      symptoms: Yup.string().required("Required").oneOf([symptomsOptions.value]),
    }),
  });

    return Object.keys(symptomsData).length > 0 ? (
        <>
            <NavBar />
            <Box>
                <VStack>
                    <Heading>Escribe los datos</Heading>
                    <Box>
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4} alignItems="left">
                        <FormControl isInvalid={formik.errors.fullName && formik.touched.fullName}>
                            <FormLabel htmlFor="fullName">Name</FormLabel>
                            <Input
                            id="fullName"
                            name="fullName"
                            {...formik.getFieldProps("fullName")}
                            />
                            <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.age && formik.touched.age}>
                            <FormLabel htmlFor="age">Edad</FormLabel>
                            <Input
                            id="age"
                            name="age"
                            {...formik.getFieldProps("age")}
                            />
                            <FormErrorMessage>{formik.errors.age}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="symptoms">Síntomas</FormLabel>
                            <Select
                                id="symptoms"
                                name="symptoms"
                                isMulti
                                options={symptomsOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            {...formik.getFieldProps("symptoms")}
                            >
                            </Select>
                            <FormErrorMessage>{formik.errors.symptoms}</FormErrorMessage>
                        </FormControl>
                        <Button
                            type="submit"
                            width="full"
                            color="white"
                            borderStyle="none"
                            borderRadius= "1.25rem"
                            background= "#089BAC"
                            boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
                            // isLoading={isLoading}
                        >
                            <Link
                            // to="/evolutionForm"
                            // to="/results"
                            >
                            Obtén predicción</Link>
                        </Button>
                        </VStack>
                    </form>
                    </Box>
                </VStack>
            </Box>
        </>
    ) : (
        <h1>Data pending...</h1>
    );
};
export default FormPage;

