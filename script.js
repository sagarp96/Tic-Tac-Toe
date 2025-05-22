function startGame() {
  const board = document.getElementById("board");
  const circleClass = "circle";
  const x_Class = "x";
  let circleTurn;
  const cellElements = document.querySelectorAll("[data-cell]");
  const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const restartButton = document.getElementById("RestartButton");
  restartButton.addEventListener("click", restartGame);
  const winningClass = document.getElementById("winning-messege");
  const winningBoard = document.querySelector("[data-winning-message-text]");
  startHover();
  //First start Hover
  function startHover() {
    circleTurn = false;
    cellElements.forEach((cell) => {
      cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardhoverClass();
  }
  //Handling Clicks
  function handleClick(e) {
    console.log("clicked");
    const cell = e.target;
    const currentClass = circleTurn ? circleClass : x_Class;
    placemarks(cell, currentClass);
    const isWin = checkWin(currentClass);
    const checDraw = isDraw();

    if (isWin) {
      winningBoard.innerText = `${circleTurn ? "O" : "X"} Wins!`;
      winningClass.classList.add("show");
    } else if (checDraw) {
      winningBoard.innerText = "It's a Draw";
      winningClass.classList.add("show");
    } else {
      switchplayer();
      setBoardhoverClass();
    }
  }

  function isDraw() {
    return [...cellElements].every((cell) => {
      return (
        cell.classList.contains(x_Class) || cell.classList.contains(circleClass)
      );
    });
  }

  function setBoardhoverClass() {
    board.classList.remove(circleClass);
    board.classList.remove(x_Class);
    if (circleTurn) {
      board.classList.add(circleClass);
    } else if (!circleTurn) {
      board.classList.add(x_Class);
    }
  }
  function switchplayer() {
    circleTurn = !circleTurn;
  }
  function placemarks(cell, currentClass) {
    cell.classList.add(currentClass);
  }
  function checkWin(currentClass) {
    return winningArray.some((combinations) => {
      return combinations.every((index) => {
        return cellElements[index].classList.contains(currentClass);
      });
    });
  }
  function restartGame() {
    const winningClass = document.getElementById("winning-messege");
    winningClass.classList.remove("show");

    cellElements.forEach((cell) => {
      cell.addEventListener("click", handleClick, { once: true });
      cell.classList.remove(x_Class);
      cell.classList.remove(circleClass);
      cell.removeEventListener("click", handleClick);
    });
  }
}

startGame();
