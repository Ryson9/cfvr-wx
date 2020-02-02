<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld class="" msg="Welcome to Your Vue.js App" />
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import userApi from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  async mounted() {
    // try {
    //   await userApi.login()
    // } catch (error) {
    //   await userApi.getProFile()
    // }
  },
  methods: {
  },
}
</script>
