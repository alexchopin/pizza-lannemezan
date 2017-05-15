export const state = {
  commande: [],
  pizzaDuMois: require('../data/pizza-du-mois'),
  horaires: require('../data/horaires'),
  tailles: require('../data/tailles'),
  pizzas: require('../data/pizzas'),
  plaques: require('../data/plaques'),
  desserts: require('../data/desserts')
}

export const getters = {
  getSize: (state) => (key) => {
    return state.tailles[key]
  },
  getTotal (state) {
    let total = 0
    state.commande.forEach((line) => {
      total += ((line.price + (line.option ? line.option.price : 0)) * line.quantity)
    })
    return total
  }
}

export const mutations = {
  increment (state, i) {
    state.commande[i].quantity++
  },
  decrement (state, i) {
    state.commande[i].quantity--
    if (state.commande[i].quantity < 1) {
      state.commande.splice(i, 1)
    }
  },
  delete (state) {
    state.commande = []
  },
  add (state, obj) {
    let find = false
    state.commande.forEach((item, index) => {
      if (item.name === obj.name && item.size === obj.size && (!item.option === !obj.option || item.option === obj.option)) {
        item.quantity++
        find = true
      }
    })
    if (!find) {
      state.commande.push(obj)
    }
  },
  init (state, list) {
    state.commande = list
  },
  save (state) {
    localStorage.setItem('pizzaLannemezan', JSON.stringify(state.commande))
  }
}

export const actions = {
  addQuantity ({ commit }, i) {
    commit('increment', i)
    commit('save')
  },
  deleteQuantity ({ commit }, i) {
    commit('decrement', i)
    commit('save')
  },
  deleteCommand ({ commit }) {
    commit('delete')
    commit('save')
  },
  addProduct ({ commit }, obj) {
    commit('add', obj)
    commit('save')
  },
  initCommand ({ commit }, list) {
    commit('init', list)
  }
}
