<template>
  <img alt="Vue logo" src="https://i.pinimg.com/736x/98/58/69/98586961e330d6858bf03bebf5296c36.jpg">
  <InventarioTienda msg="Tienda 32 Bits" />
</template>

<script>
import InventarioTienda from './components/InventarioTienda.vue'

export default {
  name: 'App',
  components: {
    InventarioTienda
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
