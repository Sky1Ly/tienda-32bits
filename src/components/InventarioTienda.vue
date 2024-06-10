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
          <th scope="col">Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, i) in tienda" :key="i">
          <th scope="row">{{producto.codigo}}</th>
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.stock }}</td>
          <td>{{ producto.precio }}</td>
          <td>{{ producto.color }}</td>
          <td>
            <button @click="incrementarStock(producto)" type="button" class="btn btn-success me-3">+</button>
            <button @click="decrementarStock(producto)" type="button" class="btn btn-danger">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'InventarioTienda',
  computed: {
    ...mapState(['tienda'])
  },
  methods: {
    ...mapMutations(["changeStock"]),

    incrementarStock(producto){
      this.changeStock({
        codigo: producto.codigo, 
        cantidad: 1
      })
    },
    decrementarStock(producto){
      this.changeStock({
        codigo: producto.codigo,
        cantidad: -1
      })
    }
  },
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
