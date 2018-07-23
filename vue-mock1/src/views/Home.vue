<template>
  <div v-loading="loading">

    <el-row class="header">
      <img src="../assets/logo.png">
      <h1>{{ $t('app.name') }}</h1>
    </el-row>

    <el-form :inline="true" :model="formData">
      <el-form-item label="Name">
        <el-input v-model="formData.name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="formData.address" placeholder="Address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchEvent">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      border
      :data="list"
      class="table-demo">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageVO.currentPage"
      :page-size="pageVO.pageSize"
      layout="prev, pager, next, jumper"
      :total="pageVO.totalResult">
    </el-pagination>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      formData: {
        name: null,
        address: null
      },
      pageVO: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0
      },
      list: []
    }
  },
  methods: {
    init () {
      this.findList()
    },
    searchEvent () {
      this.findList()
    },
    findList () {
      this.loading = true
      // 使用 fetch API
      this.$ajax.fetchGet(`api/user/page/list/${this.pageVO.pageSize}/${this.pageVO.currentPage}`).then(response => {
        this.loading = false
        if (response.ok) {
          response.json().then(data => {
            this.list = data.result
            this.pageVO.totalResult = data.page.totalResult
          })
        }
      })
      // 直接响应结果对象
      this.$ajax.doGet(`api/user/page/list/${this.pageVO.pageSize}/${this.pageVO.currentPage}`).then(response => {
        var data = response.data
        this.loading = false
        this.list = data.result
        this.pageVO.totalResult = data.page.totalResult
      }).catch(e => {
        this.loading = false
      })
      // 直接响应结果
      this.$ajax.getJSON(`api/user/page/list/${this.pageVO.pageSize}/${this.pageVO.currentPage}`).then(data => {
        this.loading = false
        this.list = data.result
        this.pageVO.totalResult = data.page.totalResult
      }).catch(e => {
        this.loading = false
      })
    },
    handleSizeChange (pageSize) {
      this.pageVO.pageSize = pageSize
      this.searchEvent()
    },
    handleCurrentChange (currentPage) {
      this.pageVO.currentPage = currentPage
      this.searchEvent()
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}
.table-demo, .el-form {
  width: 50%;
  margin: 0 auto;
}
</style>
