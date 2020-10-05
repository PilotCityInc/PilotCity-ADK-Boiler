<template>
<!--  TODO: make the inputs into actual components -->
  <v-container class="module">
    <div class="module__navbar">
            <v-btn dark class="module__navbar-button"
      small depressed color="grey lighten-1" rounded>00:00:00</v-btn>
      <v-btn class="module__navbar-button"
      outlined x-small depressed color="grey lighten-1">Preview</v-btn>
    <v-menu
    left
      v-model="menu"
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
      <v-btn
                v-bind="attrs"
          v-on="on" small icon class="module__navbar-button">
      <v-icon color="grey lighten-1">mdi-cog</v-icon></v-btn>
      </template>
      <v-card>
          <v-btn color="white" class="module__settings-menu" tile depressed>
            <v-icon left color="#404142">mdi-arrow-horizontal-lock
            </v-icon>Lock</v-btn>
          <v-divider></v-divider>
                    <v-btn color="white" class="module__settings-menu"  tile depressed>
                      <v-icon left color="#ea6764">mdi-trash-can-outline
            </v-icon>Delete</v-btn>
          <v-divider></v-divider>
          <v-color-picker
  disabled
  dot-size="25"
  hide-canvas
  hide-inputs
  hide-mode-switch
  show-swatches
  :swatches="pilotcityColors"
  swatches-max-height="100"
></v-color-picker>
        <!-- <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="message"
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="hints"
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list> -->
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey lighten-1"
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            @click="menu = false"
          >
            Save
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>
    </div>
    <div class="module__container">

      <div class="module__title">
        <div class="module__image rounded-circle">
          <!-- <v-img
          height="87px"
          max-width="93px"
          src="mdi-cog">
          </v-img> -->
<v-icon light x-large color="#3c9dcd">mdi-cog</v-icon>
        </div>

        <div class="module__header text-md-h5 text-sm-subtitle-1 d-flex align-center">
          <input :value="moduleName" type="text" class="module__header-text" >
         <!-- <v-btn class="module__header-text-edit" icon>
            <v-icon color="grey">mdi-lead-pencil</v-icon></v-btn> -->

                    <v-chip-group class="module__header-chips"><v-chip dark small>3 Hours</v-chip>
                    <v-chip dark small>Deliverable</v-chip>
                    <v-chip dark small>Activity</v-chip></v-chip-group>
        </div>

      </div>
      <div class="module__body">
            <v-progress-linear
      color="#3c9dcd"
      height="2"
      value="75"
      buffer-value="95"
      stream
    ></v-progress-linear>
        <div class="module__pagination">
          <div
          :class="{'active': currentPage==page}"
          v-for="page in pages" :key="page">
            <div class="module__pagination-button--active"/>
            <v-btn
            :ripple="false"
            class="module__pagination-button elevation-0"
            color="transparent" height="40" small
            @click="currentPage=page">
              {{ page }}
            </v-btn>
          </div>
        </div>
        <div class="module__page">
          <keep-alive>
            <component :is="getComponent"/>
          </keep-alive>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import '@/styles/module.scss';
import * as Module from './components';

export default Vue.extend({
  name: 'Microapp',
  components: {
    'module-instruct': Module.Instruct,
    'module-metrics': Module.Monitor,
    'module-edit': Module.Setup,
    'module-outcomes': Module.Presets,
    'module-preview': Module.Default,
  },
  data: () => ({
    moduleName: 'Practice Log',
    pages: ['Setup', 'Presets', 'Monitor', 'Preview'],
    currentPage: 'Setup',
    fav: true,
    menu: false,
    message: false,
    hints: true,
    pilotcityColors: [
      ['#6eba80', '#3c9dcd', '#ea6764'],
      ['#eda1bf', '#fec34b', '#dedede'],
      ['#ae90b0', '#f79961', '#000000'],
    ],
  }),
  computed: {
    getComponent() {
      return `module-${this.currentPage.toLowerCase()}`;
    },
  },
});
</script>
