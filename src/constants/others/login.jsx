import React from 'react'
import { Button, ButtonModal, Cancelwrapper, Container, Country, Emailwrapper, Inputwrapper, Line, Middle, MiddleLeft, MiddleRight, Namewrapper, Personal, Role, Rolewrapper, Timezone, Wrapper } from '../styles/style'
import def from "../../assets/def.jpg"
import Popup from 'reactjs-popup';
import LoginIcon from '@mui/icons-material/Login';


const LoginComponent = () => {
  return (
      <Container>
      <Wrapper>
      <Personal>
        <p>Personal Info</p>
        <h4>Customize how your profile information will appear to the networks</h4>
      </Personal>
      <Line></Line>
      <Middle>
        <MiddleLeft>
         <img src={def} alt="def" />
        </MiddleLeft>
        <MiddleRight>
            <Namewrapper>
             <p>Name</p>
             <Inputwrapper>
                <input type="text" placeholder='First Name' />
             </Inputwrapper>
             <Inputwrapper>
                <input type="text" placeholder='Last Name' />
             </Inputwrapper>
            </Namewrapper>
            <Rolewrapper>
              <Role>
                <p>Role</p>
                <Inputwrapper>
                  <input type="text" placeholder='Enter your role' />
                </Inputwrapper>
              </Role>
              <Emailwrapper>
                <p>Email</p>
                <Inputwrapper>
                  <input type="text" placeholder='Enter email address' />
                </Inputwrapper>
              </Emailwrapper>
            </Rolewrapper>
            <Country>
                <p>Country</p>
                <Inputwrapper>
                  <input type="text" placeholder='Select country' />
                </Inputwrapper>
            </Country>
            <Timezone>
              <p>Timezone</p>
              <Inputwrapper>
                  <input type="number" placeholder='Select timezone' />
              </Inputwrapper>
            </Timezone>
        </MiddleRight>
      </Middle>
      <Line></Line>
      <Cancelwrapper>
        <button>Cancel</button>
        <button>Save</button>
      </Cancelwrapper>
      </Wrapper>
    </Container>   
  )
}

export default LoginComponent;