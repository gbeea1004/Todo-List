<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar, Footer
  },
  data() {
    return {
     
    }
  },
};
</script>
