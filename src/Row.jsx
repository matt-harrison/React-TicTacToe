import React from 'react';
import Square from './Square';

class Row extends React.Component {
  render() {
    let squares = [];

    for (let y = 0; y < 3; y++) {
      const id = (this.props.row * 3) + y
      const isHighlighted = (this.props.winningSquares.indexOf(id) > -1);

      squares.push(
        <Square
        id={id}
        isHighlighted={isHighlighted}
        key={id}
        onClick={i => this.props.onClick(id)}
        value={this.props.board[id]}
        />
      );
    }

    return (
      <div className="board-row">
        {squares}
      </div>
    )
  }
}

export default Row;
