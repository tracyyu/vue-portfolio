<template>
  <div ref="portfolio" class="portfolio_container container">
    <h2>PORTFOLIO</h2>
    <section class="portfolio_wrapper">
      <TableFilter @selectFilter="selectFilter" :category="selectedCategory" />
      <div class="project_grid-container">
        <!-- <transition name="fade"> -->
          <div class="card portfolio-item" v-for="(project, index) in filteredProjects" :key="project.title" @click="showModal(index)" v-scrollanimation>
            <a class="portfolio-link" data-toggle="modal">
              <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                      <p class="portfolio-hover-description">{{ project.title }}</p>
                  </div>
              </div>
              <img :src="project.images[0]" :alt="project.title">
            </a>
          </div>
        <!-- </transition> -->
      </div>
    </section>
    <template v-if="selectedProject !== null">
      <PortfolioModal v-bind:project="selectedProject" />
    </template>
  </div>
</template>

<script>
import TableFilter from './TableFilter';
import PortfolioModal from './PortfolioModal';

export default {
  props: {
    projects: Array
  },
  components: {
    TableFilter,
    PortfolioModal
  },
  data() {
    return {
      filteredProjects: this.projects,
      selectedProject: null,
      selectedCategory: 'all',
    }
  },
  methods: {
    showModal(id) {
      this.selectedProject = this.projects[id];
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow');
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow');
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn');
    },
    selectFilter(value) {
      this.selectedCategory = value;
      if (value === 'all') {
        this.filteredProjects = this.projects;
      } else {
      this.filteredProjects = this.projects.filter( project => project.category === value );
      }
    }
  }
}
</script>
