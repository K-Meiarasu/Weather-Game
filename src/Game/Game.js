import React, { useState } from 'react';


const Game = () => {

    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()

    const check = (square) => {
        let opt = {
            line: [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            cross: [
                [0,4,8],
                [2,4,6],
            ],
        };

        for(let op in opt){
            opt[op].forEach((pattern) => {
                if(square[pattern[0]]==='' || square[pattern[1]]==='' || square[pattern[2]]===''){

                }else if(square[pattern[0]] === square[pattern[1]] && square[pattern[1]] === square[pattern[2]]){
                    setWinner(square[pattern[0]])
                }
            })
        }
    }

    const handleClick = (num) => {
        let square=[...cells]

        if(cells[num]!== ''){
            alert('This Cell is already used..')
            return
        }

        if(turn === 'X'){
            square[num] = 'X'
            setTurn('O')
        }else{
            square[num] = 'O'
            setTurn('X')
        }
        check(square)
        setCells(square)
    }

    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(''))
    }

    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
    }

    return(
        <div className="main">
            <div className="head">
                <h1>Tic Tac Toe &#127920;</h1>
            </div>
            <br/>
            <h1 className='res'>{turn}'s Turn &#9203;</h1>
            <div className="tab">
                <table>
                    <tbody>
                        <tr>
                            <Cell num='0'/>
                            <Cell num='1'/>
                            <Cell num='2'/>
                        </tr>
                        <tr>
                            <Cell num='3'/>
                            <Cell num='4'/>
                            <Cell num='5'/>
                        </tr>
                        <tr>
                            <Cell num='6'/>
                            <Cell num='7'/>
                            <Cell num='8'/>
                        </tr>
                    </tbody>
                </table>
            </div>
            {winner && (
                <>
                <div className='res'>
                    <p>&#127882; '{winner}' Wins &#127882;</p>
                    <br/>
                    <button onClick={() => handleRestart()}>Play Again</button>
                </div>
                </>
            )}
        </div>
    )
}

export default Game