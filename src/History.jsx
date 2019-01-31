import React, {Component} from 'react';

class History extends React.Component {
  render() {
    const moves = this.props.history.map((move, index) => {
      const row = move.square % 3 + 1;
      const column = Math.floor(move.square / 3) + 1;
      const desc = move.step ? `${row}, ${column}: ${move.symbol}` : 'Open Board';

      return (
        <li key={index}>
          <button
          onClick={() => this.getStep(move.step)}
          className={(move.step === this.props.step) ? 'boreold' : ''}
          >
            {desc}
          </button>
        </li>
      );
    });

    return (
      <ol>
        <p>{this.props.history[this.props.step].status}</p>
        <p
        className="csrPointer"
        onClick={() => {this.toggleIsAsc()}}
        >
          Order by: {(this.props.isAsc) ? 'Ascending' : 'Descending'}
        </p>
      </ol>
    );
  }
}

export default History;
