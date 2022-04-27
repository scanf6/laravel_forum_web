<template>
    <a-row justify="center" align="middle">
        <a-col :span="12">
            <comment-outlined @click="goHome" :style="{fontSize: '60px', color: '#08c', marginBottom: '30px'}" />
            <div><a-typography-title><read-outlined /> New Post</a-typography-title></div>
          <a-form
            name="normal_login"
            className="login-form"
            >
            <a-form-item
              name="title"
              >
              <a-input
              v-model:value="form.title"
                placeholder="Title"
              />
            </a-form-item>

            <a-form-item name="body">
              <a-textarea v-model:value="form.body" :rows="4" />
            </a-form-item>

            <a-form-item>
              <a-button
                @click="onSubmit"
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Submit
              </a-button>
            </a-form-item>
            
          </a-form>
        </a-col>
      </a-row>
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
                title: '',
                body: '',
            }
        }
    },

    methods: {
      goHome() {
        this.$router.push({
          name: 'home'
        })
      },

      getPayload() {
          return this.form;
      },

      async onSubmit() {
          let payload  = this.getPayload();
          try {
            await this.create(payload);
            notification['success']({
                    message: 'Congratulations!',
                    description: 'Your post is created!',
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
          create: 'posts/create'
      })
    }
}
</script>


<style scoped>
.container {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 100vh;
}
</style>