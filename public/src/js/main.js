import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const App = React.createClass({
  openModal(){
   this.refs.left.show();
  },

  render(){
    return ( <div className="container-fluid">
      <div className="row">
        <div className="header text-center col-xs-3 col-sm-2 col-md-1">
          <i className="fa fa-bars" onClick={this.openModal}></i>
        </div>
          {this.props.children}
      </div>
      <Menu ref="left" alignment="left">
        <MenuItem><Link to="projects">Projects</Link></MenuItem>
      </Menu>

    </div>
    )
  }
})

let Menu = React.createClass({
  getInitialState() {
    return {
      visible: false
    }
  },

  show(){
    this.setState({ visible: true })
    document.addEventListener('click')
  },

  hide(){
    document.removeEventListener('click')
    this.setState({ visible: false })
  },

  render(){
    return <div className="menu">
        <div className={ ( this.state.visible ? 'visible' : '' ) + this.props.alignment }> { this.props.children } </div>
      </div>
  }

})

let MenuItem = React.createClass({
  render(){
    return <div className="menu-item">{this.props.children}</div>
  }
})

const Museum = React.createClass({
  render(){
    return <h1> Harvard Art Collection</h1>
  }
})

const Projects = React.createClass({
  render(){
    return <div className="col-xs-10 col-sm-10 col-md-10 introduction">
      Hi Projects

      <h1><Link to="museum">Museum</Link></h1>

    </div>
  }
})


const Home = React.createClass({
  render(){
     return <div className="col-xs-10 col-sm-10 col-md-10 introduction">
          <div className="intro-text">
           I am Karen, a <span className="gold-box">web developer</span> with an affinity for <span className="gold-box">digital humanities</span> and <span className="gold-box">data visualization</span>.
             <ul className="social-media text-center">
              <li><i className="fa fa-linkedin"></i></li>
              <li><i className="fa fa-twitter"></i></li>
              <li><i className="fa fa-git"></i></li>
            </ul>
          </div>
        </div>
  }
})


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="projects" component={Projects}/>
      <Route path="museum" component={Museum}/>
    </Route>
  </Router>
), document.getElementById('root'))


