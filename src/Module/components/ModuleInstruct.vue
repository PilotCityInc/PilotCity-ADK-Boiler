<template>
<!--  TODO: make the inputs into actual components -->
  <v-container class="module-instruct">
    <div class="module-instruct__container">
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
    instructions: gql`query instructQuery{
      mApracticelogOpt{
        instructions
      }
    }`,
  },
  data: () => ({
    moduleDescription: "As you practice, use and apply the employer's product or service, log how many minutes you use it each time.",
    instructions: [
      'Enter number of minutes to log and add “m” at end',
      'Click on “Log” button to enter the minutes practiced',
      'View total logged minutes',
    ], // TODO: parse for empty string (strings w/o _real_ characters)
  }),
  methods: {
    updateDesc(e: Event) {
      const el = e.target as HTMLTextAreaElement;
      this.moduleDescription = el.innerText;
      console.log('description has been updated!');
    },
    updateItem(e: Event, i: number) {
      const el = e.target as HTMLTextAreaElement;
      this.instructions[i] = el.innerText;
      console.log(`instruction ${i} has been updated!`);
    },
    addItem() {
      this.instructions.push('');
    },
  },
});
</script>
