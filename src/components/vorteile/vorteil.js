import React from 'react'
import PropTypes from 'prop-types'
import { data } from "../../helpers/content"

import "./vorteil.scss"



const VorteilComponent = props => {

  console.log(props)
  return (
  <div className="col-md-8">
    <div className="vorteile-box">
      <img className="vorteile-box__icon" src={props.iconPath} alt={props.alt}/>
        <h3 className="vorteile-box__title">{props.headline}</h3>
        <p className="vorteile-box__content">
          {props.text}
        </p>
    </div>
  </div>
)}

VorteilComponent.propTypes = {
  iconPath: PropTypes.string,
  alt: PropTypes.string,
  headline: PropTypes.string,
  text: PropTypes.string,
}

export default VorteilComponent