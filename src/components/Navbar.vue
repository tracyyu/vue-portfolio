<template>
  <nav>
    <div class="nav-wrapper">
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
  </nav>
</template>

<script>
export default {
  methods: {
    goto(value) {
      this.$emit('goto', value);
    }
  }
}
</script>
