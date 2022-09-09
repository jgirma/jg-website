import React from "react";
import styled from 'styled-components'
import about from '../images/about.jpeg'

class AboutPage extends React.Component {
    render(){

        return (
            <Wrapper>
                <section>
                    <img src={about} className="about-img" alt="jonathan-girma" />
                    <p className="about-text">
                        My name is Jonathan. I am a FrontEnd Engineer/ Web Developer based out of New York City, currently working at <a className="emphasized-link" href="https://www.audible.com/" target="_blank" rel="noreferrer" >Audible.</a><br/><br/>
                       In today's day and age, a website if often the first contact point between a user and your company/ service/ organization.<br/><br/>
                       I work to make that contact point both enjoyable and effective. <br/><br/> 
                       I currently take on freelance work on a per-project basis. If you are interested, feel free to reach out.<br/>
                       <a className="emphasized-link" href='mailto:jonathangirma2@gmail.com'>jonathangirma2@gmail.com</a>
                    </p>
                </section>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
background-color: black;
z-index: 1;

.about-text {
    font-size: 1.5rem;
    color: white;
    margin: 20%;

    @media only screen and (max-width: 767px){
        font-size 1rem;
    }
}

.about-img {
    height: 40rem;
    border-radiu: 5px;
    margin-left: 15%;

    @media only screen and (max-width: 1200px){
        display: none;
    }
}

.emphasized-link{
    font-style: italic;
    text-decoration: underline;
}
`

export default AboutPage;