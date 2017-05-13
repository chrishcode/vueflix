<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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

export default {
  name: 'hello',
  data () {
    return {
      msg: 'ASMRflix'
    }
  },
  components: {
    Netflix
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
