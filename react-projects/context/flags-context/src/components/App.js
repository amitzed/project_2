// import logo from '../logo.svg';
import React from 'react';

import './App.css';

import UserCreate from './UserCreate';

export default class App extends React.Component {
  state = {
    language: 'english'
  };

  onLanguageChange = (language) => {
    this.setState({
      language
    })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '4rem'}}>
        Select A Language
        <i className="us flag" onClick={() => this.onLanguageChange('english')} />
        <i className="nl flag" onClick={() => this.onLanguageChange('dutch')} />

        <UserCreate />
        
        <div className="ui link cards" style={{marginTop: '4rem'}}>
          <div className="card">
            <div className="image">
              <i className="us flag" />
            </div>
            <div className="content">
              <div className="header">Matt Giampietro</div>
              <div className="meta">
                <a>Friends</a>
              </div>
              <div className="description">
                Matthew is an interior designer living in New York.
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                Joined in 2013
              </span>
              <span>
                <i className="user icon"></i>
                75 Friends
              </span>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <i className="nl flag" />
            </div>
            <div className="content">
              <div className="header">Molly</div>
              <div className="meta">
                <span className="date">Coworker</span>
              </div>
              <div className="description">
                Molly is a personal assistant living in Paris.
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                Joined in 2011
              </span>
              <span>
                <i class="user icon"></i>
                35 Friends
              </span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
