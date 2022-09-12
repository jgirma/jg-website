import React from "react";
import styled from 'styled-components'
import successLink from '../images/successlink.png'
import amplified from '../images/amplified.png'
import successLinkMobile from '../images/successlink-mobile.png'
import amplifiedMobile from '../images/amplified-mobile.png'

class WorkPage extends React.Component {
    render(){
        return(
            <Wrapper>
                <section className="column work-section">
                    <h1>RECENT WORK</h1>
                    <div className="site-example">
                        <div className="row">
                            <a target="_blank" rel="noreferrer" href='https://www.successlink.ca/'>
                                <img className="portfolio-img" src={successLink} alt="success-link-website" />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://www.successlink.ca/'>
                                <img className="portfolio-img mobile" src={successLinkMobile} alt="success-link-website-mobile" />
                            </a>
                        </div>
                    </div>
                    <div className="site-example">
                        <div className="row">
                            <a target="_blank" rel="noreferrer" href='https://www.amplifiedchurch.ca/'>
                                <img className="portfolio-img" src={amplified} alt='amplified-website' />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://www.amplifiedchurch.ca/'>
                                <img className="portfolio-img mobile" src={amplifiedMobile} alt='amplified-website-mobile' />
                            </a>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    © 2022 Jonathan Girma
                </footer>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
background-color: white;
z-index: 1;

.portfolio-img{
    height: 20rem;
    width: auto;
    display: fixed;

    @media only screen and (max-width: 767px){
        height: 10rem;
        justify-content: space-evenly;
    }
}

.work-section {
    height: auto;
    min-height: 100vh;
}

.mobile{
    border-radius: 5px;
    margin-left: 15%;

    @media only screen and (max-width: 767px){
        display: none;
    }
}

.site-example {
    margin: 5%;
}

.footer{
    justify-content: center
}
`

export default WorkPage;