<template>
  <b-modal centered ref="my-modal" id="modal-1" size="lg">
    <template v-slot:modal-header="{ close }">
      <!-- Emulate built in modal header close button action -->
      <b-button size="sm" variant="outline-danger" @click="close()">
       X
      </b-button>
    </template>
    <!-- Project Details Go Here -->
    <div class="d-block text-center">
      <h3 class="modal-header text-center" >{{ project.title }}</h3>
      <p class="project-summary text-center">{{ project.summary }}</p>
      <CarouselProjectImages :images="project.images" />
      <!-- <b-img class="project-preview-img img-responsive img-centered" :src="project.image" fluid center :alt="project.title"></b-img> -->
      <p class="project-detailed-summary text-center p-4">{{ project.detailedDescription }}</p>
      <b-button class="project-link" variant="primary" :href="project.githubLink">
        GITHUB
      </b-button>
    </div>
    <template v-slot:modal-footer="{ ok }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button class="close-btn" block variant="secondary" @click="ok()">
        CLOSE PROJECT
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import CarouselProjectImages from './CarouselProjectImages';

export default {
  props: {
    project: Object
  },
  components: {
    CarouselProjectImages
  }
}
</script>
