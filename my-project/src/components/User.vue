<template>
<div>
    <h3 :class="{red: prenom.length < 3}">{{  prenom }} <small>({{  prenom.length }}) charactère<span v-if="prenom.length > 1">s</span></small></h3>
    <p :class="{red: nb >= 10}">{{  nb }} click</p>
    <button @click="augmenter()">Cliquez Wilders!</button>
</div>
</template>

<script>
export default {
  name: 'user',
  props: ['prenom'],
  data () {
    return {
      nb: 0
    }
  },
  methods: {
    augmenter(){
      this.nb++;
    }
  }
}
</script>

<style scoped>
  h3{
      color: pink;
  }

  .red{
    color: red;
  }
</style>
