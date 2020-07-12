import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#4f4f4f',
        secondary: '#bdbdbd',
        accent: '#404142',
        error: '#ea6763',
        info: '#3c9ccc',
        success: '#6eba7f',
        warning: '#FFC107',
      },
    },
  },
});
