<template>
  <div class="skills-infograph_wrapper">
    <div class="circle frontend_wrapper" 
      @mouseover="selectSkill('frontend')"
      @mouseleave="selectSkill('')"
    >
      <span>FRONTEND</span>
    </div>
    <div class="circle design_wrapper"
      @mouseover="selectSkill('design')"
      @mouseleave="selectSkill('')"
    >
      <span>DESIGN</span>
    </div>
    <div class="circle me_wrapper"
      @mouseover="selectSkill('me')"
      @mouseleave="selectSkill('')"
    >
      <span>ME</span>
    </div>
    <div class="circle backend_wrapper"
      @mouseover="selectSkill('backend')"
      @mouseleave="selectSkill('')"
    >
      <span>BACKEND</span>
    </div>
    <div class="circle tools_wrapper"
      @mouseover="selectSkill('tools')"
      @mouseleave="selectSkill('')"
    >
      <span>TOOLS</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectSkill(value) {
      this.$emit('selectSkill', value);
    }
  }
}
</script>

