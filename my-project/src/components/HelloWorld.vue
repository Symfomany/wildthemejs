<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links for Wilders !!</h2>

    <input type="text" v-model="saisi" />
    {{ saisi.length }}
    <user :prenom="saisi"></user>
    <user :prenom="saisi"></user>

  </div>
</template>

<script>

import User from '@/components/User';

export default {
  name: 'HelloWorld',
  components: {user: User},
  data () {
    return {
      saisi: 'Julien Boyer',
      msg: 'Hello to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3 {
  font-weight: normal;
  color: orange;
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
