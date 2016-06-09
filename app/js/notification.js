import Vue from 'vue';

import store from './store';

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
          this.currentTrack.title,
          `By: ${this.currentTrack.username}
           Genre: ${this.currentTrack.genre}`
      )
    },

    notify(title, body) {
      new Notification(title, {
        body
      });
    }
  }
});

export default notification;