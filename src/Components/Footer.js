import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
        <div className="container">
            <div className="row">
                {/* Column 1 */}
                <div className="col-md-3 col-sm-6">
                    <h4>Social</h4>
                    <ul className="list-unstyled">
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Services</h4>
                    <ul className="list-unstyled">
                        <li>Portraits</li>
                        <li>Landscapes</li>
                        <li>Techical Support</li>
                        <li>Monuments</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>About</h4>
                    <ul className="list-unstyled">
                        <li>History</li>
                        <li>Founder</li>
                        <li>Employees</li>
                        <li>Company</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Contact</h4>
                    <ul className="list-unstyled">
                        <li>Hiring</li>
                        <li>Volunteering</li>
                        <li>Purchasing</li>
                        <li>Helpline</li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} NavTastic Films- All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    background-color: #1c1b1b;
    color: white;
    padding-top: 3rem;
    .footer-bottom{
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
    p{
        color: #ccc;
    }
`;

export default Footer;