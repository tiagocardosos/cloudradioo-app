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
          this.currentTrack.title,
          `By: ${this.currentTrack.username} on genre ${this.currentTrack.genre}`
      )
    },

    notify(title, message, icon = '', sound = false, wait = false) {
      notifier.notify({
        title,
        message,
        icon,
        sound,
        wait
      });
    }
  }
});

export default notification;