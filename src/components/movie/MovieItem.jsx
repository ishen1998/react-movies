import React from 'react'
import { Rate } from 'antd';
import { Route, Link } from 'react-router-dom'
export default class MovieItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // componentWillMount() {
  //   console.log('movieItem', this)
  // }
  render() {
    return (
      <div onClick={this.goDetail} style={{ width: '190px', height: '290px', cursor: 'pointer', textAlign: 'center', border: '1px solid #CCC', margin: '0px 10px 10px 0', padding: '5px 0px' }}>
        <img src={this.props.images.small} width='160' height='160' />
        <h4>名称：{this.props.title}</h4>
        <h5>年份：{this.props.pubdates[1]}</h5>
        <h5>类别：{this.props.genres.join('，')}</h5>
        <div><Rate disabled defaultValue={this.props.rating.average / 2}></Rate></div>
      </div>
    )
  }
  goDetail = () => {
    this.props.history.push('/movie/detail/' + this.props.id)
    console.log(this)
  }
}
