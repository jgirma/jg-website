import PropTypes from 'prop-types'
import React from 'react'
import headshot from '../images/headshot.png'
import personalStill from '../images/personal.png'
import personalGif from '../images/personal.gif'
import genGif from '../images/genesis.gif'
import genStill from '../images/genesis.png'
import giftiiStill from '../images/giftii.png'
import giftiiGif from '../images/giftii.gif'
import hangmanReactStill from '../images/hangman-react.png'
import hangmanReactGif from '../images/hangman-react.gif'
import kwadSquadStill from '../images/kwadsquad.png'
import kwadSquadGif from '../images/kwadsquad.gif'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={headshot} alt="" />
          </span>
          <p>
          I graduated in the Class of 2020 from the University of Alberta with a Bachelor of Science in Electrical Engineering. In addition to my academics I was a member of the Varsity Football Team and was voted by my teammates as a captain for the last 3 years of my degree.

I am passionate about solving real-world problems in a creative way. Whether this be through Web Design, Web Applications or utlizing Machine Learning and Object Detection, if there is a tangible issue that is being solved utlizing programming, I'm interested.

I am a life-long learner. I love reading and learning whatever I can get my hands on. The world of programming has been perfect allowing for me to access to an unending depth of knowledge and technologies that can be used. I am eager to continue growing my talents and learn new technologies and softwares.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>Hover over any of the images to see my work in action!</p>
          <span className="image main">
            <a href="#"><img
            src={genStill} alt="genesis-consulting-site"
            onMouseOver={e => (e.currentTarget.src = genGif)}
            onMouseOut={e => (e.currentTarget.src = genStill)}
            /></a>
            <img
            src={hangmanReactStill} alt="hangman-game"
            onMouseOver={e => (e.currentTarget.src = hangmanReactGif)}
            onMouseOut={e => (e.currentTarget.src = hangmanReactStill)}
            />
            <img
            src={kwadSquadStill} alt="kwad-squad-drone-build"
            onMouseOver={e => (e.currentTarget.src = kwadSquadGif)}
            onMouseOut={e => (e.currentTarget.src = kwadSquadStill)}
            />
            <img
            src={personalStill} alt="personal-site"
            onMouseOver={e => (e.currentTarget.src = personalGif)}
            onMouseOut={e => (e.currentTarget.src = personalStill)}
            />
            <img
            src={giftiiStill} alt="web-design-giftii"
            onMouseOver={e => (e.currentTarget.src = giftiiGif)}
            onMouseOut={e => (e.currentTarget.src = giftiiStill)}
            />

          </span>
          <p>
            HTML CSS Javascript Python C# React Gatsby Git
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="mailto:jonathangirma2@gmail.com"
                className="icon fa-envelope-square"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jg.rma/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jgirma"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
