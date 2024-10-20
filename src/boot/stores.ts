import { boot } from 'quasar/wrappers';
import { createStore } from 'vuex';

export default boot(({ app }) => {
  const store = createStore({
    state() {
      return {
        provider: 0,
      };
    },
    mutations: {
      setProvider(state, new_value) {
        state.provider = new_value;
      },
    },
    actions: {
      updateProvider({ commit }, new_value) {
        commit('setProvider', new_value);
      },
    },
  });

  console.log(store.state.provider);

  app.use(store);
});
