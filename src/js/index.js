import { h, app } from "hyperapp"

import './../sass/index.scss';

import Intro from './slides/intro'

const state = {}

const actions = {}

const view = (state, actions) => (
  <div>
    <Intro />
  </div>
)

app(state, actions, view, document.body)