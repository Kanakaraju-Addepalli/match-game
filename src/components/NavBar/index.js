import './index.css'

const NavBar = props => {
  const {score, time} = props

  return (
    <nav className="nav-bar-container">
      <div className="score-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <ul className="score-and-time-container">
          <li>
            <p className="score-title">
              score: <span className="score">{score}</span>
            </p>
          </li>
          <div className="timer-container">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer"
              />
            </li>

            <li>
              <p className="secs">{time} sec</p>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar
