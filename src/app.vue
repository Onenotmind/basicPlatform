<template>
  <div id="mainContent">
    <Home />
  </div>
</template>

<style>

</style>
<script>
import { mapActions, mapState } from 'vuex'
import Home from './components/home/home.vue'
export default {
  name: 'MainContent',
  components: {
    Home
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
    }),
  },
  watch: {
  },
  mounted () {
  },
  destroyed () {

  },
  methods: {

    ...mapActions([
    ]),
  }
}
</script>
