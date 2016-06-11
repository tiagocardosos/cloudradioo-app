import Vue from 'vue';
import store from './store';
import notifier from 'node-notifier';

let notification = new Vue({
  store,

  vuex: {
    getters: {
      currentTrack: ({player}) => player.currentTrack,
      apiUrl: ({player}) => player.apiUrl
    }
  },

  methods: {
    songPlayed () {
      this.notify(
          `♫ ${this.currentTrack.title}`,
          `By: ${this.currentTrack.username} on ${this.currentTrack.genre}`
      )
    },

    notify(title, body, silent = true, icon = require('../img/logo.png')) {
      return new Notification(
        title,
        {
          icon,
          body,
          silent
        }
      );
    }
  }
});

export default notification;