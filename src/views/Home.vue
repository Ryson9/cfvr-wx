<template>
  <div class="home">
    <van-row>
      <van-cell>
        <van-button @touchstart.stop="show = true">弹出默认键盘</van-button>
      </van-cell>
    </van-row>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld class msg="Welcome to Your Vue.js App" />
    <van-number-keyboard safe-area-inset-bottom
      :show="show"
      extra-key="."
      close-button-text="完成"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    />
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
  data() {
    return {
      show: false,
    }
  },
  async mounted() {
    // try {
    //   await userApi.login()
    // } catch (error) {
    //   await userApi.getProFile()
    // }
  },
  methods: {
    onInput(value) {
      this.$toast(value)
    },
    onDelete() {
      this.$toast('delete')
    },
  },
}
</script>
