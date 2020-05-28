import React, { Component } from 'react'
import classNames from 'classnames'
import JackpotItem from './JackpotItem'
import './Jackpot.scss'

class Jackpot extends Component {
  render () {
    return (
      <div className='jackpot-container'>
        <div className='jackpot-container-items'>
          <JackpotItem defaultLabel='Tiempo' />
          <JackpotItem defaultLabel='Espacio' />
          <JackpotItem defaultLabel='Adjetivo' />
        </div>
        <div className='jackpot-button'>
          <div className='note'>
            <div>Probá al azar!</div>
            <div className='arrow' />
          </div>
          <div className='circle' />
          <div className='line' />
        </div>
      </div>
    )
  }
}

export default Jackpot
