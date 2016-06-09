![cloudradioo](http://i.imgur.com/lf18DnW.jpg)

Cloudradioo App
===============

[cloudradioo.com](http://cloudradioo.com) is a web app for modern browsers that plays randomly all top 50 songs from the soundcloud charts. You will discover your new favorite song!

This is the app version of cloudradioo, built with [electron](http://electron.atom.io/) and [Vue.js](http://vuejs.org) (with [Vuex](https://github.com/vuejs/vuex)).

### Requirements
* Node / NPM

### Install

The app comes with the cloudradioo server as the default api url. If you have the full [cloudradioo web app](https://github.com/devfake/cloudradioo) just start the server and:

Change the url in `app/js/app.js` for your backend cloudradioo server:

```
store.dispatch('SET_API_URL', 'http://cloudradioo/');
```

Then compile the assets and start the app:

```
npm install
npm run build && npm run start
```

## Creating a release

The proccess for creating platform releases of cloudradioo app are still in development and are unstable.

For now the following commands is available:

```
npm run release-all -> Create a release for each platform and version supported by electron
npm run release-linux -> Create a release for the linux platform (arch x64)
npm run release-mac -> Create a release for the darwin platform (arch x64)
npm run release-win -> Create a release for the win32 platform (arch x64)
```


