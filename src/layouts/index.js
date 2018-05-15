import React from 'react'
import PropTypes from 'prop-types'
import cyberIcon from './cyber.svg'
import Header from '../components/header'
import ContentComponent from '../components/contentComponent/contentComponent'
import './index.css'

// const contentful = require('contentful')
//
// const SPACE_ID = 'j2dqyn79bqxi'
// const ACCESS_TOKEN =
//   'd011fdec2f1cd9fc4a30f9cfe07c21ab160b9a4499a1e3c002021c1c63668a0e'
//
// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: SPACE_ID,
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: ACCESS_TOKEN,
// })
//
// // Load all entries for a given Content Type from Contentful
// function fetchEntriesForContentType(contentType) {
//   return client
//     .getEntries({
//       content_type: 'contentSquare',
//     })
//     .then(response => response.items)
//     .catch(error => {
//       console.error(error)
//     })
// }

// Start the boilerplate code

const JSON = [
  {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: 'j2dqyn79bqxi' } },
      id: '7htef9Vw886QkCmoIyIWQ8',
      type: 'Entry',
      createdAt: '2018-05-15T12:31:29.352Z',
      updatedAt: '2018-05-15T12:59:37.871Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' },
      },
      revision: 2,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'contentSquare' },
      },
      locale: 'en-US',
    },
    fields: {
      title: 'Einbruch & Diebstahl ',
      description:
        ' Bei Einbruch in Ihre Wohnung leisten wir für Ihre gestohlenen oder beschädigten Sachen. Das gilt z. B. auch für Schiffskabinen oder Hotelzimmer. ',
      icon: {
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'j2dqyn79bqxi' },
          },
          id: '4DwM9Vj3CUAMK0ACKM2Im8',
          type: 'Asset',
          createdAt: '2018-05-15T12:18:50.973Z',
          updatedAt: '2018-05-15T12:18:50.973Z',
          environment: {
            sys: { id: 'master', type: 'Link', linkType: 'Environment' },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'einbruch',
          file: {
            url:
              '//images.ctfassets.net/j2dqyn79bqxi/4DwM9Vj3CUAMK0ACKM2Im8/b7ae708c483a49b25c4660ab35a4f18a/einbruch.svg',
            details: { size: 2565, image: { width: 44, height: 44 } },
            fileName: 'einbruch.svg',
            contentType: 'image/svg+xml',
          },
        },
      },
    },
  },
]

const Layout = ({ children, data }) => (
  <div>
    <Header header="header1" />

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
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
