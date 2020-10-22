<template>
  <!--  TODO: make the inputs into actual components -->
  <v-container class="module-instruct">
    <div class="module-instruct__container">
      <div class="module-instruct__description">
        <div
          class="module-instruct__description-label font-weight-black text-subtitle-2 text-uppercase"
        >
          <span>Instructions</span>
        </div>
        <div
          :contenteditable="!readonly"
          class="font-weight-black text-body-1"
          @input="updateDesc($event)"
        >
          {{ moduleDescription }}
        </div>
      </div>
      <div class="module-instruct__instructions">
        <div
          v-for="(item, index) in instructions"
          :key="item"
          class="module-instruct__instructions-item"
        >
          <v-avatar
            size="35"
            class="module-instruct__instructions-av font-weight-black text-caption d-none d-sm-flex"
          >
            {{ index + 1 }}
          </v-avatar>
          <div
            :contenteditable="!readonly"
            class="module-instruct__instructions-text font-weight-black text-body-1"
          >
            {{ item }}
          </div>
        </div>
        <div
          v-if="!readonly"
          class="module-instruct__instructions-add font-weight-black text-body-1"
        >
          <v-icon class="module-instruct__instructions-add-icon"> mdi-plus </v-icon>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { computed, reactive, ref, WritableComputedRef } from '@vue/composition-api';

export default {
  name: 'ModuleInstruct',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: () => {
        return {
          description: '',
          instructions: ['', '', '']
        };
      }
    }
  },
  apollo: {}
  // setup(props, { emit }) {
  //   const updateData = reactive({
  //     updateDesc: (e: Event) => {
  //       const target = e.target as HTMLElement;
  //       instructData.moduleDescription = target.innerText;
  //     },
  //     updateInstruction: (e: Event) => {
  //       const target = e.target as HTMLElement;
  //       instructions.value = [target.innerText];
  //     }
  //   });
  //   const description: WritableComputedRef<string> = computed({
  //     get: () => props.value.description as string,
  //     set: newVal => emit('input', instructions.value.(newVal))
  //   })
  //   const instructions: WritableComputedRef<string[]> = computed({
  //     get: () => props.value.instructions as string[],
  //     set: newVal => emit('input', instructions.value.concat(newVal))
  //   });
  //   return {
  //     toRef(updateData),
  //     description,
  //     instructions
  //   };
  // }
};
</script>
