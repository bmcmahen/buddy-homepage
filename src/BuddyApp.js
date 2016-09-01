import React, { PropTypes } from 'react'

class BuddyApp extends React.Component {

  static propTypes = {
    app: PropTypes.object.isRequired
  }

  render() {
    const {
      app
    } = this.props

    return (
      <section id={app.id} className={'cf ph3 ph5-ns pb5 bg-' + app.color + ' black-70'}>
        <div className='mt5'>
        {/* <div className='cf'>
          {app.icon && (
            <img
              src={app.icon}
              role='presentation'
              className='w2 h2 br3 mr2 v-base fl'
            />
          )}

        </div> */}
          <h1 className='f3 f1-ns lh-title mb2 fw600'>
            {app.title} {app.isFree && <span className='f6 dib ml2 ttu tracked'>free</span>}
          </h1>
        </div>
        <p className='f5 f4-ns measure lh-copy mt0'>
          {app.description}
        </p>

        <div className='bg-black br4 overflow-hidden nowrap ph3 mw7 mt4 overflow-x-scroll'>
          {app.parts.map((part, i) => (
            <div key={part.title} className='w-100 dib w-33-ns'>
              <div className='cf h3 mv3 mr2'>
                <h3 className={'f1 lh-title fl va-middle mr2 ma0 ' + app.color}>{i + 1}</h3>
                <h3 className={'tl ph2 pr3 ws-normal lh-title f6 normal ' + app.color}>{part.title}</h3>
              </div>
              <img src={part.image} className='w-100' alt={part.title} />
            </div>
          ))}
        </div>

        <div className='mt4 cf'>
          {Object.keys(app.platforms).map((platform) => {
            const link = app.platforms[platform]
            if (platform === 'ios') {
              return (
                <a key='ios' href={link} className='fl mr0 pa2' title='Download on the App Store'>
                  <img
                    className='mw4'
                    alt='Download on the App Store'
                    src={require('./images/app-store-badge.svg')}
                  />
                </a>
              )
            } else if (platform === 'android') {
              return (
                <a key='android' href={link} className='fl mr1' title='Download on the Google Play store'>
                  <img
                    alt='Download on the Google Play store'
                    style={{ maxWidth: '140px'}}
                    src={require('./images/google-play-badge.png')}
                  />
                </a>
              )
            }
          })}
        </div>
      </section>
    )
  }

}

export default BuddyApp
