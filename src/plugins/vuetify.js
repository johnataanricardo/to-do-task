import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3FB984',
        secondary: '#C1C1C1',
        background: '#303030'
      },
    },
  },
})

export default vuetify