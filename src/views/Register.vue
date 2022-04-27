<template>
<div class="container">
    <a-row justify="center" align="middle">
        <a-col>
            <comment-outlined @click="goHome" :style="{fontSize: '60px', color: '#08c', marginBottom: '30px'}" />
            <div><a-typography-title><read-outlined /> Register on LaraForum</a-typography-title></div>
          <a-form
            name="normal_login"
            className="login-form"
            >
            <a-form-item
              name="name"
              >
              <a-input
              v-model:value="form.name"
                placeholder="Name"
              />
            </a-form-item>
            <a-form-item
              name="email"
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
            <a-form-item
              name="password_confirmation">
              <a-input
              v-model:value="form.password_confirmation"
                type="password"
                placeholder="Password confirmation"
              />
            </a-form-item>

            <a-form-item>
              <a-button
                @click="onRegister"
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Register
              </a-button>
              Or 
              <a-button
                type="link"
                @click="goToLogin"
                htmlType="submit"
                className="login-form-button">
                Login
              </a-button>
            </a-form-item>
            
          </a-form>
        </a-col>
      </a-row>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import { CommentOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';

export default {
    components: { CommentOutlined },

    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    },

    methods: {
      goToLogin() {
        this.$router.push({
          name: 'login'
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

      async onRegister() {
          let payload  = this.getPayload();
          try {
            await this.register(payload);
            notification['success']({
                    message: 'Congratulations!',
                    description: 'You are registered on LaraForum, please proceed to login',
            });

            this.$router.push({name: 'login'});
          } catch(err) {
              notification['error']({
                    message: 'Error',
                    description: err.response?.data?.message || 'Unknown error'
                });
          } finally {

          }
      },

      ...mapActions({
          register: 'auth/register'
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