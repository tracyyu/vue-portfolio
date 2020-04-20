<template>
  <div id="about-me" class="about-me_container container">
    <section class="about-me-description_container">
      <div class="about-me_description">
        <h3 v-scrollanimation >Where do I begin...</h3>
        <div class="description-body" v-scrollanimation>
          <p>
            I’ve cultivated a passion for problem solving and for building large scale applications while working in teams to help client’s ideas come to fruition. 
            I thrive well in the fast-paced environment of the tech industry where I’ve built businesses and products ranging from ecommerce to aerospace, while utilizing modern frameworks and languages. 
            Having designed applications from the ground up using a combination of React, Angular with MongoDB, or Python with Django, I’ve gained an integral ability to see the entire pipeline as a whole and not just separate components. 
            Thus, having an affinity for design and data optimization, I am consistently leveraging my skills in system design, system architecture, and user experience to develop real-world applications that help the world stay connected.
          </p>
          <p>
            Recently, I have been putting more focus on understanding UX and UI concepts and theories to create user-friendly and engaging prototypes best suited for different needs.
            My research has span over different industries from game design, e-commerce product pages, and internal organizational dashboard for device companies, and given me a broader perspective on tackling design approaches for clients.
            Nothing is more satisfying than bringing 2D designs to life as web applications for users to engage and interact with.
          </p>
        </div>
      </div>
      <div class="about-me_image-container" >
        <div class="top-header_wrapper">
          <h2 
            class="top-header"
            v-scrollanimation
          >
            ABOUT
          </h2>
        </div>
        <div class="about-me_image">
          <img 
            class="profile-image" 
            src="../assets/images/portrait-portfolio2.jpg" 
            alt="profile photo"
            v-scrollanimation
          >
        </div>
        <div class="bottom-header_wrapper">
          <h2 
            class="bottom-header"
            v-scrollanimation
          >
            ME
          </h2>
        </div>
      </div>
    </section>
    <section class="skills_container">
      <h3>Skills</h3>
      <div class="skills-infograph-container">
        <div class="frontend skills_description-container">
          <ul :class="( selectedSkill === 'frontend' || selectedSkill === 'me' ) ? 'emphasize' : ''">
            <li>Javascript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>Redux</li>
            <li>Semantic UI</li>
            <li>Bootstrap</li>
            <li>D3</li>
          </ul>
        </div>
        <div class="design skills_description-container">
          <ul :class="( selectedSkill === 'design' || selectedSkill === 'me' ) ? 'emphasize' : ''">
            <li>Sketch</li>
            <li>Lightroom</li>
            <li>InVision</li>
            <li>Wireframes</li>
            <li>UI Prototyping</li>
          </ul>
        </div>
        <div class="skills-infograph_image-container">
          <SkillsInfoGraph @selectSkill="selectSkill" />
        </div>
        <div class="backend skills_description-container">
          <ul :class="( selectedSkill === 'backend' || selectedSkill === 'me' ) ? 'emphasize' : ''">
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Python</li>
            <li>Restful API</li>
            <li>Sequelize</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div class="tools skills_description-container">
          <ul :class="( selectedSkill === 'tools' || selectedSkill === 'me' ) ? 'emphasize' : ''">
            <li>Jest</li>
            <li>Mocha</li>
            <li>Enzyme</li>
            <li>AWS</li>
            <li>Git</li>
            <li>Webpack</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SkillsInfoGraph from './SkillsInfoGraph';

export default {
  data() {
    return {
      selectedSkill: null
    }
  },
  components: {
    SkillsInfoGraph
  },
  methods: {
    selectSkill(value) {
      this.selectedSkill = value;
    }
  }
}
</script>

