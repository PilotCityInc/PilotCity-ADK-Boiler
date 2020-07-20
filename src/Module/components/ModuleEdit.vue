<template>
<v-container class="module-edit">
  <div class="module-edit__container">
  </div>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ModuleEdit',

  data: () => ({
    users: [
      {
        name: 'Derick Lee',
        totalTime: '225', // ? in minutes
        entries: [
          {
            status: 'accepted',
            time: '60',
          },
          {
            status: 'accepted',
            time: '45',
          },
          {
            status: 'rejected',
            time: '120',
          },
        ],
      },
      {
        name: 'Prajit Saravanan',
        totalTime: '720',
        entries: [
          {
            status: 'rejected',
            time: '120',
          },
          {
            status: 'accepted',
            time: '120',
          },
          {
            status: 'accepted',
            time: '120',
          },
        ],
      },
    ],
  }),
});
</script>
