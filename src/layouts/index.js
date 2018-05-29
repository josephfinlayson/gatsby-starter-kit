import React from 'react'
import PropTypes from 'prop-types'
import cyberIcon from './cyber.svg'
import Header from '../components/header'
import ContentComponent from '../components/contentComponent/contentComponent'
import Vorteil from '../components/vorteile/vorteil'
import '../components/vorteile/index.css'
import '../components/vorteile/index.scss'

const vorteil = {
  'headline': 'Produkt-Detail Headline',
  'text': 'Sicher surfen – Versicherungsschutz gilt auch bei Schäden durch Phishing beim Online-Banking',
  'iconpath': cyberIcon,
  'alt': 'dfghs',
}

const arr = [vorteil, vorteil, vorteil, vorteil, vorteil]

const Layout = ({ children, data }) => (
  <div>
    <Header header="header1"/>

    <ContentComponent
      headline="Produkt-Detail Headline"
      text={
        'Sicher surfen – Versicherungsschutz gilt auch bei Schäden durch Phishing beim Online-Banking'
      }
      iconpath={cyberIcon}
    />

    <ContentComponent
      headline="Produkt-Detail Headline"
      text={
        'Sicher surfen – Versicherungsschutz gilt auch bei Schäden durch Phishing beim Online-Banking'
      }
      iconpath={cyberIcon}
    />

    {arr.map((boxContents =>
      <Vorteil
      headline={boxContents.headline}
      text={boxContents.text}
      iconpath={boxContents.iconpath}
      alt={boxContents.alt}
    />))}


  </div>
)
export default Layout