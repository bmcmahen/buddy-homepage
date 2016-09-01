import React from 'react'
import openSource from './open-source'

const CapTitle = ({ children }) => (
  <h1 className='tc fl w-100 mt5 f5 ttu tracked fw6'>
    {children}
  </h1>
)

const Paragraph = ({ children }) => (
  <p className='f6 f5-ns lh-copy mt0 tc'>
    {children}
  </p>
)


export const Help = () => (
  <section id='help' className='cf ph3 bt b--near-white ph5-ns pb5'>
    <CapTitle>Buddy Help</CapTitle>
    <Paragraph>
      Need help or have feedback? <br /> Email: <strong>ben.mcmahen@gmail.com</strong>
    </Paragraph>
  </section>
)

export const OpenSource = () => (
  <section id='opensource' className='cf ph3 bt b--near-white ph5-ns pb5'>
    <CapTitle>Open Source</CapTitle>
    <Paragraph>
      Here is some of our open source work.
    </Paragraph>
    <div className='f6 f5-ns lh-copy mt0 tc'>
      {openSource.map((repo) => (
        <div className='mb3' key={repo.url}>
          <a className='link dim black-70 b' href={repo.url}>
            {repo.title}
          </a>
          <div>{repo.description}</div>
        </div>
      ))}
    </div>
  </section>
)

export const Footer = () => (
  <section id='help' className='cf ph3 bt b--near-white ph5-ns pv2'>
    <div className='pa3 flex flex-auto items-center justify-center'>
      <a className='f6 f5-ns lh-copy mr2 link dim black-70' href='http://benmcmahen.com'>
        Made by Ben McMahen
      </a>
      <span className='black-20'> | </span>
      <a className='f6 f5-ns lh-copy link ml2 dim black-70' href='https://twitter.com/BenMcMahen'>
        Follow Ben on Twitter
      </a>
    </div>
  </section>
)
