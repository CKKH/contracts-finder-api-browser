// based on: https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

import React from 'react'

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return <p style={{ textAlign: 'center', fontSize: '30px' }}>Fetching tenders, please wait...</p>
  }
}
export default WithListLoading
