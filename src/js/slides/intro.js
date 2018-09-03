import React, { Component } from 'react'

class Intro extends Component {
  componentDidMount () {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let redCount = 0
    let blueCount = 0
    let greenCount = 100

    const draw = () => {
      const img = ctx.createImageData(window.innerWidth, window.innerHeight)
      const d = img.data
      const nbPixels = window.innerWidth * window.innerHeight
      const nbCanals = 4

      for (let i = 0; i < nbPixels*nbCanals; i += nbCanals) {
        d[i] = Math.abs(Math.sin(Math.pow(i, redCount))) * 255
        d[i + 1] = Math.abs(Math.sin(Math.cos(i + greenCount * 5) + Math.cos(greenCount))) * 255
        d[i + 2] = Math.abs(Math.sin(Math.sqrt(i) + blueCount)) * 100 + 155
        d[i + 3] = 255 //Math.random() * 100 + 155
      }

      ctx.putImageData(img, 0, 0)

      // END
      redCount = redCount < 2 ? redCount + 0.002 : 0
      blueCount += 0.002
      greenCount = greenCount <= 0 ? 100: greenCount - 0.2
      window.requestAnimationFrame(draw)
    }

    draw()
  }


  render () {
    return (
      <div className="slide intro">
        <h1>Arthur <br/>101</h1>
        <canvas id="canvas" />
      </div>
    )
  }
}



export default Intro
