<template>
  <v-container class="module-edit">
    <div class="module-edit__container"></div>
  </v-container>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';

export default {
  name: 'ModuleSetup',
  setup() {
    const setupInstructions = ref(['']);
    return {
      setupInstructions
    };
  }
};
</script>
