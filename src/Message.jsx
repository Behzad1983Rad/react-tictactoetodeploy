
export default function Message({playerTurn, winner, scores}) {
    let message = ''

    let totalGames = scores[1]+scores[-1]

    const players = {
        '1': 'Kaylie',
        '-1': 'Haylie'
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
                <div className='header'>
                  <h2>Created by Behzad</h2><p className='subheader'>AT his BEST</p>
                  <a href="mailto:behzad.radgizadeh@gmail.com">behzad.radgizadeh@gmail.com</a>
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