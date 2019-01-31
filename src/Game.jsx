import React from 'react';
import Board from './Board';
import History from './History';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        board: Array(9).fill(null),
        square: null,
        status: null,
        step: 0,
        symbol: ''
      }],
      isAsc: true,
      step: 0,
      symbols: ['X', 'O'],
      winningSquares: []
    };

    this.state.history[0].symbol = this.state.symbols[0];
    this.state.history[0].status = 'First Move: ' + this.state.symbols[0];
  }

  checkStatus(board) {
    let winningSquares = [];
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winningSquares.push(a, b, c);
      }
    }

    this.setState({
      winningSquares: winningSquares
    });

    return (winningSquares.length > 0);
  }

  getNextSymbol(symbol) {
    return (symbol === this.state.symbols[1]) ? this.state.symbols[0] : this.state.symbols[1];
  }

  getStep(step) {
    const currentBoard = this.state.history[step].board.slice();

    this.setState({
      step: step
    });

    this.checkStatus(currentBoard);
  }

  handleClick(i) {
    const step = this.state.step + 1;
    const history = this.state.history.slice(0, step);
    const currentBoard = history[this.state.step].board.slice();
    let winner = this.checkStatus(currentBoard);
    let status = 'Next player: ' + (currentBoard.symbol === this.state.symbols[0] ? this.state.symbols[0] : this.state.symbols[1]);

    if (!winner && !currentBoard[i]) {
      const symbol = history[this.state.step].symbol;

      currentBoard[i] = symbol;

      if (this.checkStatus(currentBoard)) {
        status = 'Winner: ' + winner;
      } else if (step >= 9) {
        status = `Cat's game.`;
      }

      this.setState({
        history: history.concat([{
          board: currentBoard,
          square: i,
          status: status,
          step: step,
          symbol: this.getNextSymbol(symbol)
        }]),
        step: history.length,
      });
    }
  }

  toggleIsAsc() {
    const isAsc = !this.state.isAsc;

    this.setState({
      isAsc: isAsc
    });
  }

  render() {
    let history = this.state.history.slice();
    const currentBoard = history[this.state.step].board;

    if (!this.state.isAsc) {
      history = history.reverse();
    }

    return (
      <div className="game">
        <Board
        board={currentBoard}
        onClick={i => {this.handleClick(i)}}
        winningSquares={this.state.winningSquares}
        />
        <History
        history={this.state.history}
        isAsc={this.state.isAsc}
        step={this.state.step}
        />
      </div>
    );
  }
}

export default Game;
