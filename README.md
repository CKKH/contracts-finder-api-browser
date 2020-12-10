# Getting started

Install all the required packages

```bash
npm install
```

Run development server (on port 3000)

```bash
npm run dev
```

To use another port run

```bash
npm run dev -- -p 3456
```

App status:

The app is still a very raw prototype that does not meet all the requirements. In its current state the user can run the app and 10 contracts are fetched from the CF API then rendered following a loading screen. This hardcoded limit can be changed in pages/api/tenders.ts.

Outstanding tasks:

- The user cannot narrow the results by performing text-search on the description field.
- The user cannot narrow the results by a given date range.
- The contracts have only either a deadlineDate or awardedDate property based on their noticeStatus property ("Open" or "Closed"), but these aren't yet rendered with the other information.

Considerations for future extensions and improvements:

- Complete the outstanding tasks, in its current state the app is not very useful as the user cannot dynamically influence what is returned to them.
- Provide the user with a calendar through which they can select a date range filter.
- Make the webapp pretty and nice to use.
- Implement a feature that limits the number of tenders returned.
- Store the responses from the API so they are available in our own DB, which could lay the foundation for making features such as excluding specific tenders or even groups of tenders by keyword type for different users.
- Implement pagination.
- Consider other ways to implement the cleaning of the response from the CF API. I feel like there is likely a simpler solution than filtering them by Open/Awarded, then using lodash to extract the required properties.
- Add typings where they are missing, these are listed as TODOs across the repo.
- There is no guarantee the API call to the external service will always be successful. As such we could add handling around the case where the request fails, perhaps adding retry logic up to a sensible attempt count before returning an error to the user.

Notes:

- I relied heavily on google in order to get the front-end side of this working as it is. What I managed is very much based on https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/. 
- It was fun trying to get to grips with React, I have much to learn!
