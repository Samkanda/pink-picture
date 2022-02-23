import React from 'react';
import styled from 'styled-components';
import wedding from '../../img/wedding.jpg'
import portrait from '../../img/portrait.jfif'
import film from '../../img/film.jpg'
import Branding from '../../img/Branding.jpg'
import Fashion from '../../img/Fashion.jfif' 
import Landmarks from '../../img/Landmarks.jpg'

export const Gallary = () => {
    return (
        <GalleryContainer>
            <h1>Gallery</h1>
            <Description>
            <Cards>
                <Card>
                <TileImage>
                <img src={wedding} alt="dd"/>
                <h3>Weddings</h3>
                </TileImage>
                </Card>
                <Card>
                    <TileImage>
                    <img src={portrait} alt="dd"/>
                    <h3>Portraits</h3>
                    </TileImage>
                </Card>
                <Card>
                    <TileImage>
                    <img src={film} alt="dd"/>
                    <h3>Filming</h3>
                    </TileImage>
                </Card>
                <Card>
                    <TileImage>
                    <img src={Branding} alt="dd"/>
                    <h3>Branding</h3>
                    </TileImage>
                </Card>
                <Card>
                    <TileImage>
                    <img src={Fashion} alt="dd"/>
                    <h3>Fashion</h3>
                    </TileImage>
                </Card>
                <Card>
                    <TileImage>
                    <img src={Landmarks} alt="dd"/>
                    <h3>Landmarks</h3>
                    </TileImage>
                </Card>
              </Cards>
          </Description>
        </GalleryContainer>
    )
}

const GalleryContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #1F1F1F;
    h1{
        position: absolute;
        font-size: 10.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        color: white;
        width:100%;
        text-align:center;
        @media (max-width: 1500px) {
            font-size: 4rem;
        }
    }
    
    
`;

const Cards = styled.div`

    padding-left:6rem ; 
    display: flex;
    flex-flow: row wrap;
    @media (max-width: 1500px) {
        padding-left: 0rem;
        justify-content: center;
        }
`;

const Card = styled.div`

    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;
export const TileImage = styled.div`

    flex: 1;
    padding-top: 2rem;
    padding-right: 2rem;
    @media (max-width: 1500px) {
        padding-right: 0rem;
        }
    img{
        width:28rem;
        height:38rem;
        object-fit:cover;
        -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    }
    h3 {
        position: relative;
        bottom: 4rem;
        text-align: center;
        font-size: 50px;
        color: white;
        font-family: 'STIX Two Text',serif;

    }
    @media (max-width: 500px) {
        img{
        width:93vw;
        height:54vw;
        
    }}
    
`;

export const Description = styled.div`
    flex: 1;
    padding-left:5rem;
    padding-top: 15rem;
    @media (max-width: 1500px) {
        padding-left: 0rem;
        padding-top: 3rem;
        }
    h1{
        position: absolute;
        font-size: 10.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        color: white;
        @media (max-width: 1500px) {
            font-size: 1rem;
        }
    }
    h2{
        font-weight: lighter;
    }
`;
