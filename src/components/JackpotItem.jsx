import React, { Component } from 'react'
import classNames from 'classnames'
import './Jackpot.scss'

class JackpotItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectOpen: false
    }
  }

  open () {
    this.setState({
      selectOpen: true
    })
  }

  close () {
    this.setState({
      selectOpen: false
    })
  }

  render () {
    const { selectOpen } = this.state
    const { defaultLabel, optionLabel } = this.props
    return (
      <div className='jackpot-select'>
        <div className='jackpot-item' onClick={this.open.bind(this)}>{defaultLabel} <div className='chevron' /></div>
        { selectOpen &&
          <div className='jackpot-modal'>
            <div className='jackpot-modal'>
              <div className='jackpot-modal-header'>
                <div>Elejí una opción</div>
                <div className='close' onClick={this.close.bind(this)} />
              </div>
              <ul>
                <li>Opción 01</li>
                <li>Opción 01</li>
                <li>Opción 01</li>
                <li>Opción 01</li>
                <li>Opción 01</li>
                <li>Opción 01</li>
                <li>Opción 01</li>
              </ul>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default JackpotItem
