import { createStore } from 'vuex';

import authModule from './modules/auth/index.js'
import productsModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    auth: authModule,
    prods: productsModule,
    cart: cartModule
  }
});

export default store;