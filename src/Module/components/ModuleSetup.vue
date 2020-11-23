<template>
  <v-container class="module-edit">
    <div class="module-edit__container">
      <!-- ENTER CONTENT HERE -->
    </div>
  </v-container>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
// import gql from 'graphql-tag';

export default {
  name: 'ModuleSetup',

  setup() {
    const setup = reactive({});
    return {
      ...toRefs(setup)
    };
  }
};
</script>

<style lang="scss"></style>
