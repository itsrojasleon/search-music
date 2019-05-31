# SearchMusic

## Prerequisites
- [Node](https://nodejs.org/) 11.13.0 or greater
- [Npm](https://npmjs.com) 6.9.0 or greater
- [Git](https://git-scm.com/) 2.20.1 or greater 

All of these must be available in your `$PATH`. To verify things are set up properly, you can run this:

```
node --version
npm --version
git --version
```

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

