import React from 'react'
import styled from 'styled-components'

class NavBar extends React.Component {
    render() {
        return (
            <Wrapper>
                <ul className='navbar'>
                    <li className='list-element'><a href='https://linkedin.com/in/jonathan-girma' target="_blank" rel="noreferrer">LINKEDIN</a></li>
                    <li className='list-element'><a href='https://www.instagram.com/jg.rma/?hl=en' target="_blank" rel="noreferrer">INSTAGRAM</a></li>
                    <li className='list-element'><a href='mailto:jonathangirma2@gmail.com' target="_blank" rel="noreferrer">EMAIL</a></li>
                </ul>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
position: absolute;
top: 0;
display: flex;
flex-direction: row;
z-index: 1;
backdrop-filter: blur(80%);

.navbar{
    justify-content: unset;
    flex-wrap: unset;
    a {
        color: white;
        text-decoration: none;
    }
}

.list-element {
    margin: 0 5% 0 5%;
}

`

export default NavBar;