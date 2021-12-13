import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Lead Intranet Strategist</title>
        <meta property="og:title" content="Lead Intranet Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
