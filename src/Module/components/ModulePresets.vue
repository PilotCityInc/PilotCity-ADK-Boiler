<template>
  <v-container class="module-outcomes">
    <div class="module-outcomes__container">
      <Instruct v-model="setupInstructions" />
    </div>
  </v-container>
</template>

<script lang="ts">
import Instruct from './ModuleInstruct.vue';

export default {
  name: 'ModulePresets',
  components: {
    Instruct
  }
};
</script>
