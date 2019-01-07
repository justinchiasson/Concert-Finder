# Concert Finder

With React and React Router, this web application uses the Spotify Web API to discover a user's favourite artists. It then uses the Ticketmaster Discovery API to notify the user of upcoming concerts featuring these artists, near a specified location!

## Spotify API

Concert Finder uses the following parts of the Spotify Web API:

- [Authorization](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow)
- [Get a User's Top Artists and Tracks](https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/)
- [Get Current User's Profile](https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/)

## Ticketmaster API

Concert Finder also uses the following part of the Ticketmaster Discovery API V2.0:

- [Event Search](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)

## Development

- `npm install`
- `yarn start`
- visit localhost:3000 and sign in with your Spotify account

Application is based on [create-react-app] (https://github.com/facebook/create-react-app)