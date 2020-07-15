<template>
  <v-container class="module-metrics">
    <div class="module-metrics__container">
      <div class="module-metrics__filter">
        <v-chip-group column>
          <v-chip
          small
          class="module-metrics__filter-chip text-capitalize"
          v-for="chip in chips"
          :key="chip">
          <v-avatar left>
            <v-icon small>mdi-close</v-icon>
          </v-avatar>
            {{chip}}
          </v-chip>
          <v-chip small class="module-metrics__filter-chip
          module-metrics__filter-chip-add">
            <v-icon small>mdi-add</v-icon>
          </v-chip>
        </v-chip-group>
      </div>
      <div class="module-metrics__data">
        <v-sheet
          width="433"
          class="v-sheet--offset mx-auto"
          color="cyan"
          elevation="1"
        >
          <v-sparkline
          :labels="labels"
          color="white"
          :value="value"
          line-width="2"
          padding="16"/>
        </v-sheet>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ModuleMetrics',

  data: () => ({
    chips: ['team', 'student'],
    labels: [
      '12am',
      '3am',
      '6am',
      '9am',
      '12pm',
      '3pm',
      '6pm',
      '9pm',
    ],
    value: [
      200,
      675,
      410,
      390,
      310,
      460,
      250,
      240,
    ],
  }),
});
</script>
