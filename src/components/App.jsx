import React, { Component } from 'react'
import classNames from 'classnames'
import './App.scss'
import Jackpot from './Jackpot'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='w1' />
        <a className='instagram' href="https://www.instagram.com/wolko1/" target='_blank' />
        <div className='home-content'>
          <div className='title' />
          <p className='subtitle'>Elegí el perfil que más te interece o enriquezca tu historia.</p>
          <Jackpot />
          <p className='reference'>Esto solo es un disparador, podés pensar en muchas más opciones que te ayuden a construir tu perfil. Una canción, una stación del año? Occure de día o de noche?.</p>
        </div>
        <div className='footer'>
          <a href="https://github.com/marianomrph/random-image-roulette" target="_blank">
            <span className='github-icon' />
            <span>Disponible en Github.</span>
          </a>
          <p>Colaboración: Juan Manuel Vallejo.</p>
        </div>
      </div>
    )
  }
}

export default App
