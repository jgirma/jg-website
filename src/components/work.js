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
                <section className="column">
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
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
background-color: white;
z-index: 1;

.column {
    flex-direction: column;
}

.row{
    flex-direction: row;
}

.portfolio-img{
    height: 20rem;
    width: auto;
    display: fixed;
}

.mobile{
    border-radius: 5px;
    margin-left: 15%;
}

.site-example {
    margin: 5%;
}
`

export default WorkPage;