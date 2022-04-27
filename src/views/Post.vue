<template>
<div class="container">
  <a-row type="flex">
    <a-col :flex="2">
      <div><a-typography-title><read-outlined /> <arrow-left-outlined @click="goBack" :style="{fontSize: '40px'}" /> Post {{postId}}</a-typography-title></div>
      <div><a-typography-title :level="2">{{post?.title}}</a-typography-title></div>
      <div style="margin-bottom: 60px"><a-typography-text code>Posted By: {{post?.user?.name}}</a-typography-text> at {{post?.created_at}}</div>

      <div style="margin-bottom: 60px">{{post?.body}}</div>

      <div><a-typography-title :level="3">Answers ({{answers.total}})</a-typography-title></div>
      <a-pagination @change="pageChange" :defaultPageSize="options.perPage" v-model:page="options.page" :total="answers.total" show-less-items :showSizeChanger="false" />
      <CommentSection :comments="answers" :postId="postId" @createdPost="fetchAnswers" />
    </a-col>
    <!-- <a-col :flex="3">3 / 5</a-col> -->
  </a-row>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CommentSection from '../components/CommentSection.vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';

export default {
  name: "PostDetail",

  data() {
    return {
      options: {
        page: 1,
        perPage: 3,
      }
    }
  },

  components: { CommentSection, ArrowLeftOutlined },

  methods: {
    async pageChange(page) {
      await this.postAnswers({postId: this.postId, ...this.options, page});
    },

    goBack() {
      this.$router.push({ name: 'home'});
    },

    async fetchAnswers() {
      await this.postAnswers({postId: this.postId, ...this.options});
    },

    ...mapActions({
      show: 'posts/show',
      postAnswers: 'answers/getPostAnswers'
    })
  },

  computed: {
    postId() {
      return this.$route.params.id
    },

    ...mapGetters({
      post: 'posts/getCurrentItem',
      answers: 'answers/getItems',
    })
  },

  async mounted() {
    await this.fetchAnswers();
    await this.show({id: this.postId});
  }
}
</script>

<style scoped>
.container {
    width: 80%;
    justify-items: space-around;
    margin: auto;
}
</style>