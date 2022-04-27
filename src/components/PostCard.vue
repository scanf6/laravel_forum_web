<template>
  <a-card @click="handlePostRedirect" hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template #actions>
      <span><eye-filled title="setting"/> Read more</span>
    </template>
    <a-card-meta :title="post.title" :description="post.body?.slice(0, 50) + '...'">
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>
  </a-card>
</template>
<script>
import { EyeFilled } from '@ant-design/icons-vue';
export default {
    name: 'PostCard',
    components: { EyeFilled },
    props: {
        post: {
            required: true,
            type: Object
        }
    },
    methods: {
        handlePostRedirect() {
            this.$router.push({
                name: 'post',
                params: {id: this.post.id},
            });
        }
    }
}
</script>