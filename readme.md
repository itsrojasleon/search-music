# SearchMusic

## Prerequisites
> Node 11.13.0
> Npm 6.9.0

## Getting started
Download the repo.

```
git clone git@github.com:rojasleon/search-music.git
(or download the .zip)
```

## Configuration

Install dependencies
```
yarn install
```
Configure your database in [mlab](mlab.com)
```
// create a new database
// create a new user
// copy the mongoDB URL 
// Example: mongodb://myuser:mypassword@ds133875.mlab.com:33875/search-music-prod
// create a new file (dev.js) in ./config

// Use this structure
// module.exports = {
    googleClientID: '',
    googleClientSecret: '',
    mongoURI: '',
    cookieKey: ''
};
// Put the url in mongoURI: 'here'
// Your database is ready 🤪.
```
Configure your app in [google](https://console.developers.google.com)

```
// create a new application
// download your credentials or copy it
// You need the client secret and the client ID
// Copy your data into key.js
// It's already.
```

