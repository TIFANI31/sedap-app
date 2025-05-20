import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './custom.css';
import ArtikelDetail from "./ArtikelDetail";
import QnaSection from "./QnASection"; 
import ListProduct from "./ListProduct"; 
import AboutUs from "./AboutUs"; 
import ContactUs from "./ContactUs"; 

createRoot(document.getElementById("root")).render(
    <div>
        <Container>
            <HelloWorld />
        </Container>
        
            <ArtikelDetail />
    
            <QnaSection />
       
            <ListProduct />
  
            <AboutUs />
      
            <ContactUs />
    </div>
);