import React from 'react'
import { data } from "../helpers/content"

const Header = props => (
  <div>
    <div>
      <h1>
        {props.header}
      </h1>
      <h2>{data()}</h2>
    </div>
  </div>
)

export default Header
