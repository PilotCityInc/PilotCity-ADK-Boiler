<template>
  <v-container class="module-metrics">
    <div class="module-metrics__container">
      <!-- <div class="module-metrics__monitor-title">Monitor Activity</div> -->
      <v-btn class="mb-3" x-small outlined depressed color="grey">MONITOR LIVE DATA</v-btn>
      <iframe
        class="module-metrics__mongo-chart"
        width="100%"
        height="400"
        src="https://charts.mongodb.com/charts-project-0-tgpou/embed/charts?id=dc3741fd-faf6-4139-9ee0-8458eee22f30&timestamp=TIMESTAMP&signature=SIGNATURE"
      ></iframe>
      <!-- <div class="module-metrics__mongo-chart"></div> -->
      <v-btn class="mb-3" x-small outlined depressed color="grey">PARTICIPANT BREAKDOWN</v-btn>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="10"
        class="elevation-0"
      ></v-data-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      headers: [
        {
          text: 'Participants',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Team', value: 'calories' },
        { text: 'Progress', value: 'fat' },
        { text: 'View', value: 'carbs' }
      ],
      desserts: [
        {
          name: 'Derick Lee',
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: 'Prajit Saravanan',
          calories: 237,
          fat: 9.0,
          carbs: 37
        },
        {
          name: 'Akheel Shaik',
          calories: 262,
          fat: 16.0,
          carbs: 23
        },
        {
          name: 'Eric Reyes',
          calories: 305,
          fat: 3.7,
          carbs: 67
        },
        {
          name: 'Jerold Inocencio',
          calories: 356,
          fat: 16.0,
          carbs: 49
        },
        {
          name: 'Monica Willemsz',
          calories: 375,
          fat: 0.0,
          carbs: 94
        },
        {
          name: 'Stephanie Betancourt',
          calories: 392,
          fat: 0.2,
          carbs: 98
        },
        {
          name: 'Kenneth Thai',
          calories: 408,
          fat: 3.2,
          carbs: 87
        },
        {
          name: 'Kristen Chan',
          calories: 452,
          fat: 25.0,
          carbs: 51
        },
        {
          name: 'Zachary Borja',
          calories: 518,
          fat: 26.0,
          carbs: 65
        }
      ]
    };
  }
});
</script>

<style lang="scss">
.module-metrics {
  // padding: none;
  // margin: none;
  &__container {
    // text-align: center;
    // padding: none;
    // margin: none;
    // justify-content: center;
    // align-items: center;
    // margin-bottom: auto;
    // margin-top: auto;
    // margin-left: auto;
    // margin-right: auto;
    // justify-content: center;
    // align-items: center;
    text-align: center;
  }

  &__mongo-chart {
    height: 325px;
    width: 95%;
    margin-bottom: 50px;
    // border-radius: 25px;
    // background-color: #e6e7e8;
    // DEFAULT MONGODB CHART EMBED IFRAME STYLE
    // border: none;
    border: 20px solid #f1f2f2;
    // border-radius: 2px;
    // border-radius: 12px;
    // box-shadow: 0 2px 10px 0 rgba(16, 17, 17, 0.2);
  }

  &__monitor-title {
    font-weight: 800;
    font-size: 28px;
    color: #f6f6f6;
    margin-bottom: 25px;
  }
}
</style>
