class TicTacToe {
  constructor() {
    this.currentPlayer = 'x';
    this.countTurns = 9;
    this.field = Array.from(Array(3), () => new Array(3).fill(null));
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (
      this.field[rowIndex][columnIndex]
      || rowIndex < 0
      || rowIndex > 2
      || columnIndex < 0
      || columnIndex > 2
    ) {
      return;
    }

    this.field[rowIndex][columnIndex] = this.currentPlayer;
    this.countTurns -= 1;
    this.getWinner();

    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o';
    } else {
      this.currentPlayer = 'x';
    }
  }

  isFinished() {
    return !!this.winner || this.isDraw();
  }

  getWinner() {
    if (!this.winner && this.countTurns < 5) {
      const lengthField = this.field.length;

      // check winner horizontal
      for (let i = 0; i < lengthField; i += 1) {
        const line = this.field[i].join('');

        if (line === 'xxx' || line === 'ooo') {
          this.winner = this.currentPlayer;
          return this.winner;
        }
      }

      // check winner vertical
      for (let i = 0; i < lengthField; i += 1) {
        let line = '';

        for (let j = 0; j < lengthField; j += 1) {
          line += this.field[j][i];

          if (line === 'xxx' || line === 'ooo') {
            this.winner = this.currentPlayer;
            return this.winner;
          }
        }
      }

      // check winner up-down diagonal
      let line = '';

      for (let i = 0; i < lengthField; i += 1) {
        for (let j = i; j === i; j += 1) {
          line += this.field[i][j];

          if (line === 'xxx' || line === 'ooo') {
            this.winner = this.currentPlayer;
            return this.winner;
          }
        }
      }

      line = '';

      // check winner up-down diagonal
      let column = lengthField - 1;

      for (let i = 0; i < lengthField; i += 1) {
        line += this.field[i][column--];

        if (line === 'xxx' || line === 'ooo') {
          this.winner = this.currentPlayer;
          return this.winner;
        }
      }
    }

    return this.winner;
  }

  noMoreTurns() {
    return !this.countTurns;
  }

  isDraw() {
    return !this.countTurns && !this.winner;
  }

  getFieldValue(rowIndex, colIndex) {
    if (rowIndex < 0 || rowIndex > 2 || colIndex < 0 || colIndex > 2) {
      return null;
    }

    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
