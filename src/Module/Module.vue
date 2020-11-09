<template>
  <!--  TODO: make the inputs into actual components -->
  <v-container class="module">
    <div class="module__navbar">
      <v-btn dark class="module__navbar-button" small depressed color="grey lighten-1" rounded
        >00:00:00</v-btn
      >
      <v-btn
        class="module__navbar-button"
        outlined
        x-small
        depressed
        color="grey lighten-1"
        @click="currentPage = 'preview'"
        >Preview</v-btn
      >
      <v-menu v-model="menu" left :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" small icon class="module__navbar-button" v-on="on">
            <v-icon color="grey lighten-1">mdi-cog</v-icon></v-btn
          >
        </template>
        <v-card class="module__menu">
          <v-btn color="white" class="module__settings-menu" tile depressed>
            <v-icon left color="#404142">mdi-arrow-horizontal-lock </v-icon>Lock</v-btn
          >
          <v-divider></v-divider>
          <v-btn color="white" class="module__settings-menu" tile depressed>
            <v-icon left color="#ea6764">mdi-trash-can-outline </v-icon>Delete</v-btn
          >
          <v-divider></v-divider>
          <v-color-picker
            v-model="selectedColor"
            disabled
            dot-size="25"
            hide-canvas
            hide-inputs
            hide-mode-switch
            show-swatches
            :swatches="pilotcityColors"
            swatches-max-height="100"
          ></v-color-picker>
        </v-card>
      </v-menu>
    </div>
    <div class="module__container" :style="{ 'border-color': getColor }">
      <div class="module__title">
        <div class="module__image rounded-circle">
          <v-icon light x-large :color="selectedColor">mdi-newspaper-variant-outline</v-icon>
        </div>
        <div class="module__header text-md-h5 text-sm-subtitle-1 d-flex align-center">
          <input :value="moduleName" type="text" class="module__header-text" />
          <v-chip-group class="module__header-chips"
            ><v-chip dark small>Stage</v-chip>
            <v-chip dark small>Activity or Deliverable</v-chip>
            <v-chip dark small>Mandatory</v-chip>
            <v-chip dark small>Deadline</v-chip>
            <v-chip dark small>Team-based</v-chip>
          </v-chip-group>
        </div>
      </div>
      <div class="module__body">
        <v-progress-linear color="#dedede" height="2" value="100" buffer-value="100" stream />
        <div class="module__pagination">
          <div v-for="page in subpages" :key="page" :class="{ active: currentPage == page }">
            <div class="module__pagination-button--active" />
            <v-btn
              :ripple="false"
              class="module__pagination-button"
              elevation="0"
              color="#ffffff"
              height="40"
              small
              @click="currentPage = page"
            >
              {{ page }}
            </v-btn>
          </div>
        </div>
        <div class="module__page">
          <keep-alive>
            <component :is="getComponent" />
          </keep-alive>
        </div>
      </div>
    </div>
  </v-container>
</template>
<style lang="scss">
html,
body {
  font-family: 'Raleway';
  font-size: 16px;
  width: 100%;
  height: 100%;
}
.module__menu {
  .v-color-picker {
    &__controls {
      display: none;
    }
  }
}
</style>
<script lang="ts">
import { computed, reactive, ref, toRefs } from '@vue/composition-api';
import '@/styles/module.scss';
import * as Module from './components';

interface Page {
  subpages: string[];
  currentPage: string;
  preview: boolean;
  getComponent: string;
}
interface Color {
  pilotcityColors: string[][];
  selectedColor: string;
  getColor: string;
}
interface Config {
  description: string;
  instruct: string[];
  deletable: boolean;
  group: string[];
  deliverable: boolean;
  notifications: string;
  reflection: string[];
  access: string;
}
export default {
  name: 'ModuleName',
  components: {
    'module-monitor': Module.Monitor,
    'module-setup': Module.Setup,
    'module-presets': Module.Presets,
    'module-preview': Module.Default
  },
  setup() {
    const moduleName = ref('Request for Projects');
    console.log(this); // maybe we can use exported `name:` property
    const page: Page = reactive({
      subpages: ['Setup', 'Presets', 'Monitor'],
      currentPage: 'Setup',
      preview: false,
      getComponent: computed(() => {
        return `module-${page.currentPage.toLowerCase()}`;
      })
    });
    const color: Color = reactive({
      pilotcityColors: [
        ['#6eba80', '#3c9dcd', '#ea6764'],
        ['#eda1bf', '#fec34b', '#bdbdbd'],
        ['#ae90b0', '#f79961', '#000000']
      ],
      selectedColor: '#3c9dcd',
      getColor: computed(() => {
        return color.selectedColor.substring(0, 7);
      })
    });
    const config = ref({
      description: '',
      instruct: ['']
    });
    const menu = ref(false);
    return {
      ...toRefs(color as any),
      ...toRefs(page as any),
      config,
      moduleName,
      menu
    };
  }
};
</script>
