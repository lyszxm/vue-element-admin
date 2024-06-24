<script>
/* 这个是个/redirect路由的临时中转站所对应的component,这里的操作会组装新的路由并重新跳转哦 */
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
