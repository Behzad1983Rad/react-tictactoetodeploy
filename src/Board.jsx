
import { useState } from 'react'
import Message from './Message'

let lastFirstPlayed = 1

export default function Board(){


    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function getWinner(board) {
        for (let winArr of winningCombos) {
            if (board[winArr[0]] != null && board[winArr[0]] === board[winArr[1]] && board[winArr[1]] === board[winArr[2]]) {
                return board[winArr[0]]; // Return the winner ('1' or '-1')
            }
        }
        if (!board.includes(null)) {
            return 'T'; // Draw
        }
        return null; // No winner yet
    }

    const startingBoard = Array(9).fill(null)
    
    const [winner, setWinner] = useState(null)
    const [board, setBoard] = useState(startingBoard)
    const [playerTurn, setPlayerTurn] = useState(1)
    const [scores, setScores] = useState({'1': 0, '-1': 0})
    
    function handleClick(index) {
        if (board[index] || winner) {
            return;
        }
        const newBoard = [...board];
        newBoard[index] = playerTurn;
        setBoard(newBoard);
    
        const currentWinner = getWinner(newBoard); // Check for winner with the updated board
        setWinner(currentWinner);
        console.log(getWinner(newBoard))
    
        if (!currentWinner) {
            setPlayerTurn(playerTurn * -1); // Change turn only if there's no winner
        } else {
            setScores({...scores, [playerTurn]: scores[playerTurn] + 1})
        }
    }

    function handlePlayAgain() {
        setBoard(startingBoard);
        lastFirstPlayed *= -1
        setPlayerTurn(lastFirstPlayed)
        setWinner(null)
    }
        
        return(
            <div className="containerDiv">
                <Message playerTurn={playerTurn} winner={winner} scores={scores}/>
                <div className="board">
                    {board.map((cell, index) => (
                        <div key={index} 
                        className={`cell ${playerTurn ? `player${cell}` : ''}`} 
                        id={index}                        
                        onClick={()=>handleClick(index)}>
                        </div>
                    ))}
                </div>
                <div className='playAgainBTN'>
                { winner &&
                    <button className='playAgain' onClick={handlePlayAgain}>Play Again</button>}
                </div>
            </div>
    )}
    
    
    