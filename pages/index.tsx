// based on: https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../components/List'
import withListLoading from '../components/withListLoading'

function Home() {
  const ListLoading = withListLoading(List)
  const [appState, setAppState] = useState({
    loading: false,
    tenders: null,
  })

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = 'http://localhost:3000/api/tenders'
    axios.get(apiUrl).then((tenders) => {
      const alltenders = tenders.data
      setAppState({ loading: false, tenders: alltenders })
    })
  }, [setAppState])

  return (
    <div className="App">
      <div className="container">
        <h1>Tenders</h1>
      </div>
      <div className="tender-container">
        <ListLoading isLoading={appState.loading} tenders={appState.tenders} />
      </div>
    </div>
  )
}

export default Home

