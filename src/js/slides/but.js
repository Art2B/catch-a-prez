import React, { Component } from 'react'

class But extends Component {
  componentDidMount () {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let count = 0
    let redCount = 208

    const draw = () => {
      const img = ctx.createImageData(window.innerWidth, window.innerHeight)
      const d = img.data

      const nbPixels = window.innerWidth * window.innerHeight
      const nbCanals = 4

      for (let i = 0; i < nbPixels*nbCanals; i += nbCanals) {
        d[i] = Math.abs(Math.sin(i * redCount)) * 255
        d[i + 1] = Math.abs(Math.cos(count)) * 60
        d[i + 2] = Math.abs(Math.sin(Math.sqrt(i) + count)) * 120
        d[i + 3] = 250
      }
      ctx.putImageData(img, 0, 0)
      count += 0.8
      redCount += 0.5
      window.requestAnimationFrame(draw)
    }

    draw()
  }


  render () {
    return (
      <div className="slide intro but">
        <h1>but !</h1>
        <canvas id="canvas" />
      </div>
    )
  }
}



export default But
