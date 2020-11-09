<template>
  <!--  TODO: make the inputs into actual components -->
  <v-container class="module-instruct">
    <div class="module-instruct__container">
      <div class="module-instruct__description">
        <div class="module-instruct__description-label">
          <span>Goal</span>
        </div>
        <div
          :contenteditable="!readonly"
          class="font-weight-black text-body-1"
          @input="updateDesc($event)"
        >
          {{ description }}
        </div>
      </div>
      <div class="module-instruct__instructions">
        <div class="module-instruct__description-label">
          <span>Instructions</span>
        </div>
        <div
          v-for="(item, index) in instructions"
          :key="item + index"
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
import {
  computed,
  reactive,
  WritableComputedRef,
  toRefs,
  defineComponent
} from '@vue/composition-api';

interface Val {
  description: string;
  instructions: string[];
}
interface Update {
  updateDesc: (e: Event) => void;
  updateInstruction: (e: Event) => void;
}
export default defineComponent({
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
  apollo: {},
  setup(props, { emit }) {
    const description: WritableComputedRef<string> = computed({
      get: () => (props.value as Val).description,
      set: newVal => emit('input', newVal)
    });
    const instructions: WritableComputedRef<string[]> = computed({
      get: () => (props.value as Val).instructions,
      set: newVal => emit('input', instructions.value.concat(newVal))
    });
    const updateData: Update = reactive({
      updateDesc: (e: Event) => {
        const target = e.target as HTMLElement;
        description.value = target.innerText;
      },
      updateInstruction: (e: Event) => {
        const target = e.target as HTMLElement;
        instructions.value = [target.innerText];
      }
    });
    return {
      ...toRefs(updateData as any),
      description,
      instructions
    };
  }
});
</script>

<style lang="scss"></style>
