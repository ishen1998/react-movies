import React from 'react'
// import { DatePicker } from 'antd';
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Movie from './components/movie/Movie.jsx'

//引入组件
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

//引入css样式
import style from './css/app.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // UNSAFE_componentWillMount() {
  //   console.log('11')
  // }
  render() {
    return (
      <HashRouter>
        <Layout className="layout" style={{ height: 100 + '%' }}>
          <Header>
            <div className={style.logo} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.hash.split('/')[1]||'home']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to='/home'>首页</Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <Link to='/movie/in_theaters/1'>电影</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to='/about'>关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div style={{ background: '#fff', minHeight: 280, maxHeight: '100%', height: '100%' }}>
              <Route path='/home' component={Home}></Route>
              <Route path='/movie' component={Movie}></Route>
              <Route path='/about' component={About}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ishen React项目 ©2019</Footer>
        </Layout>
      </HashRouter>
    )
  }
}