<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="400"
    img-height="450"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide 
      v-for="(image, index) in images" 
      :key="index" 
      :img-src="image">
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  props: {
    images: Array
  }
}
</script>

