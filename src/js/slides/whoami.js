import React, { Component } from 'react'
import randomColor from 'randomcolor'

const colomnWidth = 29
const quadHeight = 20

const drawLines = (ctx) => {
  for (let i = 0; i < window.innerWidth; i += colomnWidth) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, window.innerHeight)
    ctx.stroke()
  }
}

const drawQuad = (ctx, points, color) => {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.moveTo(points[0].x, points[0].y)
  ctx.lineTo(points[1].x, points[1].y)
  ctx.lineTo(points[2].x, points[2].y)
  ctx.lineTo(points[3].x, points[3].y)
  ctx.closePath()
  ctx.fill()
}

const getOddQuadPoints = (x, y, height) => {
  return [{
    x: x,
    y: y
  }, {
    x: x + colomnWidth,
    y: y - (quadHeight/2)
  }, {
    x: x + colomnWidth,
    y: y - (quadHeight/2) + height
  }, {
    x: x,
    y: y + height
  }]
}

const getEvenQuadPoints = (x, y, height) => {
  return [{
    x: x,
    y: y - (quadHeight/2)
  }, {
    x: x + colomnWidth,
    y: y
  }, {
    x: x + colomnWidth,
    y: y + height
  }, {
    x: x,
    y: y - (quadHeight/2) + height
  }]
}

class Whoami extends Component {
  componentDidMount () {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    for (let w = 0; w < window.innerWidth; w += colomnWidth) {
      let currentHeight = 0
      do {
        const height = quadHeight/2 + Math.random() * (quadHeight/2)
        const points = w % 2 === 0 ? getEvenQuadPoints(w, currentHeight, height) : getOddQuadPoints(w, currentHeight, height)

        drawQuad(ctx, points, randomColor())
        currentHeight += height
      } while (currentHeight < window.innerHeight) 
    }
  }


  render () {
    return (
      <div className="slide intro">
        <h1>Who am I?</h1>
        <p className="comment">Yes, it's a Snoop Dogg reference.</p>
        <canvas id="canvas" />
      </div>
    )
  }
}



export default Whoami
