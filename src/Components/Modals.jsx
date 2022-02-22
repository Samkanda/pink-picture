import * as React from 'react';
import {Modal, Box, Backdrop, Fade, Button} from '@material-ui/core';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '2px solid #000',
  boxShadow: 24,
  
};

const Boxx = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: #F5F2EB;
  font-weight: 800;
  padding: 6rem;
  @media (max-width: 800px){
    padding: 4rem 0 4rem 2rem
    button{
      width: 1rem;
    }
  }

`;


const Bar = styled.div`
    width: 20%;
    height: 3rem;
    background-color: pink;
    display: inline-block;
`;

const TextContainer = styled.div`
&:hover{
  cursor: pointer;
    .stff{
      transition: all 0.3s ease-in-out;
      width: 45%;
    } 
  }
`;

const Text = styled.h2`
    display: inline-block;
    padding-left: 1rem;
    @media (max-width: 500px){
      font-size: 2.5rem;
    }
`;


const Modals = ({open, handleOpen, handleClose, setOpen}) => {
  return (
    <div >
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Boxx sx={style}>
            <Link to="/">
            <TextContainer onClick={handleClose}>
              <Bar className='stff'/>
                <Text >
                  Home
                </Text>
            </TextContainer>
            </Link>
            {/* <Link to='/work'>
            <TextContainer onClick={handleClose}>
              <Bar className='stff' style={{backgroundColor: '#e0536a'}}/>
                <Text >
                  Film
                </Text>
            </TextContainer>
            </Link>
            <Link to='/contact'>
            <TextContainer onClick={handleClose}>
              <Bar className='stff' style={{backgroundColor: '#cc0e2e'}}/>
                <Text >
                  Contact
                </Text>
            </TextContainer>
            </Link> */}
            <button onClick={handleClose}><h1>Close</h1></button>
          </Boxx>
        </Fade>
      </Modal>
    </div>
  )
}

export default Modals