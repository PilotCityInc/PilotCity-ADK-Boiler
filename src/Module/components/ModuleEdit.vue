<template>
<v-container class="module-edit">
  <div class="module-edit__container">
    <div class="module-edit__title">
      <div class="text-subtitle-2 time font-weight-black text-capitalize">Time</div>
      <div class="text-subtitle-2 name font-weight-black text-capitalize">Name</div>
    </div>
    <div class="module-edit__user" v-for="user in users" :key="user.name">
      <div class="module-edit__user-time text-h6 font-weight-black">
        {{`${user.totalTime}m`}}
      </div>
      <div class="module-edit__user-data">
        <div class="module-edit__user-name text-h6 font-weight-black">
          {{user.name}}
        </div>
        <div class="module-edit__user-entry text-subtitle-2 font-weight-black"
        v-for="(entry,index) in user.entries" :key="entry+index">
          <div class="module-edit__user-entry-action">
            <v-btn outlined small class="rounded-0"
            :class="{'rejected':entry.status=='accepted', 'accepted':entry.status=='rejected'}"
            width="80.2">
              {{entry.status=='accepted'?'reject':'accept'}}
              </v-btn>
          </div>
          <div class="module-edit__user-entry-time">
            <span>{{`${entry.time}m`}}</span>
          </div>
        </div>
      </div>
    </div>
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
