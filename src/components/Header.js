import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
       width="4rem" height="2rem" viewBox="0 0 177.000000 177.000000"
       preserveAspectRatio="xMidYMid meet">
      <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M1036 1455 c-262 -67 -402 -294 -341 -554 38 -159 151 -272 320 -317
      76 -21 238 -17 352 7 l98 21 -3 135 c-4 171 -2 179 48 194 28 9 40 18 40 31 0
      17 -12 18 -170 18 -159 0 -170 -1 -170 -19 0 -14 10 -20 43 -25 83 -14 87 -20
      87 -154 0 -112 -1 -120 -24 -141 -30 -28 -113 -41 -190 -30 -189 26 -306 185
      -306 414 1 134 31 223 102 296 54 56 116 81 209 87 144 8 237 -39 280 -143 16
      -39 28 -55 42 -55 17 0 18 6 12 68 -3 37 -8 86 -11 109 l-5 41 -62 12 c-102
      19 -284 22 -351 5z"/>
      <path d="M222 1433 c2 -11 18 -20 46 -26 75 -15 74 -4 70 -444 l-3 -388 -29
      -58 c-18 -38 -42 -68 -67 -85 -42 -30 -43 -31 -29 -52 13 -21 68 8 135 71 102
      97 115 160 115 601 l0 317 26 20 c15 12 40 21 55 21 22 0 29 5 29 20 0 19 -7
      20 -176 20 -161 0 -175 -1 -172 -17z"/>
      </g>
      </svg>
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Jonathan Girma</h1>
        <p>
          Freelance Web Developer
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
