<template>
<!--  TODO: make the inputs into actual components -->
  <v-container class="module-details">
    <div class="module-details__container">
      <div class="module-details__description">
        <div class="module-details__description-label
        font-weight-black text-subtitle-2 text-uppercase">
          <span>Instructions</span>
        </div>
        <div contenteditable @input="updateDesc" class="font-weight-black text-body-1">
          {{moduleDescription}}
        </div>
      </div>
      <div class="module-details__instructions">
       <ApolloQuery :query=" gql`query {
  mApracticelogOpt(query:{_id:"5f0d224b20997574dc3ea817"}) {
    instructions
  }
}`">
           <template v-slot="{result: { loading, error, data }}">
                <div class="module-details__instructions-item"
                v-for="(item, index) in data.mApracticelogOpt.instructions" :key="item">
                  <v-avatar size="35" class="module-details__instructions-av
                  font-weight-black text-caption d-none d-sm-flex">
                    {{ index+1 }}
                  </v-avatar>
                  <div contenteditable @input="updateItem($event, index)"
                  class="module-details__instructions-text font-weight-black text-body-1">
                    {{ item }}
                  </div>
                </div>
           </template>
       </ApolloQuery>
        <div @click="addItem"
        class="module-details__instructions-add
        font-weight-black text-body-1">
          <v-icon
          class="module-details__instructions-add-icon">
            mdi-plus
          </v-icon>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="module-details__actions">
          <div class="module-details__actions-cancel text-button">
            <a href="">
              cancel
            </a>
          </div>
          <v-btn :ripple="false" height="40" outlined
          class="active module-details__actions-save elevation-0">
            Save
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'ModuleInstruct',
  apollo: {
  },
  data: () => ({
    programOptId: '5f0639aef650e8721887261f',
    moduleDescription: "As you practice, use and apply the employer's product or service, log how many minutes you use it each time.",
    moduleInstructions: [
      'Enter number of minutes to log and add “m” at end',
      'Click on “Log” button to enter the minutes practiced',
      'View total logged minutes',
    ],
  }),
  methods: {
    updateDesc(e: Event) {
      const el = e.target as HTMLTextAreaElement;
      this.moduleDescription = el.innerText;
      console.log('description has been updated!');
    },
    updateItem(e: Event, i: number) {
      const el = e.target as HTMLTextAreaElement;
      this.moduleInstructions[i] = el.innerText;
      console.log(`instruction ${i} has been updated!`);
    },
    addItem() {
      this.moduleInstructions.push('');
    },
});
</script>
