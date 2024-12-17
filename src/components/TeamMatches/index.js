import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    fetchedData: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getDataFormat = each => ({
    id: each.id,
    date: each.date,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    firstInnings: each.first_innings,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${apiUrl}${id}`)
    const jsonData = await response.json()
    const updatedJsonData = {
      teamBannerUrl: jsonData.team_banner_url,
      latestMatchDetails: this.getDataFormat(jsonData.latest_match_details),
      recentMatches: jsonData.recent_matches.map(each =>
        this.getDataFormat(each),
      ),
    }

    this.setState({
      isLoading: false,
      fetchedData: updatedJsonData,
    })
  }

  renderTeamMatches = () => {
    const {fetchedData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = fetchedData

    return (
      <div className="responsive-container">
        <img alt="team banner" className="team-banner" src={teamBannerUrl} />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-card-container">
          {recentMatches.map(match => (
            <MatchCard key={match.id} matchCard={match} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => {
    return (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
       
      case 'KKR':
        return 'kkr'
        
      case 'KXP':
        return 'kxp'
        
      case 'CSK':
        return 'csk'
       
      case 'RR':
        return 'rr'
        
      case 'MI':
        return 'mi'
       
      case 'SH':
        return 'sh'
       
      case 'DC':
        return 'dc'
        
      default:
        return ''
       
    }
    return null
  }

  render() {
    const {isLoading} = this.state
    const className = `team-match-container ${this.getClassName()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
