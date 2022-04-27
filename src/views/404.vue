<template>
<div class="container">
    <a-row justify="center" align="middle">
        <a-col>
            <comment-outlined :style="{fontSize: '60px', color: '#08c', marginBottom: '30px'}" />
            <div><a-typography-title><read-outlined /> NOT FOUND</a-typography-title></div>
          <a-button
                @click="redirectToPosts"
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Go to Posts
              </a-button>
        </a-col>
      </a-row>
</div>
</template>

<script>
import { CommentOutlined } from '@ant-design/icons-vue';

export default {
    components: { CommentOutlined },

    methods: {
        redirectToPosts() {
            this.$router.push({
                name: 'home',
            });
        }
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