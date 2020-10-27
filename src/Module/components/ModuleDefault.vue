<template>
  <v-container class="module-default">
    <div class="module-default__instructions">
      <v-expansion-panels v-model="showInstructions" class="module-default__instructions" flat>
        <v-expansion-panel>
          <v-expansion-panel-header
            v-show="showInstructions"
            hide-actions
            class="pa-0"
            @click="showInstructions = false"
          >
            <template v-slot="{ open }">
              <v-scroll-y-transition hide-on-leave>
                <div v-if="!open" class="d-flex flex-column justify-center">
                  <v-icon class="d-flex justify-center"> mdi-chevron-down </v-icon>
                  <div class="text-uppercase font-weight-bold text-subtitle-2 text-center">
                    Instructions
                  </div>
                </div>
              </v-scroll-y-transition>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <module-instruct readonly />
            <div @click="showInstructions = true">
              <div class="text-uppercase font-weight-bold text-subtitle-2 text-center">close</div>
              <!-- <div class="hr"/> OPTIONAL -->
              <v-icon class="d-flex justify-center"> mdi-chevron-up </v-icon>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="module-default__container"></div>
  </v-container>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import Instruct from './ModuleInstruct.vue';

export default {
  name: 'ModuleDefault',
  components: {
    'module-instruct': Instruct
  },
  apollo: {},
  data() {
    const setupInstructions = ref({
      description: '',
      instructions: ['', '', '']
    });
    const showInstructions = ref(true);
    return {
      setupInstructions,
      showInstructions
    };
  }
};
</script>
