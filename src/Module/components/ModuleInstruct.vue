<template>
<!--  TODO: make the inputs into actual components -->
  <v-container class="module-instruct">
    <div class="module-instruct__container">
      <div class="module-instruct__description">
        <div class="module-instruct__description-label
        font-weight-black text-subtitle-2 text-uppercase">
          <span>Instructions</span>
        </div>
        <div contenteditable @input="updateDesc" class="font-weight-black text-body-1">
          {{moduleDescription}}
        </div>
      </div>
      <div class="module-instruct__instructions">
        <div class="module-instruct__instructions-item"
        v-for="(item, index) in moduleInstructions" :key="item">
          <v-avatar size="35" class="module-instruct__instructions-av
          font-weight-black text-caption d-none d-sm-flex">
            {{ index+1 }}
          </v-avatar>
          <div contenteditable @input="updateItem($event, index)"
          class="module-instruct__instructions-text font-weight-black text-body-1">
            {{ item }}
          </div>
        </div>
        <div @click="addItem"
        class="module-instruct__instructions-add
        font-weight-black text-body-1">
          <v-icon
          class="module-instruct__instructions-add-icon">
            mdi-plus
          </v-icon>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="module-instruct__actions">
          <div class="module-instruct__actions-cancel text-button">
            <a href="">
              cancel
            </a>
          </div>
          <v-btn :ripple="false" height="40" outlined
          class="active module-instruct__actions-save elevation-0">
            Save
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ModuleInstruct',

  data: () => ({
    moduleDescription: "As you practice, use and apply the employer's product or service, log how many minutes you use it each time.",
    moduleInstructions: [
      'Enter number of minutes to log and add “m” at end',
      'Click on “Log” button to enter the minutes practiced',
      'View total logged minutes',
    ], // TODO: parse for empty string (strings w/o _real_ characters)
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
  },
});
</script>
