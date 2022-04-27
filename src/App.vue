<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="authToken" @click="onLogout" to="/">Logout</router-link>
  </nav>
  <router-view/>
  <div class="spacing"></div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { notification } from 'ant-design-vue';

export default {
  methods: {
    async onLogout() {
      try {
        this.logout().then(() => {
            this.$router.push('/login')
        })
        notification['success']({
                    message: 'Logout!',
                    description: 'Successfully logged out',
            });
      } catch(err) {
        notification['error']({
                    message: 'Error',
                    description: err.response?.data?.message || 'Unknown error'
                });
      } finally {

      }
    },

    ...mapActions({
      logout: 'auth/logout'
    })
  },

  computed: {
    ...mapGetters({
      authToken: 'auth/getToken'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.spacing {
  padding: 30px;
}
</style>
