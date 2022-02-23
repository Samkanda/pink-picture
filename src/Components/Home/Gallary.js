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
    justify-self: center ;
    min-height: 100vh;
    background-color: #1F1F1F;
    h1{
        font-size: max(13vw, 30px);
        font-family: "Lobster", cursive;
        font-weight: lighter;
        color: white;
        text-align:center;
        padding-bottom: 2rem;
    }
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns:  repeat(auto-fill, 33%);
    grid-auto-rows: auto;

`;

const Card = styled.div`
    .icon {
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
    img{
        width:28vw;
        height:38vw;
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
    @media (max-width: 700px) {
      h3{
          font-size: 1.5rem;
      }
    }   
`;

export const Description = styled.div`

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
