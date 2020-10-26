<template>
  <v-container class="module-outcomes">
    <div class="module-outcomes__container">
      <Instruct v-model="setupInstructions" />
    </div>
  </v-container>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import Instruct from './ModuleInstruct.vue';

export default {
  name: 'ModulePresets',
  components: {
    Instruct
  },
  setup() {
    const setupInstructions = ref({
      description: '',
      instructions: ['']
    });
    return {
      setupInstructions
    };
  }
};
</script>
