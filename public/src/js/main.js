import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Modal from 'react-modal';

const App = React.createClass({
  getInitialState() {
    return { modalIsOpen: false };
  },

  openModal() {
    this.setState({ modalIsOpen: true });
  },

  closeModal() {
    this.setState({ modalIsOpen: false });
  },

  render(){
    return ( <div className="container-fluid">
      <div className="row">
        <div className="header text-center col-xs-3 col-sm-2 col-md-1">
          <i className="fa fa-bars" onClick={this.openModal}></i>
          <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
            <Link to="/" onClick={this.closeModal}><h1><i className="fa fa-home fa-5x"></i></h1></Link>
            <Link to="projects" onClick={this.closeModal}><h1><i className="fa fa-desktop fa-5x"></i></h1></Link>
            <div id="closeModalDiv"><i className="fa fa-times" onClick={this.closeModal}></i></div>
          </Modal>
        </div>
          {this.props.children}
      </div>
    </div>
    )
  }
})

const customStyles = {
  content : {
    position                   : 'absolute',
    top                        : '125px',
    left                       : '100px',
    right                      : '100px',
    bottom                     : '125px',
    backgroundColor            :'rgba(0, 0, 0, .75)',
    border                     : 'none',
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   :'rgba(255, 255, 255, .75)'
  },
};

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


