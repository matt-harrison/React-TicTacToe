import React from 'react';
import Row from './Row';

class Board extends React.Component {
  render() {
    let rows = [];

    for (let row = 0; row < 3; row++) {
      rows.push(
        <Row
        board={this.props.board}
        key={row}
        onClick={i => this.props.onClick(i)}
        row={row}
        winningSquares={this.props.winningSquares}
        />
      );
    }

    return (
      <div className={this.props.className}>
        {rows}
      </div>
    )
  }
}

export default Board;
