<template>
  <!--  TODO: make the inputs into actual components -->
  <v-container class="module">
    <div class="module__navbar">
      <v-btn
        v-if="currentPage == 'preview'"
        dark
        class="module__navbar-button"
        small
        depressed
        color="grey lighten-1"
        rounded
        >00:00:00</v-btn
      >
      <v-btn
        v-if="currentPage != 'preview'"
        class="module__navbar-button"
        outlined
        x-small
        depressed
        @click="currentPage = 'preview'"
        >Preview</v-btn
      >

      <v-btn
        v-if="currentPage == 'preview'"
        class="module__navbar-button"
        dark
        x-small
        depressed
        color="red"
        @click="currentPage = 'setup'"
        >Exit Preview</v-btn
      >

      <v-menu v-if="currentPage != 'preview'" offset-y left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" small icon class="module__navbar-button" v-on="on">
            <v-icon color="grey lighten-1">mdi-cog</v-icon></v-btn
          >
        </template>
        <v-card class="module__menu">
          <v-btn color="white" class="module__settings-menu" tile depressed>
            <v-icon left color="#404142">mdi-arrow-horizontal-lock </v-icon>Lock</v-btn
          >
          <v-divider></v-divider>
          <v-btn color="white" class="module__settings-menu" tile depressed>
            <v-icon left color="#ea6764">mdi-trash-can-outline </v-icon>Delete</v-btn
          >
          <v-divider></v-divider>
          <v-color-picker
            v-model="selectedColor"
            disabled
            dot-size="25"
            hide-canvas
            hide-inputs
            hide-mode-switch
            show-swatches
            :swatches="pilotcityColors"
            swatches-max-height="100"
          ></v-color-picker>
        </v-card>
      </v-menu>
    </div>
    <div class="module__container" :style="{ 'border-color': getColor }">
      <div class="module__title">
        <div class="module__image rounded-circle">
          <v-icon light x-large :color="selectedColor">mdi-progress-question</v-icon>
        </div>
        <div class="module__header text-md-h5 text-sm-subtitle-1 d-flex align-center">
          <input :value="moduleName" type="text" class="module__header-text" />
          <v-chip-group class="module__header-chips"
            ><v-chip disabled dark small>Preset Tags</v-chip>
          </v-chip-group>
        </div>
      </div>
      <div class="module__body">
        <v-progress-linear
          v-if="currentPage != 'preview'"
          color="#dedede"
          height="2"
          value="100"
          buffer-value="100"
          stream
        />
        <div v-if="currentPage != 'preview'" class="module__pagination">
          <div v-for="page in subpages" :key="page" :class="{ active: currentPage == page }">
            <div class="module__pagination-button--active" />
            <v-btn
              :ripple="false"
              class="module__pagination-button"
              elevation="0"
              color="#ffffff"
              height="40"
              small
              @click="currentPage = page"
            >
              {{ page }}
            </v-btn>
          </div>
        </div>
        <div class="module__page">
          <keep-alive>
            <component :is="getComponent" />
          </keep-alive>
        </div>
      </div>
    </div>
    <!-- TIMELINE START -->

    <template>
      <v-container v-if="currentPage == 'preview'" style="max-width: 675px">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" small :color="selectedColor" dark depressed v-on="on"
              ><v-icon left>mdi-message-reply-text</v-icon>Chat with all</v-btn
            >
          </template>
          <v-card class="module__menu">
            <v-btn
              small
              color="white"
              class="module__chat-menu-button v-btn__content"
              tile
              depressed
            >
              <v-icon left color="#404142">mdi-account-group</v-icon>Stakeholders Only</v-btn
            >
            <v-divider></v-divider>
            <v-btn
              small
              color="white"
              class="module__chat-menu-button v-btn__content"
              tile
              depressed
            >
              <v-icon left color="#404142">mdi-account-cog</v-icon>Organizers Only</v-btn
            >
            <v-divider></v-divider>
            <v-btn
              small
              color="white"
              class="module__chat-menu-button v-btn__content"
              tile
              depressed
            >
              <v-icon left color="#404142">mdi-account-multiple</v-icon>Team Only</v-btn
            >

            <v-divider></v-divider>
            <v-btn
              small
              color="white"
              class="module__chat-menu-button v-btn__content"
              tile
              depressed
            >
              <v-icon left color="#404142">mdi-bullhorn</v-icon>All</v-btn
            >
          </v-card>
        </v-menu>

        <!-- ALL STAKEHOLDERS-->
        <!-- <v-btn small disabled outlined depressed
          ><v-icon left>mdi-message-reply-text</v-icon>Chat with all stakeholders</v-btn
        > -->

        <!-- FOR EMPLOYER ORGANIZERS -->
        <!-- <v-btn disabled outlined depressed
          ><v-icon left>mdi-message-reply-text</v-icon>Comment on student participant's
          activity</v-btn
        > -->
        <!-- FOR STUDENT PARTICIPANTS: Ability to view and reply to employer, teacher, school and parent stakeholder comments -->
        <!-- <v-btn small disabled outlined depressed
          ><v-icon left>mdi-message-reply-text</v-icon>Chat with stakeholders and your
          organizers</v-btn
        > -->

        <!-- FOR TEACHER, SCHOOL OR PARENT STAKEHOLDERS: Ability to view and reply to student and employer comments -->
        <!-- <v-btn disabled outlined depressed
          ><v-icon left>mdi-message-reply-text</v-icon>Comment on student participant's
          activity</v-btn
        > -->
        <v-timeline dense clipped>
          <v-timeline-item fill-dot class="white--text mb-12" color="pink" large>
            <template v-slot:icon>
              <v-avatar
                ><img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQEq9BL9NuOBAQ/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=XLeDuOV5B9rNOG4CrSQLh1sKeftfzBUwHd3M-y_CRKM"
              /></v-avatar>
            </template>
            <v-text-field
              v-model="input"
              hide-details
              flat
              label="Leave a comment..."
              solo
              @keydown.enter="comment"
            >
              <template v-slot:append>
                <v-btn class="mx-0" outlined depressed @click="comment"> Post </v-btn>
              </template>
            </v-text-field>
          </v-timeline-item>

          <v-slide-x-transition group>
            <v-timeline-item
              v-for="event in timeline"
              :key="event.id"
              class="mb-3"
              color="pink"
              fill-dot
            >
              <template v-slot:icon>
                <v-avatar size="34"
                  ><img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQEq9BL9NuOBAQ/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=XLeDuOV5B9rNOG4CrSQLh1sKeftfzBUwHd3M-y_CRKM"
                /></v-avatar>
              </template>
              <v-row justify="space-between">
                <v-col cols="7" v-text="event.text"></v-col>
                <v-col class="text-right" cols="3" v-text="event.time"></v-col>
                <v-col class="text-right" cols="2">
                  <!-- POSTER, STUDENT PARTICIPANT OR ORGANIZER CAN DELETE POSTS -->
                  <v-btn small class="module__trash" icon
                    ><v-icon small color="grey" class="module__trash"
                      >mdi-trash-can-outline</v-icon
                    ></v-btn
                  >
                  <!-- ANYONE CAN FLAG COMMENTS -->
                  <v-btn small class="module__trash" icon
                    ><v-icon small color="grey" class="module__trash">mdi-flag</v-icon></v-btn
                  ></v-col
                >
              </v-row>

              <v-btn class="" icon><v-icon color="grey lighten-2">mdi-thumb-up</v-icon></v-btn>

              <v-btn class="" icon><v-icon color="grey lighten-2">mdi-thumb-down</v-icon></v-btn>
              <!-- 
              <v-btn x-small outlined depressed class="mx-0">Reply</v-btn>

              <v-btn small class="" icon><v-icon color="grey lighten-2">mdi-flag</v-icon></v-btn> -->
            </v-timeline-item>
          </v-slide-x-transition>

          <!-- <v-timeline-item class="mb-6" hide-dot>
            <span>TODAY</span>
          </v-timeline-item>

          <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
            <v-row justify="space-between">
              <v-col cols="7"> This order was archived. </v-col>
              <v-col class="text-right" cols="5"> 15:26 EDT </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item class="mb-4" small>
            <v-row justify="space-between">
              <v-col cols="7">
                <v-chip class="white--text ml-0" color="purple" label small> APP </v-chip>
                Digital Downloads fulfilled 1 item.
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item class="mb-4" color="grey" small>
            <v-row justify="space-between">
              <v-col cols="7">
                Order confirmation email was sent to John Leider (john@vuetifyjs.com).
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item class="mb-4" hide-dot>
            <v-btn class="mx-0"> Resend Email </v-btn>
          </v-timeline-item>

          <v-timeline-item class="mb-4" color="grey" small>
            <v-row justify="space-between">
              <v-col cols="7">
                A $15.00 USD payment was processed on PayPal Express Checkout
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="grey" small>
            <v-row justify="space-between">
              <v-col cols="7">
                John Leider placed this order on Online Store (checkout #1937432132572).
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item> -->
        </v-timeline>
      </v-container>
    </template>
    <!-- TIMELINE END -->
  </v-container>
</template>
<style lang="scss">
html,
body {
  font-family: 'Raleway';
  font-size: 16px;
  width: 100%;
  height: 100%;
}

.v-timeline-item__divider {
  align-items: start !important;
}

.module {
  &__trash {
    // justify-content: start;
    align-items: start;
    // align-content: start;
  }

  &__header-chips {
    padding-bottom: 15px;
  }
}

.v-btn__content.module__chat-menu-button {
  justify-content: left;
  width: 100%;
}
.module__menu {
  .v-color-picker {
    &__controls {
      display: none;
    }
  }
}
</style>
<script lang="ts">
import { computed, reactive, ref, toRefs } from '@vue/composition-api';
import '@/styles/module.scss';
import * as Module from './components';

export default {
  name: 'ModuleName',

  components: {
    'module-monitor': Module.Monitor,
    'module-setup': Module.Setup,
    'module-presets': Module.Presets,
    'module-preview': Module.Default
  },
  data: () => ({
    events: [],
    input: null,
    nonce: 0
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents
            .split(' ')
            .map(v => v.charAt(0))
            .join('')}`;
        })
      });
      this.input = null;
    }
  },

  setup() {
    // ENTER ACTIVITY NAME BELOW
    const moduleName = ref('Activity Name');
    const page = reactive({
      subpages: ['Setup', 'Presets', 'Monitor'],
      currentPage: 'Setup'
    });
    const getComponent = computed(() => {
      return `module-${page.currentPage.toLowerCase()}`;
    });
    const color = reactive({
      pilotcityColors: [
        ['#6eba80', '#3c9dcd', '#ea6764'],
        ['#eda1bf', '#fec34b', '#bdbdbd'],
        ['#ae90b0', '#f79961', '#000000']
      ],
      // ENTER ACTIVITY COLOR
      selectedColor: '#dedede'
    });
    const getColor = computed(() => {
      return color.selectedColor.substring(0, 7);
    });
    const config = ref({
      description: '',
      instruct: ['']
    });
    const menu = ref(false);
    return {
      ...toRefs(color as any),
      ...toRefs(page as any),
      config,
      moduleName,
      menu,
      getComponent,
      getColor
    };
  }
};
</script>
