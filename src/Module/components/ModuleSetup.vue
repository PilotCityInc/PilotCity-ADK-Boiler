<template>
  <v-container class="module-edit">
    <div class="module-edit__container">
      <Instruct v-model="setupInstructions" />
    </div>
  </v-container>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import Instruct from './ModuleInstruct.vue';
// import gql from 'graphql-tag';

export default {
  name: 'ModuleEdit',
  components: {
    Instruct
  },
  setup() {
    const setupInstructions = ref(['']);
    return {
      setupInstructions
    };
  }
};
</script>
