import React, { Component } from 'react'
import randomColor from 'randomcolor'

class Code extends Component {
  componentDidMount () {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const draw = () => {
      const drawCircle = (xPos, yPos, color) => {
        ctx.fillStyle = color
        ctx.globalAlpha = 0.2
        ctx.beginPath()
        ctx.arc(xPos,yPos,20,0,2*Math.PI)
        ctx.fill()
      }

      for (let i = 0; i < 3; i++) {
        const xPosition = Math.random() * canvas.width
        const yPosition = Math.random() * canvas.height
        const color = randomColor()
        drawCircle(xPosition, yPosition, color)
      }

      window.requestAnimationFrame(draw)
    }

    draw()
  }


  render () {
    return (
      <div className="slide intro">
        <h1>What do I like to code ?</h1>
        <canvas id="canvas" />
      </div>
    )
  }
}



export default Code
