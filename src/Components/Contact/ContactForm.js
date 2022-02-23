import React from 'react'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { contactAnimation } from '../../Components/Home/animation';


export const ContactForm = () => {
    return (
        <FormContainer variants={contactAnimation} initial='hidden' animate='show' exit="exit">
        <h1> Contact Us</h1>
        <p> Any question or remarks? Just write a message? </p>
        <LeftContainer>
            <h1>Contact Information</h1>
            <p>Fill up the form and out Team 
            will get back to you within 24 hours</p>
        </LeftContainer>
        <RightContainer>
        <form>
            <Row> 
            <Col className="col"> 
                <div className="form-group"> 
                    <label>
                    First Name:
                    <input className= "input" type="text" />
                    </label>
                </div>
                <div className="form-group"> 
                    <label>
                    Last Name:
                    <input className = "input" type="text" />
                    </label>
                </div>
            </Col>
            </Row>
            <Row> 
            <Col className="col"> 
                <div className="form-group"> 
                    <label>
                        Email Address:
                    <input className = "input" type="text"  />
                    </label>
                </div>
                <div className="form-group"> 
                    <label>
                        Phone Number:
                    <input className = "input" type="text" />
                    </label>
                </div>
            </Col>
            </Row>
            <Row>
                <Col className="col">
                <div className="form-group"> 
                    <label class="radio-label">
                        What type of your do you need?
                    </label>
                    <div class="radio-buttons"> 
                    <input type="radio" value='Text' name="photo"/><label>Wedding</label>
                    <input type="radio" value='Text' name="photo"/>Portrait
                    <input type="radio" value='Text' name="photo"/>Fashion
                    <input type="radio" value='Text' name="photo"/>Branding
                    <input type="radio" value='Text' name="photo"/>Filming
                    <input type="radio" value='Text' name="photo"/>Landmarks
                    </div>
                </div>
                </Col>
            </Row>
            </form>
        </RightContainer>
    </FormContainer> 
)
}

const FormContainer = styled.div`
width: 70%;
height: 550px;
background: transparent;
margin: auto;
margin-bottom: 10rem;
padding: 10px;
border-radius: 1rem;
h1{
    font-family: Roboto;
    align-items: center;
    text-align: center;
}
p{
    align-items: center;
    text-align: center;
    padding: 1rem;
    color: gray;
}
@media (max-width: 1000px) {
    width: 100%;
    padding: 0px;
    }
`;
const LeftContainer = styled.div`
width: 35%;
height: 100%;
background: #313833;
float: left;
border-top-left-radius: 1rem;
border-bottom-left-radius: 1rem;
padding:2rem;
h1{
    font-size: 2rem;
    color: white;  
    @media (max-width: 1000px) {
        font-size: 1rem;
    }
}
p{
    font-size: 1rem;
    color: grey;
    padding:.2rem;
}
`;
const RightContainer = styled.div`
width: 65%;
height: 100%;
background: #FFFFFF;
float: right;
border-top-right-radius: 1rem;
border-bottom-right-radius: 1rem;
padding:2rem;
@media (max-width: 1000px) {
    padding: .5rem;
    }
.col{
    display: flex;
    font-size: 1.2rem;
    width: 100%;
    flex: 0 0 100%;
    padding-bottom: 2rem;
}
.form-group{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex: 0 1 100%;
    padding-right: 40px;
    @media (max-width: 1000px) {
    padding: 0px;
    font-size: 3vw;
    }
    .radio-label{
        padding-bottom: 1rem;
    }
    .radio{
        padding:1rem;
    }
    input[type="radio"] {
        margin-left: 12px;
        margin-right: 5px;
        
    }
    .input{
        width: 18vw;
        
    }
    input[type="text"] {
        background: rgba(255, 255, 255,.2);
        border: none; 
        padding: 0px;
        font-size: 1.5rem;
        font-weight: 300;
        border-bottom: .2rem solid lightgray;
        &:focus{
            border: none;
            outline: none;
            border-bottom: .2rem solid #05f7ff;
        }
    }

}
`;
