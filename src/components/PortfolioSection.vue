<template>
  <div ref="portfolio" class="portfolio_container container">
    <h2>PORTFOLIO</h2>
    <section class="portfolio_wrapper">
      <TableFilter />
      <div class="project_grid-container">
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Initiative Project</p>
                </div>
            </div>
            <img src="../assets/images/Initiative-project.png" alt="Initiative Project">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Rent N' Share</p>
                </div>
            </div>
            <img src="../assets/images/Rent-N-Share.png" alt="Rent-N-Share">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Sharebnb Legacy</p>
                </div>
            </div>
            <img src="../assets/images/sharebnb-legacy.png" alt="ShareBnB Legacy">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Rose Edition</p>
                </div>
            </div>
            <img src="../assets/images/Rose-Edition.png" alt="Rose Edition">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Shutterscope</p>
                </div>
            </div>
            <img src="../assets/images/shutterscope-preview.png" alt="Shutter Scope">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Inspo Diary</p>
                </div>
            </div>
            <img src="../assets/images/inspodiary.png" alt="Inspo Diariest">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Dr. Zheng Lab</p>
                </div>
            </div>
            <img src="../assets/images/labdesign.png" alt="Dr. Zheng Labt">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">Flight Path: Project X</p>
                </div>
            </div>
            <img src="../assets/images/flightpath.png" alt="Flight Path">
          </a>
        </div>
        <div class="card portfolio-item" v-scrollanimation>
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <p class="portfolio-hover-description">3D Gallery Rotation</p>
                </div>
            </div>
            <img src="../assets/images/gallery.png" alt="Gallery Rotation">
          </a>
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
