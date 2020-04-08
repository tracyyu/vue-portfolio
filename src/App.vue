<template>
  <div id="app">
    <Navbar @goto="goto" />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
    methods: {
    goto(refName) {
      console.log(refName);
      // var element = this.$els[refName];
      var top = 0;
      if (refName === 'home') {
        top = 0;
      } else if (refName === 'about') {
        top = 750;
      } else if (refName === 'portfolio') {
        top = 1750;
      } else if (refName === 'design') {
        top = 2625;
      } else if (refName === 'contact') {
        top = 3500;
      }
      
      window.scrollTo(0, top);
    }
  }
};
</script>

