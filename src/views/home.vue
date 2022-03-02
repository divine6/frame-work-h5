<template lang="pug">
  .home
    van-button.menu-item(type="primary" @click="routerTo(menu)" v-for="menu in menuList" :key="menu.name") {{menu.meta.title}}
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      menuList: routes
    }
  },
  computed: {
    userinfo () {
      return this.$store.state.userinfo
    }
  },
  mounted () {
    // this.$request('login', {
    //   username: 'test',
    //   password: 'Test111&'
    // }).then(res => {
    //   localStorage.setItem('token', res.data.token)
    //   console.log(res)
    // })
  },
  methods: {
    routerTo (menu) {
      this.$router.push(menu)
    },
    logout () {
      const token = localStorage.getItem('token')
      this.$request('logout', { token }).then(res => {
        console.log(res)
      })
    }
  }

}
</script>
<style lang="less" scoped>
.home{
  .menu-item {
    margin-right: 10px;
  }
}
</style>
