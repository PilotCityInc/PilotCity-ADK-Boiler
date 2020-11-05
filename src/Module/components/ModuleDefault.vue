<template>
  <v-container class="module-default__container">
    <div class="module-default__instructions">
      <v-expansion-panels v-model="showInstructions" class="module-default__instructions" flat>
        <v-expansion-panel>
          <v-expansion-panel-header
            v-show="showInstructions"
            hide-actions
            class="pa-0"
            @click="showInstructions = true"
          >
            <template v-slot="{ open }">
              <v-scroll-y-transition hide-on-leave>
                <div v-if="!open" class="d-flex flex-column justify-center">
                  <v-icon color="grey lighten-2" class="d-flex justify-center">
                    mdi-chevron-down
                  </v-icon>
                  <div color="grey lighten-2" class="module-default__collapse-title">
                    INSTRUCTIONS
                  </div>
                </div>
              </v-scroll-y-transition>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <Instruct readonly />
            <div @click="showInstructions = true">
              <div class="module-default__collapse-title">CLOSE</div>
              <!-- <div class="hr"/> OPTIONAL -->
              <v-icon color="grey lighten-2" class="d-flex justify-center"> mdi-chevron-up </v-icon>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <v-progress-linear
      class="module-default__collapse-divider"
      color="#dedede"
      height="2"
      value="75"
      buffer-value="95"
      stream
    />

    <div class="module-default__scope">
      <v-btn dense color="blue" small rounded outlined depressed
        >Kaiser Permanente National Innovation
      </v-btn>
      <br />
      <br />
      Use human-centered design to develop health-tech solutions to fight childhood obesity, enable
      telemedicine, and create a smart and health community.
    </div>
    <br />
    <br />
    <div class="module-default__youtube"></div>
    <br />
    <br />

    <div class="module-default__faq">
      <v-btn dense color="blue" large rounded outlined depressed>KEY QUESTIONS & ANSWERS</v-btn>
      <br />
      <br />

      <template>
        <v-timeline>
          <v-timeline-item v-for="n in 1" :key="n" color="green" fill-dot left large>
            <template v-slot:icon>
              <v-avatar>
                <img
                  src="https://static.wixstatic.com/media/b0cb5d_7a6494c66dfb4bb6b9e2d6c71c214eca~mv2.jpg/v1/fill/w_432,h_434,al_c,lg_1,q_80/Brit_Pro.webp"
                />
              </v-avatar>
            </template>
            <v-card outlined color="grey lighten-3" class="elevation-0">
              <v-card-text
                ><div class="module-default__faq-answer-dark">
                  Hi, my name is
                  <span class="module-default__faq-answer-dark-highlight">Brittany Domnie</span>
                  with
                  <span class="module-default__faq-answer-dark-highlight"
                    >Kaiser Permanente National Innovation</span
                  >. Below are my answers to some key questions.
                </div></v-card-text
              >
            </v-card>
          </v-timeline-item>

          <v-timeline-item v-for="n in 1" :key="n" color="green" fill-dot right large>
            <template v-slot:icon>
              <v-avatar>
                <img
                  src="https://static.wixstatic.com/media/b0cb5d_7a6494c66dfb4bb6b9e2d6c71c214eca~mv2.jpg/v1/fill/w_432,h_434,al_c,lg_1,q_80/Brit_Pro.webp"
                />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span class="module-default__faq-question">What is the urgency of this problem?</span>
            </template>
            <v-card color="green" dark outlined class="elevation-0">
              <v-card-text
                ><div class="module-default__faq-answer">
                  The pandemic has exacerbated the healthcare system as it goes into overdrive.
                  People are uncertain and concerned about their current health status.
                </div></v-card-text
              >
            </v-card>
          </v-timeline-item>

          <v-timeline-item v-for="n in 1" :key="n" right color="red" fill-dot large>
            <template v-slot:icon>
              <v-avatar>
                <img
                  src="https://static.wixstatic.com/media/b0cb5d_7a6494c66dfb4bb6b9e2d6c71c214eca~mv2.jpg/v1/fill/w_432,h_434,al_c,lg_1,q_80/Brit_Pro.webp"
                />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span class="module-default__faq-question"
                >Who could be possible users of the solution created?</span
              >
            </template>
            <v-card color="red" dark outlined class="elevation-0">
              <v-card-text class="module-default__faq-answer"
                ><div class="module-default__faq-answer">
                  Frontline workers in healthcare, doctors, and researchers would be the optimal
                  users of the solution for you bright students to embark on developing.
                </div></v-card-text
              >
            </v-card>
          </v-timeline-item>

          <v-timeline-item v-for="n in 1" :key="n" right color="pink" fill-dot large>
            <template v-slot:icon>
              <v-avatar>
                <img
                  src="https://static.wixstatic.com/media/b0cb5d_7a6494c66dfb4bb6b9e2d6c71c214eca~mv2.jpg/v1/fill/w_432,h_434,al_c,lg_1,q_80/Brit_Pro.webp"
                />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span class="module-default__faq-question">What are the opportunities?</span>
            </template>
            <v-card color="pink" dark outlined class="elevation-0">
              <v-card-text class="module-default__faq-answer"
                ><div class="module-default__faq-answer">
                  We are excited about the idea of bridging the digital divide, enabling
                  telemedicine practices which would greatly enhance the accessibility low-income
                  families have with our healthcare system with the factor of transport eliminated.
                </div></v-card-text
              >
            </v-card>
          </v-timeline-item>

          <v-timeline-item v-for="n in 1" :key="n" right color="purple" fill-dot large>
            <template v-slot:icon>
              <v-avatar>
                <img
                  src="https://static.wixstatic.com/media/b0cb5d_7a6494c66dfb4bb6b9e2d6c71c214eca~mv2.jpg/v1/fill/w_432,h_434,al_c,lg_1,q_80/Brit_Pro.webp"
                />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span class="module-default__faq-question">What are the known challenges?</span>
            </template>
            <v-card color="purple" dark outlined class="elevation-0">
              <v-card-text class="module-default__faq-answer"
                ><div class="module-default__faq-answer">
                  Access to technology seems to be the issue as well as data and privacy challenges
                  between consumer and provider of healthcare.
                </div></v-card-text
              >
            </v-card>
          </v-timeline-item>

          <v-timeline-item v-for="n in 1" :key="n" right color="green" fill-dot large>
            <template v-slot:icon>
              <v-avatar>
                <img
                  src="https://static.wixstatic.com/media/b0cb5d_7a6494c66dfb4bb6b9e2d6c71c214eca~mv2.jpg/v1/fill/w_432,h_434,al_c,lg_1,q_80/Brit_Pro.webp"
                />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span class="module-default__faq-question"
                >Why are you requesting projects from students?</span
              >
            </template>
            <v-card color="green" dark outlined class="elevation-0">
              <v-card-text class="module-default__faq-answer"
                ><div class="module-default__faq-answer">
                  We have a grant that asks for civic engagement with students to co-generate new
                  ideas for our proposed solutions. We also are interested in building a pipeline of
                  opportunities to work in our local industry consortium we lead.
                </div></v-card-text
              >
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </template>
    </div>
    <br />
    <br />
    <template>
      <v-card outlined elevation="0" max-width="85%" class="mx-auto">
        <v-toolbar elevation="0" dark color="blue">
          <v-icon class="mr-4" large>mdi-telegram</v-icon>
          <v-toolbar-title class="module-default__specs-title"
            >Project Specifications</v-toolbar-title
          >
        </v-toolbar>
        <v-subheader>Outcomes</v-subheader>
        <v-list two-line subheader>
          <v-list-item>
            <v-chip-group column>
              <v-chip dark>Build portfolio project</v-chip>
              <v-chip dark>Qualify for internship to execute on project</v-chip></v-chip-group
            >
          </v-list-item>
        </v-list>
        <!-- <v-divider></v-divider> -->
        <v-subheader>Deliverables</v-subheader>
        <v-list two-line subheader>
          <v-list-item>
            <v-chip-group column>
              <v-chip dark>Business Model Canvas</v-chip>
              <v-chip dark>One Sentence Pitch</v-chip>
              <v-chip dark>Elevator Pitch</v-chip>
              <v-chip dark>Design & Prototype Log</v-chip>
              <v-chip dark>Prototype Demo</v-chip>
              <v-chip dark>Presentation Deck</v-chip>
            </v-chip-group>
          </v-list-item>
        </v-list>
        <!-- <v-divider></v-divider> -->
        <v-subheader>Requirements</v-subheader>
        <v-list two-line subheader>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" color="primary"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Use human-centered design</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" color="primary"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Solve childhood obesity</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" color="primary"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Use technology</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list>
        <!-- <v-divider></v-divider> -->
        <v-subheader>Resources</v-subheader>
        <v-list two-line subheader>
          <v-list-item>
            <v-btn-group>
              <v-btn class="ma-1" depressed small outlined>Get Started Folder</v-btn>
              <v-btn class="ma-1" depressed small outlined>Website</v-btn>
              <v-btn class="ma-1" depressed small outlined>Instagram</v-btn>
              <v-btn class="ma-1" depressed small outlined>LinkedIn</v-btn>
              <v-btn class="ma-1" depressed small outlined>Facebook</v-btn>
              <v-btn class="ma-1" depressed small outlined>YouTube</v-btn>
              <!-- <v-btn class="ma-1" depressed small outlined>Articles</v-btn>
                <v-btn class="ma-1" depressed small outlined>Product Specifications</v-btn>
                <v-btn class="ma-1" depressed small outlined>Reports</v-btn> -->
            </v-btn-group>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-subheader>About</v-subheader>
        <v-card-text
          >Kaiser Permanente (/ˈkaɪzər pɜːrməˈnɛnteɪ/; KP) is an American integrated managed care
          consortium, based in Oakland, California, United States, founded in 1945 by industrialist
          Henry J. Kaiser and physician Sidney Garfield. Kaiser Permanente is made up of three
          distinct but interdependent groups of entities: the Kaiser Foundation Health Plan, Inc.
          (KFHP) and its regional operating subsidiaries; Kaiser Foundation Hospitals; and the
          regional Permanente Medical Groups. As of 2017, Kaiser Permanente operates in eight states
          (Hawaii, Washington, Oregon, California, Colorado, Maryland, Virginia, Georgia) and the
          District of Columbia, and is the largest managed care organization in the United
          States.</v-card-text
        >
      </v-card>
    </template>
    <br />
    <br />
    <!-- <div class="module-default__about">
        <v-btn dense color="blue" large rounded outlined depressed>About</v-btn>
        <br />
        <br />
        Kaiser Permanente (/ˈkaɪzər pɜːrməˈnɛnteɪ/; KP) is an American integrated managed care
        consortium, based in Oakland, California, United States, founded in 1945 by industrialist
        Henry J. Kaiser and physician Sidney Garfield. Kaiser Permanente is made up of three
        distinct but interdependent groups of entities: the Kaiser Foundation Health Plan, Inc.
        (KFHP) and its regional operating subsidiaries; Kaiser Foundation Hospitals; and the
        regional Permanente Medical Groups. As of 2017, Kaiser Permanente operates in eight states
        (Hawaii, Washington, Oregon, California, Colorado, Maryland, Virginia, Georgia) and the
        District of Columbia, and is the largest managed care organization in the United States.
      </div>
      <br />
      <br /> -->
    <!-- <v-divider></v-divider> -->
    <br />
    <br />
    <div class="module-default__scope">
      <v-btn x-large depressed outlined>Finish Activity</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import Instruct from './ModuleInstruct.vue';

export default {
  name: 'ModuleDefault',
  components: {
    Instruct
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

<style lang="scss">
.module-default {
  &__collapse-divider {
    margin-top: 15px;
    margin-bottom: 75px;
    margin-right: none;
    margin-left: none;
    padding-right: none;
    padding-left: none;
    width: 100%;
  }

  &__collapse-title {
    color: #dedede;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1px;
    font-size: 13px;
    //  text-uppercase font-weight-bold text-subtitle-2 text-center
  }

  &__container {
    // width: 100%;
    // padding: none;
    // margin: none;
    margin-top: 0px;
    padding: 0px;
  }
  &__employer-title {
    font-size: 25px;
    font-weight: 700;
  }

  &__scope {
    font-size: 22px;
    font-weight: 800;
    text-align: center;
    max-width: 95%;
    margin: auto;
  }
  &__youtube {
    height: 400px;
    width: 95%;
    border-radius: 25px;
    // margin: 0px;
    background-color: #dedede;

    // text-align: center;
    // justify-content: center;
    // align-items: center;
    // padding-top: auto;
    // padding-bottom: auto;
  }
  &__about {
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    max-width: 90%;
    margin: auto;
    line-height: 30px;
  }

  &__faq {
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    max-width: 90%;
    margin: auto;
    line-height: 30px;
  }

  &__faq-chat {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 5%;
  }
  &__faq-chat-line {
    margin: 5px;
  }

  &__faq-avatar {
    margin: 5px;
  }

  &__faq-question {
    // text-align: left;
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 800;
    color: #404142;
  }

  &__faq-answer {
    text-align: left;
    font-family: 'Raleway';
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0px;
    color: white;
    font-style: italic;
  }

  &__faq-answer-dark {
    text-align: left;
    font-family: 'Raleway';
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #404142;
    font-style: italic;
  }

  &__faq-answer-dark-highlight {
    text-align: left;
    font-family: 'Raleway';
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0px;
    color: #404142;
  }

  &__specs-title {
    font-weight: 800;
  }
}
</style>
