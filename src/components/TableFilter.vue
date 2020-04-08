<template>
  <b-nav pills justified class="filter-menu">
    <b-nav-item :active="category === 'all'" class="filter-menu_item" @click="selectFilter('all')">
      <span>All</span>
      </b-nav-item>
    <b-nav-item :active="category === 'backend'" class="filter-menu_item" @click="selectFilter('backend')">
      <span>Backend</span>
    </b-nav-item>
    <b-nav-item :active="category === 'frontend'" class="filter-menu_item" @click="selectFilter('frontend')">
      <span>Frontend</span>
    </b-nav-item>
    <b-nav-item :active="category === 'web'" class="filter-menu_item" @click="selectFilter('web')">
      <span>Web / Javascript</span>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  props: {
    category: String
  },
  methods: {
    selectFilter(value) {
      this.$emit('selectFilter', value);
    }
  }
}
</script>

