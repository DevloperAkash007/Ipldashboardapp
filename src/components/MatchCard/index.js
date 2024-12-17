import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchCard
  const status = matchStatus === 'Won' ? 'win' : 'lose'
  return (
    <li className="match-card">
      <img
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
        src={competingTeamLogo}
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`${status} match-status`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
