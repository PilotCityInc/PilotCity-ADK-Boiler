<template>
  <v-container class="module">
    <div class="module__container">
      <div class="module__title">
        <div class="module__image"/>
      </div>
      <div class="module__body">
        <div class="module__pagination"/>

      </div>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Microapp',
  data: () => ({

  }),
});
</script>
<style lang="scss">
 .module{

 }
 .module{
   & .grid-container{
     grid-template-columns: 1fr;
     grid-template-rows: 2fr;
   }
 }
</style>
