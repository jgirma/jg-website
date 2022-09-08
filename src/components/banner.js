import React from 'react'
import bgVid from '../videos/video.mp4'
import styled from 'styled-components'
import NavBar from './navbar'

class BannerPage extends React.Component {
    render() {
        return (
            <Wrapper>
                <section>
                    <NavBar />
                    <div className='video-wrapper'>
                        <video className='background-vid' autoplay='true' muted='true' loop id='bg-video'>
                            <source src={bgVid} type='video/mp4'/>
                        </video>
                    </div>
                    <h1 className='title'>JONATHAN GIRMA</h1>
                    <p className='description'>Bringing Creative Solutions through Web Applications</p>
                </section>
            </Wrapper>
        )
    }
}

    
    const Wrapper = styled.div`
    
    .video-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%; 
      overflow: hidden;
    }
    
    .background-vid {
      height: auto;
      width: auto;
    
      min-height: 100%;
      min-width: 100%;
    
      z-index: -1;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 6rem;
      z-index: -1;
    }
    
    .description {
      position: absolute;
      top: 90%;
      left: 30%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.5rem;
      z-index: -1;
    }
    `

export default BannerPage;