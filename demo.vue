<template>
  <h1 class="is-size-1">Hello {{name}}</h1>
</template>

<script>
export default {
  props: ['name'],
  data(){
    return {
      message: "hello component"
    }
  } 
}
</script>

<style>

</style>