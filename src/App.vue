<template>
  <div id="app">
    <Header />
    <main>
    <Hero />
    <RegisterSection />
    <FeedbackSection />
    <NewsEvents />
  </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import RegisterSection from './components/RegisterSection.vue';
import FeedbackSection from './components/FeedbackSection.vue';
import NewsEvents from './components/NewsEvents.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    RegisterSection,
    FeedbackSection,
    NewsEvents,
    Footer,
  },
};
</script>

<style>
/* Global styles */
body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

main {
  margin-top: 80px; /* Ensure space for the fixed navbar */
}
</style>