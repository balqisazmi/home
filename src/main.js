import { createApp } from 'vue';
import App from './App.vue';

// Import the global CSS file
import './main.css';
// Import PureCSS
import 'purecss/build/pure.css'; 
// Import Font Awesome CSS (use the correct path)
import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App);

// Mount the Vue app
app.mount('#app');
