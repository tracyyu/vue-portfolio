<template>
  <div ref="nav-wrapper" class="nav-wrapper">
    <ul id="nav-menu" class="right hide-on-med-and-down">
      <li class="nav-menu_item">
        <a href="#" v-scroll-to="'#home'">Home</a>
      </li>
      <li class="nav-menu_item">
        <a href="#" v-scroll-to="'#about-me'">About</a>
      </li>
      <li class="nav-menu_item">
        <a href="#" v-scroll-to="'#portfolio'">Portfolio</a>
      </li>
      <li class="nav-menu_item">
        <a href="#" v-scroll-to="'#design'">Design</a>
      </li>
      <li class="nav-menu_item">
        <a href="#" v-scroll-to="'#contact'">Contact</a>
      </li>
    </ul>
    <template>
      <div class="nav-collapse-wrapper">
        <b-navbar toggleable type="dark" variant="dark">
          <b-navbar-brand href="#">Navigation</b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template v-slot:default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#" v-scroll-to="'#home'">Home</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#about-me'">About Me</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#portfolio'">Portfolio</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#design'">Design Process</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#contact'">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </template>
  </div>

</template>

<script>
export default {
  mounted: function(){
    var vm = this;
    window.addEventListener('scroll', function(){
      var scrollPos = window.scrollY;
      // var winHeight = window.innerHeight
      // var docHeight = document.documentElement.scrollHeight // instead document.body.clientHeight
      // var perc = 100 * scrollPos / (docHeight - winHeight)
      if (scrollPos > 36) {
        vm.$refs['nav-wrapper'].style.position = 'fixed';
        vm.$refs['nav-wrapper'].style['border-bottom'] = '2px solid #f3f3f3';

      } else {
        vm.$refs['nav-wrapper'].style.position = 'absolute';
        vm.$refs['nav-wrapper'].style['border-bottom'] = 'none';
      }
    })

  },
  methods: {
    goto(value) {
      this.$emit('goto', value);
    }
  }
}
</script>
