<template>
  <v-container class="module-default">
    <div class="module-default__instructions">
      <v-expansion-panels class="module-default__instructions" flat v-model="showInstructions">
        <v-expansion-panel>
          <v-expansion-panel-header v-show="showInstructions" @click="showInstructions = false"
          hide-actions class="pa-0">
            <template v-slot="{open}">
              <v-scroll-y-transition hide-on-leave>
                <div v-if="!open" class="d-flex flex-column justify-center">
                  <v-icon  class="d-flex justify-center secondary--text">
                    mdi-chevron-down
                  </v-icon>
                  <div
                  class="text-uppercase
                  font-weight-bold text-subtitle-2
                  secondary--text text-center">
                      Instructions
                  </div>
                </div>
              </v-scroll-y-transition>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <module-instruct readonly/>
            <div @click="showInstructions = true">
              <div class="text-uppercase
              font-weight-bold text-subtitle-2
              secondary--text text-center">
                close
              </div>
              <!-- <div class="hr"/> OPTIONAL -->
              <v-icon class="d-flex secondary--text justify-center">
                mdi-chevron-up
              </v-icon>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="module-default__container">
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
// import gql from 'graphql-tag';
import Instruct from './ModuleInstruct.vue';

export default Vue.extend({
  name: 'ModuleDefault',
  components: {
    'module-instruct': Instruct,
  },
  apollo: {
  },
  data: () => ({
    showInstructions: true,
  }),
});
</script>
