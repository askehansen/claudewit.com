import './styles/site.css'

import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

// whenever dom is ready
document.addEventListener('ready', () => {
  scrollSnapPolyfill()
})

// import { Application } from "stimulus"
// import { definitionsFromContext } from "stimulus/webpack-helpers"
//
// const application = Application.start()
// const context = require.context("./controllers", true, /\.js$/)
// application.load(definitionsFromContext(context))
