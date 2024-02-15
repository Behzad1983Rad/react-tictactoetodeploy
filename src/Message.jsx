import { useState } from 'react'

export default function Message({playerTurn, winner, scores}) {
    let message = ''

    let totalGames = scores[1]+scores[-1]

    const players = {
        '1': 'Javi',
        '-1': 'Joe'
    }
    

        if (winner === 'T') {
            message = ("It's a tie!")
        } else if (winner) {
            message = (`${players[winner]} wins!`)
        } else {
            message = (`${players[playerTurn]}'s Turn`)
        }


    return (
        <div className='message'>
            <div className='message-header'>
                <div>
                    <div className={`avatar player1 ${playerTurn === 1 ? 'selected' : ''}`}></div> <h3>{scores[1] }</h3>
                </div>
                <div className='header'><h2>The B Team</h2><p className='subheader'>AT its BEST</p>
                </div>
                <div>
                    <div className={`avatar player-1 ${playerTurn === -1 ? 'selected' : ''}`}></div><h3>{scores[-1] }</h3>
                </div>
            </div>
            <h2>{message}</h2>
            <h2>Games Played: {totalGames}</h2>
        </div>
    )
}