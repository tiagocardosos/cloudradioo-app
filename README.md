![cloudradioo](https://i.imgsafe.org/afc8537f2e.png)

Cloudradioo App
===============

[cloudradioo.com](http://cloudradioo.com) is a web app for modern browsers that plays randomly all top 50 songs from the soundcloud charts. You will discover your new favorite song!

This is the app version of cloudradioo, built with [electron](http://electron.atom.io/) and [Vue.js](http://vuejs.org) (with [Vuex](https://github.com/vuejs/vuex)).

### Installer

Please go to the [release page](https://github.com/devfake/cloudradioo-app/releases) and get the latest version for your operation system

### For developers

### Requirements
* Node / NPM

### Install

The app comes with the cloudradioo server as the default api url. If you have the full [cloudradioo web app](https://github.com/devfake/cloudradioo) just start the server and:

Change the url in `app/js/app.js` for your backend cloudradioo server:

```
store.dispatch('SET_API_URL', 'http://cloudradioo.com/');
```

Then compile the assets and start the app:

```
npm install
npm start
```

### Creating a release

You can create a release **only** for your operation system

For windows users, you need the NSIS library installed and added to your path. The version 2 of this library has some bugs with electron, I recommend the version 3.0 which is currently in RC

```
npm run release
```

### ToDo

- [x] Electron App
- [x] Desktop Notifications (HTML5 Notification API)
- [ ] Notification preferences (Sound on/off, notification on/off, etc)
- [x] Native Icon for each platform
- [ ] Splash Screen
- [x] Improve release build system (Fully stable on Windows and Linux systems. Need testers for the darwin platform)
- [x] Create the app installer (Now the release system wrap the app into an installer instead of return the source code)
- [ ] New Charts



