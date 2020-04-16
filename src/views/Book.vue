<template>
  <div class id>
    <table>
      <tr>
        <th>编号</th>
        <th>图书名称</th>
        <th>作者</th>
        <th>操作</th>
      </tr>
      <tr v-for="(book, index) in books" :key="index">
        <td>{{book.id}}</td>
        <td>{{book.name}}</td>
        <td>{{book.author}}</td>
      </tr>
    </table>
    {{msg}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Book",
  data() {
    return {
      msg: "Hello!",
      books: [
        {
          id: 1,
          name: "测试书籍1",
          author: "Hello"
        },
        {
          id: 2,
          name: "测试书籍2",
          author: "Book"
        }
      ]
    };
  },
  created() {
    axios.get("http://127.0.0.1:8081/book/findAll").then(res => {
      this.books = res.data;
    });
  }
};
</script>

<style scoped>
</style>