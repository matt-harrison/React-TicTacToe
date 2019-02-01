import React, {Component} from 'react';

class History extends React.Component {
  render() {
    if (!this.props.isAsc) {
      this.props.history.reverse();
    }

    const buttons = this.props.history.map((move, index) => {
      const row = move.square % 3 + 1;
      const column = Math.floor(move.square / 3) + 1;
      const symbol = (move.step) ? this.props.history[move.step - 1].symbol : null;
      const desc = move.step ? `${symbol}: ${row}, ${column}` : 'Open Board';

      return (
        <li key={move.step}>
          <button
          onClick={() => {this.props.handleStepClick(move.step)}}
          className={(move.step === this.props.step) ? 'bold' : ''}
          >
            {desc}
          </button>
        </li>
      );
    });

    return (
      <div>
        <p>{this.props.history[this.props.step].status}</p>
        <p
        className="csrPointer"
        onClick={() => {this.props.handleReorderClick()}}
        >
          Order by: {(this.props.isAsc) ? 'Ascending' : 'Descending'}
        </p>
        <ol>
          {buttons}
        </ol>
      </div>
    );
  }
}

export default History;
