import React, { Component } from 'react';
import classNames from 'classnames';
import JackpotItem from './JackpotItem';
import './Jackpot.scss';

const ROTATION_INTERVAL_MILLISECONDS = 100;
const TOTAL_JACKPOT_DURATION_MILLISECONDS = 3000;

const GENRE_OPTIONS = [
	'Drama',
	'Terror',
	'Suspenso',
	'Comedia',
	'Erótico'
];

const TIME_OPTIONS = [
	'Pasado',
	'Presente',
	'Futuro'
];

class Jackpot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			genreLabel: '',
			timeLabel: ''
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
		const randomGenreLabelIndex = Math.floor(Math.random() * GENRE_OPTIONS.length);
		// Get random spaceLabel
		const randomTimeLabelIndex = Math.floor(Math.random() * GENRE_OPTIONS.length);

		this.setState({
			genreLabel: TIME_OPTIONS[randomGenreLabelIndex],
			timeLabel: GENRE_OPTIONS[randomTimeLabelIndex],
		});
	}

	onSelect(labelName, value) {
		this.setState({
			[labelName]: value
		});
	}

	render() {
		const { timeLabel, genreLabel } = this.state;

		return (
			<div className="jackpot-container">
				<div className="jackpot-container-items">
					<JackpotItem
						defaultLabel="Género"
						optionLabel={genreLabel}
						options={GENRE_OPTIONS}
						onSelect={this.onSelect.bind(this, 'genreLabel')}
					/>
					<JackpotItem
						defaultLabel="Tiempo / Espacio"
						optionLabel={timeLabel}
						options={TIME_OPTIONS}
						onSelect={this.onSelect.bind(this, 'timeLabel')}
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
