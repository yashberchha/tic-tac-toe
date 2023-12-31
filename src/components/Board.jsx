import { useState } from "react";
import Square from "./Square";
import toast from "react-hot-toast";

export default function Board() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [count, setCount] = useState(0);
  function checkWinner() {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let ans = false;

    winningPositions.forEach((position) => {
      const [a, b, c] = position;
      if (grid[a] !== null && grid[a] === grid[b] && grid[a] === grid[c]) {
        ans |= true;
      }
    });
    return ans;
  }

  const isOver = checkWinner();
  let status = "";

  if (isOver) {
    const winner = xTurn ? "O" : "X";
    status = `Winner: ${winner}`;
    toast(`${winner} Won`, {
      icon: "👏",
    });
  } else if (count === 9) {
    status = "Game Tied";
    toast("Game Tied", {
      icon: "⚠️",
    });
  } else {
    status = `Next Player: ${xTurn ? "X" : "O"}`;
  }
  function handleClick(index) {
    if (grid[index] || isOver) {
      return;
    }

    grid[index] = xTurn ? "X" : "O";
    setGrid([...grid]);
    setXTurn(!xTurn);
    setCount(count + 1);
  }

  function handleReset() {
    setGrid(Array(9).fill(null));
    setXTurn(true);
    setCount(0);
  }

  return (
    <div>
      <div className="heading">
        {isOver ? <div>{status}</div> : <div>{status}</div>}
      </div>

      <div className="board">
        <div className="row">
          <div className="box-0">
            <Square value={grid[0]} onClick={() => handleClick(0)} />
          </div>
          <div className="box-1">
            <Square value={grid[1]} onClick={() => handleClick(1)} />
          </div>
          <div className="box-2">
            <Square value={grid[2]} onClick={() => handleClick(2)} />
          </div>
        </div>

        <div className="row">
          <div className="box-3">
            <Square value={grid[3]} onClick={() => handleClick(3)} />
          </div>
          <div className="box-4">
            <Square value={grid[4]} onClick={() => handleClick(4)} />
          </div>
          <div className="box-5">
            <Square value={grid[5]} onClick={() => handleClick(5)} />
          </div>
        </div>

        <div className="row">
          <div className="box-6">
            <Square value={grid[6]} onClick={() => handleClick(6)} />
          </div>
          <div className="box-7">
            <Square value={grid[7]} onClick={() => handleClick(7)} />
          </div>
          <div className="box-8">
            <Square value={grid[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
      </div>

      <div onClick={handleReset} className="reset">
        <button>Reset</button>
      </div>
    </div>
  );
}
