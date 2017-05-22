<template>
  <div class="hello">
    <Hero></Hero>
    <Netflix></Netflix>
    <Netflix></Netflix>
    <Netflix></Netflix>
    <Netflix></Netflix>
    <Netflix></Netflix>
    <Netflix></Netflix>
    <Netflix></Netflix>
    <Netflix></Netflix>
    <Netflix></Netflix>
  </div>
</template>

<script>
import Netflix from './Netflix'
import Hero from './Hero'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'ASMRflix'
    }
  },
  components: {
    Netflix,
    Hero
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
