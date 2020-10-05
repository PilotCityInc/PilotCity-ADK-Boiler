<template>
<!--  TODO: make the inputs into actual components -->
  <v-container class="module-instruct">
    <div class="module-instruct__container">
      <!-- <div>As you practice, use and apply the employer's product or service,
        log how many minutes you use it each time.</div>
      <v-stepper class="module-instruct__stepper" v-model="e6" vertical>
        <v-stepper-step class="module-instruct__stepper-step" :complete="e6 > 0" step="1">
          Enter number of minutes to log and add “m” at end
        </v-stepper-step>
        <v-stepper-step :complete="e6 > 0" step="2">
          Click on “Log” button to enter the minutes practiced
        </v-stepper-step>
        <v-stepper-step :complete="e6 > 0" step="3">
          Press the button to clear the input field
        </v-stepper-step>
      </v-stepper> -->
<div class="module-instruct__container-grid">
<div>X</div>
<div>X</div>
<div>X</div>
<div>X</div>
<div>X</div>
<div>X</div>
</div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'ModuleInstruct',
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  apollo: {
  },
  data: () => ({
  }),
  methods: {
  },
});
</script>
