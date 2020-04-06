<template>
  <div ref="portfolio" class="portfolio_container">
    <h2>PORTFOLIO</h2>
    <section class="portfolio_wrapper">
      <TableFilter />
      <div class="project_grid-container">
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/Initiative-project.png" alt="Initiative Project">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/Rent-N-Share.png" alt="Rent-N-Share">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/sharebnb-legacy.png" alt="ShareBnB Legacy">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/Rose-Edition.png" alt="Rose Edition">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/shutterscope-preview.png" alt="Shutter Scope">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/inspodiary.png" alt="Inspo Diariest">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/labdesign.png" alt="Dr. Zhang Labt">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/flightpath.png" alt="Flight Path">
        </div>
        <div class="card cell" v-scrollanimation>
          <img src="../assets/images/gallery.png" alt="Gallery Rotation">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TableFilter from './TableFilter';

export default {
  components: {
    TableFilter
  }
}
</script>
