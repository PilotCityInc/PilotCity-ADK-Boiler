<template>
  <v-container class="module-outcomes">
    <div class="module-outcomes__container">
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
