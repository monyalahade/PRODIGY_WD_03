let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function handleClick(index) {
  if (!gameActive || board[index]) return;

  board[index] = currentPlayer;
  document.getElementById("board").children[index].innerText = currentPlayer;

  const winner = checkWinner();
  if (winner) {
    document.getElementById("message").innerText = `Player ${winner} wins...!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    document.getElementById("message").innerText = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById(
    "message"
  ).innerText = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.getElementById("message").innerText = "Player X's turn";
  const cells = document.getElementById("board").children;
  for (let cell of cells) {
    cell.innerText = "";
  }
}
