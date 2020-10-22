<template>
  <v-container class="module-edit">
    <div class="module-edit__container">
      <v-text-field
        label="Employer Name"
        value="Kaiser Permanente National Innovation"
        outlined
      ></v-text-field>
      <v-text-field
        label="Enter your employer website"
        hint="www.employername.com"
        value=""
        outlined
      ></v-text-field>
      <div class="module-setup__buildscope">
        <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
        <v-btn depressed outlined x-small>Build & Import Scope</v-btn>
      </div>
      <v-textarea
        outlined
        label="What is the project scope?"
        placeholder="In a tweet or less, describe your scope of the project mission"
      ></v-textarea>
      <v-text-field
        outlined
        label="Enter Introduction Video (YouTube URL Link)"
        placeholder="https://www.youtube.com/linkextension"
        prepend-inner-icon="mdi-youtube"
      ></v-text-field>
      <v-textarea
        outlined
        label="Enter employer biography"
        placeholder="In a paragraph or less, describe your organization"
      ></v-textarea>
      <v-btn x-large depressed outlined>Finish</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
// import gql from 'graphql-tag';

export default {
  name: 'ModuleEdit',
  setup() {
    const setupInstructions = ref(['']);
    return {
      setupInstructions
    };
  }
};
</script>

<style lang="scss">
.module-setup {
  &__buildscope {
    text-align: right;
    margin-bottom: 10px;
  }
}
</style>
