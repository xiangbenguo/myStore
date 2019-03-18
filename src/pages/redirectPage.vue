<template>
    <div class="container"></div>
</template>

<script>
export default {
  name: 'redirect',
  beforeCreate () {
    console.log(this.$route)
    this.$router.push({
      path: '/searchResults',
      query: {keyword: this.$route.query.keyword}
    })
  }
}
</script>
