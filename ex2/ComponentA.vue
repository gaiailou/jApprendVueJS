<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name:"ComponentA",
  data() {
    return {
      title: 'Article A',
      message: 'Message de Article A'
    }
  }
}
</script>

<style>

</style>