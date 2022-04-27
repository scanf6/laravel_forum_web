<template>
  <a-list
    v-if="comments.data?.length"
    :data-source="comments.data"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.user?.name"
          avatar="https://joeschmoe.io/api/v1/random"
          :content="item.body"
          :datetime="item.created_at"
        />
      </a-list-item>
    </template>
  </a-list>
  <a-comment>
    <template #avatar>
      <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea v-model:value="value" :rows="4" />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
          Add Comment
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template>

<script>
import { mapActions } from 'vuex';
import { notification, Button } from 'ant-design-vue';

export default {
    data() {
        return {
            submitting: false,
            value: '',
        }
    },

    props: {
        comments: {
            required: true,
            type: Array,
            default: []
        },

        postId: {
            required: true,
            type: Number
        }
    },

    methods: {
        async handleSubmit(value)  {
            if (!this.value) {
                return;
            }
            this.submitting = true;
            try {
                await this.create({
                    body: this.value,
                    post_id: this.postId
                });
                this.$emit('createdPost');
                this.resetForm();

                notification['success']({
                    message: 'Comment posted!',
                    description: "You've just posted a comment!",
                });
            } catch(err) {
                notification['error']({
                    message: 'Error',
                    description: err.response?.data?.message || 'Unknown error',
                    btn: () => <Button type="primary" size="small" onClick={() => {
                        // Redirect to login page
                        this.$router.push({
                            name: 'login',
                        });
                    }}>Login</Button>
                });
            } finally {
                this.submitting = false;
            }
        },

        resetForm() {
          this.value = '';
        },

        ...mapActions({
            create: 'answers/create'
        })
    },
}
</script>