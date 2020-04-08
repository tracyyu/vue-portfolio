<template>
  <div ref="nav-wrapper" class="nav-wrapper">
    <ul id="nav-menu" class="right hide-on-med-and-down">
      <li class="nav-menu_item">
        <span v-on:click="goto('home')">Home</span>
        </li>
      <li class="nav-menu_item">
        <span v-on:click="goto('about')">About</span>
      </li>
      <li class="nav-menu_item">
        <span v-on:click="goto('portfolio')">Portfolio</span>
      </li>
      <li class="nav-menu_item">
        <span v-on:click="goto('design')">Design</span>
      </li>
      <li class="nav-menu_item">
        <span v-on:click="goto('contact')">Contact</span>
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
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#">About Me</b-nav-item>
              <b-nav-item href="#">Portfolio</b-nav-item>
              <b-nav-item href="#">Design Process</b-nav-item>
              <b-nav-item href="#">Contact</b-nav-item>
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
