import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    id,
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <h1 className="latest-matches">Latest Macthes</h1>
      <div className="latest-match-card">
        <div className="latest-match-logo-container">
          <div className="match-details-1">
            <p className="competing-team-heading">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            alt={`latest match ${competingTeam}`}
            className="competingteam-logo"
            src={competingTeamLogo}
          />
        </div>
        <hr className="separtor" />
        <div className="match-details-2">
          <p className="label">First Innings</p>
          <p className="label-text">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="label-text">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="label-text">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="label-text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
