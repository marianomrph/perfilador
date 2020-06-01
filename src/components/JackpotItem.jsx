import React, { Component } from 'react';
import classNames from 'classnames';
import './Jackpot.scss';

class JackpotItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectOpen: false
		};
	}

	open() {
		this.setState({
			selectOpen: true
		});
	}

	close() {
		this.setState({
			selectOpen: false
		});
	}

	selectAndClose(option) {
		const { onSelect } = this.props;
		onSelect(option);
		this.close();
	}

	render() {
		const { selectOpen } = this.state;
		const { defaultLabel, options, optionLabel } = this.props;
		return (
			<div className="jackpot-select">
				<div className="jackpot-item" onClick={this.open.bind(this)}>
					{optionLabel || defaultLabel} <div className="chevron" />
				</div>
				{selectOpen && (
					<div className="jackpot-modal">
						<div className="jackpot-modal">
							<div className="jackpot-modal-header">
								<div>Elejí una opción</div>
								<div className="close" onClick={this.close.bind(this)} />
							</div>
							{options &&
							options.length && (
								<ul>
									{options.map((option) => (
										<li onClick={() => this.selectAndClose(option)}>{option}</li>
									))}
								</ul>
							)}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default JackpotItem;
