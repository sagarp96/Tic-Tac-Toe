function playGame() {
  // create a gameBoard
  function createBoard() {
    // First create an array with 3 empty elements
    const rows = 3;
    const cols = 3;
    const matrix = new Array(rows);

    // Then fill each element with an array
    for (let i = 0; i < rows; i++) {
      matrix[i] = new Array(cols);
    }

    // Now fill with values
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = 0; // Example filling pattern
      }
    }
  }
  //Get input from the cosole

  //update the input in the array

  //make sure it's a legal move

  // apply a logic for the winning
}

playGame();
