<template>
  <div class="hello">
    <h1 class="mt-3">{{ msg }}</h1>
    <h3>Lista de juegos</h3>
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Name</th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <button type="button" class="btn btn-success me-3">+</button>
            <button type="button" class="btn btn-danger">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
