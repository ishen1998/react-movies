import React from 'react'
import fetachJSONP from 'fetch-jsonp'
export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detail:[]
    }
  }
  UNSAFE_componentWillMount() {
    this.getMovieDetail()

    console.log('movieDetil', this)
  }
  render() {
    return (
      <div>
      
      </div>
    )
  }
  getMovieDetail = () => {
    fetachJSONP('https://douban.uieee.com/v2/movie/subject/' + this.props.match.params.id)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.state.detail = data
        // console.log(this.state.movieList)
      })
  }
}