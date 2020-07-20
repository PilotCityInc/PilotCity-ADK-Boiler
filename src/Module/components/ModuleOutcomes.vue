<template>
  <v-container class="module-outcomes">
    <div class="module-outcomes__container">
      <div class="module-outcomes__items">
        <div class="module-outcomes__label text-body-1 font-weight-black">
          Minimum amount of minutes required before unlocking
        </div>
        <div class="module-outcomes__dropdown">
          <v-menu offset-y top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                block
                class="module-outcomes__select text-capitalize"
                outlined
                v-bind="attrs"
                v-on="on"
              >
                {{minReq}}
                <v-icon left class="ml-1">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(op, index) in minutesReq"
                :key="index"
                @click="minReq=op"
              >
                <v-list-item-title>{{ op }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="module-outcomes__label  text-body-1 font-weight-black">
          Amount of minutes desired as a goal from organizer
        </div>
        <div class="module-outcomes__dropdown">
          <v-menu offset-y top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                block
                class="module-outcomes__select text-capitalize"
                outlined
                v-bind="attrs"
                v-on="on"
              >
                {{goal}}
                <v-icon left class="ml-1">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(op, index) in minutesNec"
                :key="index"
                @click="goal=op"
              >
                <v-list-item-title>{{ op }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="module-outcomes__actions">
          <div class="module-outcomes__actions-cancel text-button">
            <a href="">
              cancel
            </a>
          </div>
          <v-btn :ripple="false" height="40" outlined
          class="active module-outcomes__actions-save elevation-0">
            Save
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'ModuleOutcomes',
  apollo: {
    goal: gql`query outcomeQuery{
      mApracticelogOpt{
        goal,
      }
    }`,
    minReq: gql`query outcomeQuery{
      mApracticelogOpt{
        minReq,
      }
    }`,
  },
  data: () => ({
    minutesReq: [
      '10m',
      '20m',
      '30m',
      '45m',
      '60m',
    ],
    minutesNec: [
      '100m',
      '200m',
      '300m',
      '400m',
      '500m',
      '600m',
      '700m',
      '800m',
      '900m',
      '1000m',
    ],
    minReq: 'Select',
    goal: 'Select',
  }),
});
</script>
