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
              <div class="hr"/>
              <v-icon class="d-flex secondary--text justify-center">
                mdi-chevron-up
              </v-icon>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="module-default__container">
      <!-- TODO: # validation -->
      <v-text-field outlined placeholder="##m" class="module-default__input-text">
        <template v-slot:label>
          <span class="font-weight-black black--text">Enter Minutes</span>
        </template>
      </v-text-field >
      <v-btn block outlined :ripple="false"
      class="module-default__input-btn
      font-weight-black black--text">
        Log Minutes
      </v-btn>
      <span class="module-default__caption
      text-uppercase font-weight-black text-caption">
      logged minutes
      </span>
      <span class="font-weight-black text-h4 module-default__time">
        143h 58m
      </span>
      <v-btn block outlined :ripple="false"
      class="module-default__next-btn
      font-weight-black black--text">
        Next
      </v-btn>
    </div>
  </v-container>
</template>
<style lang="scss">
.module-default{
  max-height: 725px;
  overflow: hidden;
  & .hr{
    border-bottom: 1px var(--v-secondary-base) solid;
  }
}
.module-default{
  &.container{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  &__container{
    display: flex;
    margin-top: 64px;
    max-width: 236px;
    flex-direction: column;
    align-items: center;
  }
  &__input{
    &-text div.v-input__slot input{
      width: 100%;
      text-align: center;
      font-size: 3rem;
      font-weight: 900;
      padding: 40px 38px;
    }
    &-btn{
      padding: 14px inherit;
      margin-bottom: 48px;
    }
  }
  &__caption{
    margin-bottom: 40px;
  }
  &__time{
    margin-bottom: 120px;
  }

}
</style>

<script lang="ts">
import Vue from 'vue';
import Instruct from './ModuleInstruct.vue';

export default Vue.extend({
  name: 'ModuleDefault',
  components: {
    'module-instruct': Instruct,
  },
  data: () => ({
    showInstructions: true,
  }),
});
</script>
