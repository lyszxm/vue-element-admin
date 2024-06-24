<template>
  <div class="content">
    {{ data }}
  </div>
</template>

<script>
import faker from 'faker'
export default {
  name: 'VirtualList',
  components: {
    // VirtualList,
    // Item
  },
  data() {
    this.data = []
    for (let id = 0; id < 10; id++) {
      this.data.push({
        id,
        value: faker.lorem.sentences() // 长文本
      })
    }
    return {}
  }
}
</script>

<style>
.content {
  background: #c1c1c1;
  width: 80%;
  height: 80vh;
  border-radius: 10px;
  margin: 0 auto;
}
</style>
