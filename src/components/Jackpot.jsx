import React, { Component } from 'react';
import classNames from 'classnames';
import JackpotItem from './JackpotItem';
import './Jackpot.scss';

const ROTATION_INTERVAL_MILLISECONDS = 100;
const TOTAL_JACKPOT_DURATION_MILLISECONDS = 3000;

const TIME_OPTIONS = [
	'En los años 1600',
	'La época de los dinosaurios',
	'El futuro lejano',
	'La segunda guerra mundial'
];

const SPACE_OPTIONS = [
	'Argentina',
	'Europa, una luna de Júpiter',
	'Titán, una luna de Saturno',
	'Un bosque encantado'
];

const ADJECTIVE_OPTIONS = [ 'Sombrío', 'Caliente', 'Frío', 'Húmedo', 'Rápido' ];

class Jackpot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLabel: '',
			spaceLabel: '',
			adjectiveLabel: ''
		};
	}

	componentWillUnmount() {
		this.stopJackpot();
	}

	startJackpot() {
		this.stopJackpot();
		this._jackpotTimeout = setTimeout(this.stopJackpot.bind(this), TOTAL_JACKPOT_DURATION_MILLISECONDS);
		this._rotationInterval = setInterval(this.randomRotation.bind(this), ROTATION_INTERVAL_MILLISECONDS);
	}

	stopJackpot() {
		if (this._jackpotTimeout) {
			clearTimeout(this._jackpotTimeout);
		}

		if (this._rotationInterval) {
			clearInterval(this._rotationInterval);
		}
	}

	randomRotation() {
		// Get random timeLabel
		const randomTimeLabelIndex = Math.floor(Math.random() * TIME_OPTIONS.length);
		// Get random spaceLabel
		const randomSpaceLabelIndex = Math.floor(Math.random() * TIME_OPTIONS.length);
		// Get random adjectiveLabel
		const randomAdjectiveLabelIndex = Math.floor(Math.random() * TIME_OPTIONS.length);

		this.setState({
			timeLabel: TIME_OPTIONS[randomTimeLabelIndex],
			spaceLabel: SPACE_OPTIONS[randomSpaceLabelIndex],
			adjectiveLabel: ADJECTIVE_OPTIONS[randomAdjectiveLabelIndex]
		});
	}

	onSelect(labelName, value) {
		this.setState({
			[labelName]: value
		});
	}

	render() {
		const { timeLabel, spaceLabel, adjectiveLabel } = this.state;

		return (
			<div className="jackpot-container">
				<div className="jackpot-container-items">
					<JackpotItem
						defaultLabel="Tiempo"
						optionLabel={timeLabel}
						options={TIME_OPTIONS}
						onSelect={this.onSelect.bind(this, 'timeLabel')}
					/>
					<JackpotItem
						defaultLabel="Espacio"
						optionLabel={spaceLabel}
						options={SPACE_OPTIONS}
						onSelect={this.onSelect.bind(this, 'spaceLabel')}
					/>
					<JackpotItem
						defaultLabel="Adjetivo"
						optionLabel={adjectiveLabel}
						options={ADJECTIVE_OPTIONS}
						onSelect={this.onSelect.bind(this, 'adjectiveLabel')}
					/>
				</div>
				<div className="jackpot-button" onClick={this.startJackpot.bind(this)}>
					<div className="note">
						<div>Probá al azar!</div>
						<div className="arrow" />
					</div>
					<div className="circle" />
					<div className="line" />
				</div>
			</div>
		);
	}
}

export default Jackpot;
