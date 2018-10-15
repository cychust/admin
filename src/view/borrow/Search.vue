<template>
  <div>
    <div class="search">
      <Input v-model="searchData"
             type="text"
             size="large"
             class="searchInput"
             placeholder="输入你要找的书籍">
      <Button slot="append"
              icon="ios-search"
              @click="search"></Button>
      </Input>
      <Tag v-for="(item,index) in tags"
           :key="index"
           closable
           @on-close="closeTags(index)"><span @click="selectTags(index)">
          {{item}}</span></Tag>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Search',
  data () {
    return {
      searchData: '',
      tags: ['aaa', 'aaaa', 'aaaa']
    }
  },
  methods: {
    closeTags (index) {
      this.tags.splice(index, 1)
    },
    selectTags (index) {
      this.searchData = this.tags[index]
    },
    search () {
      this.$router.push({path: '/bookList', query: {searchData: this.searchData}})
    }
  }
}
</script>
<style scoped>
.search {
  padding-top: 15px;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 460px;
}
.searchInput {
  margin: 5px 0px;
}
</style>
