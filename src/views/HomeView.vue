<template>
  <div class="home">
    <div class="container">
      <a-row justify="space-between">
        <a-col><div><a-typography-title><read-outlined /> Posts</a-typography-title></div></a-col>
        <a-col><a-button @click="goToCreate" type="primary">New Post <file-add-filled/></a-button></a-col>
      </a-row>
      <a-space direction="vertical" :value="'90'">
      <a-input-search
      v-model:value="options.search"
      placeholder="Search a post..."
      enter-button
      @search="onSearch"
    />
      
      <Row :gutter="[80, 30]">
        <Col v-for="(post) in posts.data" :key="post?.id" class="gutter-row">
          <PostCard :post="post"/>
        </Col>
      </Row>
      <a-pagination @change="pageChange" :defaultPageSize="10" v-model:value="options.page" :total="posts.total" show-less-items :showSizeChanger="false" />
      </a-space>
    </div>
    
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import {mapActions, mapGetters} from 'vuex';
import { Row, Col } from 'ant-design-vue';
import { ReadOutlined, FileAddFilled } from '@ant-design/icons-vue';

export default {
  name: 'HomePage',
  components: { PostCard, Row, Col, ReadOutlined, FileAddFilled },
  data() {
    return {
      options: {
        page: 1,
        perPage: 10,
        search: ''
      }
    };
  },
  methods: {
    async pageChange(page) {
      await this.index({...this.options, page});
    },
    
    async onSearch(search) {
      await this.index({...this.options, search});
    },

    goToCreate() {
      this.$router.push({
          name: 'create_post',
      });
    },

    ...mapActions({
      index: 'posts/index'
    })
  },

  computed: {
    ...mapGetters({
      posts: 'posts/getItems'
    })
  },

  async mounted() {
    await this.index(this.options);
  }
}
</script>

<style scoped>
.container {
  padding-top: 20px;
    width: 80%;
    justify-items: space-around;
    margin: auto;
}
</style>