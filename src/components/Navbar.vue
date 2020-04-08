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
