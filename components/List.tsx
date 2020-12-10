// based on: https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

import React from 'react'

const List = (props) => {
  const { tenders } = props
  if (!tenders || tenders.length === 0) return <p>No tenders, sorry</p>
  return (
    <ul>
      <h2 className="list-head">Tenders</h2>
      {tenders.map((tender) => {
        return (
          <li key={tender} className="list">
            <span className="repo-text">
              || Title: {tender.title} || Publish Date: {tender.publishedDate} || Organisation Name: {tender.organisationName} ||
            </span>
          </li>
        )
      })}
    </ul>
  )
}
export default List

//TODO: Render deadlineDate/awardedDate depending  on if tender is opened/closed

