import React, { Component } from 'react'
import Loading from './loader.gif'

// Importing CSS.....

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} className="spinner_img" alt="Spinner_gif..." />
      </div>
    )
  }
}

export default Spinner