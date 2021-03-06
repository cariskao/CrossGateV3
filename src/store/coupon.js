import axios from 'axios'

export default {
  namespaced: true,
  strict: true,
  state: {
    loadingIcon: false
  },
  actions: {
    addCouponCode (context, coupon) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      context.commit('LOADINGICON', true)
      return new Promise((resolve) => {
        axios.post(api, { data: coupon }).then(response => {
          if (response.data.success) {
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}`, status: 'success' }, { root: true })
            context.commit('LOADINGICON', false)
            context.dispatch('cartModules/getCart', null, { root: true })
            resolve()
          } else {
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}` }, { root: true })
            context.commit('LOADINGICON', false)
          }
        })
      })
    }
  },
  mutations: {
    LOADINGICON (state, payload) {
      state.loadingIcon = payload
    }
  },
  getters: {
    loadingIcon (state) {
      return state.loadingIcon
    }
  }
}
