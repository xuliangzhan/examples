<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import XEAjax from 'xe-ajax'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.findMessageList()
    this.findMessagePageList(1, 10)
    this.saveMessage({name: 'n1'})
    this.updateMessage({id: 1, name: 'n1'})
    this.deleteMessage(1)
  },
  methods: {
    findMessageList () {
      XEAjax.getJSON('https://xuliangzhan.com/api/test/message/list').then(data => {
        console.log(data)
      })
    },
    findMessagePageList (pageSize, currentPage) {
      XEAjax.getJSON(`https://xuliangzhan.com/api/test/message/list/page/${pageSize}/${currentPage}`).then(data => {
        console.log(data)
      })
    },
    saveMessage (body) {
      XEAjax.postJSON('https://xuliangzhan.com/api/test/message/save', body).then(data => {
        console.log(data.message)
      }).catch(data => {

      })
    },
    updateMessage (body) {
      XEAjax.putJSON('https://xuliangzhan.com/api/test/message/update', body).then(data => {
        console.log(data.message)
      }).catch(data => {

      })
    },
    deleteMessage (id) {
      XEAjax.deleteJSON(`https://xuliangzhan.com/api/test/message/delete/${id}`).then(data => {
        console.log(data.message)
      }).catch(data => {

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
