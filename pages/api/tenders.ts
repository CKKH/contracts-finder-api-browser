import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { pick } from 'lodash'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { search_term: searchTerm, published_from: publishedFrom, published_to: publishedTo },
  } = req

  const request: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://www.contractsfinder.service.gov.uk/api/rest/2/search_notices/json',
    headers: { 'content-type': 'application/json' },
    data: defaultSearchCriteria, //TODO: add typing
  }

  const contractsFinderResponse = (await axios(request)) as AxiosResponse

  //TODO: add typing based respose format defined here: https://www.contractsfinder.service.gov.uk/apidocumentation/Notices/2/POST-rest-searches-search
  const contractsFinderNoticeList = contractsFinderResponse.data.noticeList

  //TODO: implement case-insensitive substring match against searchTerm and each notice's description string, filter those that match
  //TODO: implement filtering of contracts based on publishedFrom - publishedTo date range

  const openTenders = contractsFinderNoticeList.filter((t) => t.item.noticeStatus === 'Open')
  const awardedTenders = contractsFinderNoticeList.filter((t) => t.item.noticeStatus === 'Awarded')

  const cleanedOpenTenders = openTenders.map((t) => pick(t.item, ['title', 'publishedDate', 'organisationName', 'deadlineDate'])) //TODO: add typing
  const cleanedAwardedTenders = awardedTenders.map((t) => pick(t.item, ['title', 'publishedDate', 'organisationName', 'awardedDate'])) //TODO: add typing

  const result = [...cleanedOpenTenders, ...cleanedAwardedTenders] //TODO: add typing

  console.log(result)

  res.json(result)
}

//TODO: add typing based on request format defined here: https://www.contractsfinder.service.gov.uk/apidocumentation/Notices/2/POST-rest-searches-search
const defaultSearchCriteria = {
  searchCriteria: {
    types: ['Contract', 'Pipeline', 'PreProcurement'],
    statuses: ['Awarded', 'Open'],
    keyword: null,
    queryString: null,
    regions: null,
    postcode: null,
    radius: null,
    valueFrom: null,
    valueTo: null,
    lastNotifiableUpdateFrom: null,
    publishedFrom: null,
    publishedTo: null,
    deadlineFrom: null,
    deadlineTo: null,
    approachMarketFrom: null,
    approachMarketTo: null,
    awardedFrom: null,
    awardedTo: null,
    isSubcontract: null,
    suitableForSme: null,
    suitableForVco: null,
    awardedToSme: null,
    awardedToVcse: null,
    cpvCodes: null,
  },
  size: 10,
}
