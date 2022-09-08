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
                        My name is Jonathan. I am a FrontEnd Engineer/ Web Developer based out of New York City.<br/><br/>
                       Since graduating with an Electrical Engineering degree, I quickly made the pivot to software development and have spent the past
                       several years creating and maintaining web applications.<br/><br/>
                       In today's day and age, a website if often the first contact point between a user and your company/ service/ organization.<br/><br/>
                       I work to make that contact point both enjoyable and effective. <br/><br/> 
                       I currently take on freelance work on a per-project basis. If you are interested, feel free to reach out.
                       <a className="email" href='mailto:jonathangirma2@gmail.com'>jonathangirma2@gmail.com</a>
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
}

.about-img {
    height: 40rem;
    border-radiu: 5px;
    margin-left: 15%;
}
.email{
    font-style: italic;
    text-decoration: underline;
    color: white;
}
`

export default AboutPage;