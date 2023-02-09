import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-mcyseqyi84er6kbl.us.auth0.com",
    clientId: "TxT3ZvlQLt9geB5obqsAM08G8pJP7aHX",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app');

