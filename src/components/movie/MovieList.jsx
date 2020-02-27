import React from 'react'
import { Spin, Alert, Pagination } from 'antd';
import fetachJSONP from 'fetch-jsonp'
import MovieItem from './MovieItem.jsx'
export default class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: [],//电影列表
      page: parseInt(props.match.params.page) || 1,//当前页数
      count: 12,//一页加载的电影书数
      total: 0,//当前总共电影的数量
      isLoading: true,//loadin状态
      type: props.match.params.type
    }
  }

  UNSAFE_componentWillMount() {
    this.getMovieList()
 
      // console.log('movieList',this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: true,
      page: parseInt(nextProps.match.params.page) || 1,//当前页数
      type: nextProps.match.params.type
    }, function () {
      this.getMovieList()
    })
  }
  render() {
    return (
      <div>
        {this.showList()}
      </div>
    )
  }
  showList = () => {
    if (this.state.isLoading) {
      return <Spin tip="Loading...">
        <Alert
          message="正在加载中...."
          description="精彩内容马上呈现"
          type="info"
        />
      </Spin>
    } else {
      return (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {this.state.movieList.map(item => {
              return <MovieItem history={this.props.history} key={item.id} {...item}></MovieItem>
            })}
          </div>
          <Pagination onChange={this.getPage} defaultCurrent={this.state.page} total={this.state.total} pageSize={this.state.count} />
        </div>
      )
    }
  }
  getMovieList = () => {
    var start = this.state.count * (this.state.page - 1)
    fetachJSONP('https://douban.uieee.com/v2/movie/' + this.state.type + '?start=' + start + '&count=' + this.state.count)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoading: false,
          movieList: data.subjects,
          total: data.total
        })
        console.log(this.state.movieList)
      })
  }
  getPage = (page) => {
    console.log(this.props.history.push)
    this.props.history.push('/movie/' + this.state.type + '/' + page)
  }
}