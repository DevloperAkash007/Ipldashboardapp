import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

const iplLogo = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

class Home extends Component {
  state = {
    isLoading: true,
    teams: [],
  }

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamList = data.teams
    const updatedTeamList = teamList.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({
      isLoading: false,
      teams: updatedTeamList,
    })
  }

  renderLoader = () => {
    return (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
  }

  renderTeamList = () => {
    const {teams} = this.state
    return (
      <ul className="team-list-container">
        {teams.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-heading-container">
          <img className="ipl-logo" alt="ipl logo" src={iplLogo} />
          <h1 className="ipl-dashboard">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamList()}
      </div>
    )
  }
}
export default Home
