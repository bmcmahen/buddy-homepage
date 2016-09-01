import React, { Component } from 'react';
import './App.css';
import BuddyApp from './BuddyApp'

import roastBuddy from './RoastBuddy/index.js'
import payBuddy from './PayBuddy'
import randomBuddy from './RandomBuddy'

import {Help, OpenSource, Footer} from './Help'

const apps = [
  roastBuddy,
  payBuddy,
  randomBuddy
]

class App extends Component {
  render() {
    return (
      <div className="App sans-serif w-100">
        <header className='w-100 dt pa3 ph5-ns'>
          <div className='dtc v-mid tl w-50'>
            <a href='/' className='dib f5 f4-ns fw6 mt0 mb1 link black-70 dim' title='Home'>
              Buddy Apps
            </a>
          </div>
          <nav className='db dtc v-mid w-100 tr'>
            <a title='Help' href='#help' className='f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib'>
              Help
            </a>
            <a title='Open Source' href='#opensource' className='f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib'>
              Open source
            </a>
          </nav>
        </header>
        <section className='cf ph3 bt w-100 b--near-white ph5-ns black-70'>
          <div className='measure-wide'>
            <h1 className='f3 f1-ns lh-title mt6 fw-600'>
              The perfect companion apps for creative hobbyists.
            </h1>
            <div className='pb5'>
              {apps.map((app) => (
                <div key={app.id} className='lh-copy'>
                  <a className='link dim black-70 b' href={'#' + app.id}>> {app.title}</a>
                  <span className='black-70'>{' - ' + app.shortDescription || ''}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <main className='w-100'>
          {apps.map((app) => <BuddyApp key={app.id} app={app} /> )}
          <Help />
          <OpenSource />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
