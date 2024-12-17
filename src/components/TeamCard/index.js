import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <li className="team-card">
      <Link className="nav-link" to={`/team-matches/${id}`}>
        <img alt={name} className="team-image-url" src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
