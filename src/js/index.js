import { h, app } from "hyperapp"

import './../sass/index.scss';

import HealthWarning from './slides/health_warning'

const state = {}

const actions = {}

const view = (state, actions) => (
  <div>
    <HealthWarning />
  </div>
)

app(state, actions, view, document.body)
