<template>
<div class="container">
    <a-row justify="center" align="middle">
        <a-col>
            <comment-outlined @click="goHome" :style="{fontSize: '60px', color: '#08c', marginBottom: '30px'}" />
            <div><a-typography-title><read-outlined /> LaraForum</a-typography-title></div>
          <a-form
            name="normal_login"
            className="login-form"
            >
            <a-form-item
              name="mail"
              >
              <a-input
                v-model:value="form.email"
                placeholder="E-mail"
              />
            </a-form-item>
            
            <a-form-item
              name="password">
              <a-input
                v-model:value="form.password"
                type="password"
                placeholder="Password"
              />
            </a-form-item>

            <a-form-item>
              <a-button
                @click="onLogin"
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Log in
              </a-button>
              Or 
              <a-button
                type="link"
                @click="goToRegister"
                htmlType="submit"
                className="login-form-button">
                Register
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
</div>
</template>

<script>
import { mapActions } from "vuex";
import { CommentOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';

export default {
    components: { CommentOutlined },

    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      goToRegister() {
        this.$router.push({
          name: 'register'
        })
      },

      goHome() {
        this.$router.push({
          name: 'home'
        })
      },

      getPayload() {
          return this.form;
      },

      async onLogin() {
          let payload  = this.getPayload();
          try {
            await this.login(payload);
            notification['success']({
                    message: 'Congratulations!',
                    description: 'You are logged in on LaraForum',
            });

            this.$router.push({name: 'home'});
          } catch(err) {
              notification['error']({
                    message: 'Error',
                    description: err.response?.data?.message || 'Unknown error'
                });
          } finally {

          }
      },

      ...mapActions({
          login: 'auth/login'
      })
    }
}
</script>


<style scoped>
.container {
    text-align: center;
    display: flex;
    justify-content: center;
    height: 100vh;
}
</style>