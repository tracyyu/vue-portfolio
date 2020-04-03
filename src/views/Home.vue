<template>
  <div class="home-view-container">
    <HomeSection />
    <AboutMeSection />
    <PortfolioSection />
    <DesignProcessSection />
    <ContactSection />
  </div>
</template>

<script>
import HomeSection from '../components/HomeSection';
import AboutMeSection from '../components/AboutMeSection';
import PortfolioSection from '../components/PortfolioSection';
import DesignProcessSection from '../components/DesignProcessSection';
import ContactSection from '../components/ContactSection';

export default {
  name: 'Home',
  components: {
    HomeSection,
    AboutMeSection,
    PortfolioSection,
    DesignProcessSection,
    ContactSection
  },
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {},
  methods: {}
}
</script>
