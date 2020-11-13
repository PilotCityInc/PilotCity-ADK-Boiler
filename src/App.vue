<template>
  <v-app>
    <Module />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
// import ApolloExample from './components/ApolloExample.vue';
import Module from './Module/Module.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Module
  }
});
</script>
