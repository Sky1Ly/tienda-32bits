import { createStore } from 'vuex'
import dataTienda from './modules/dataTienda'

export default createStore({
  state: {
    tienda: dataTienda.state.tienda
  },
  getters: {
  },
  mutations: {
    changeStock(state, {codigo, cantidad}){
      const producto = state.tienda.find(item => item.codigo === codigo)

      if (producto) {
        producto.stock = parseInt(producto.stock)+cantidad
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
