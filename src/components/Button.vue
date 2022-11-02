<template>
  <button @click="onClick()" class="btn" :style="{background: color}">{{text}}</button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  props: {text: String, color: String},
  methods: {
    onClick() {
      this.$emit('btn-click')
    }
  }
}
</script>

<style scoped>
.btn {
  display: block;
  padding: 10px;
  background-color: rgb(224, 89, 179);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid transparent
}
</style>
  