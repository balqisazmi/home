<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">Welcome to Railway XYZ</h1>
      <p class="hero-description">
        We strive to provide the best service possible, and your feedback helps us achieve that goal. Whether you have a suggestion, a concern, or a complaint, please feel free to let us know. We are here to listen and improve.
      </p>
      <input type="text" placeholder="Search train..." class="form-control" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>


<style scoped>
.hero {
  background: url('/images/RAILWAY HOME (2).png') no-repeat center center;
  background-size: cover;
  height: 50vh; /* Adjust height to fit the image */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero .container {
  max-width: 800px;
  z-index: 1;
  padding: 20px;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
}

.hero-description {
  font-size: 1.2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px; /* Adds spacing below the description */
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.search-bar {
  margin-top: 10px;
}

.form-control {
  font-size: 1.1rem;
  padding: 12px 15px;
  width: 100%; /* Adjust to full width within the container */
  max-width: 500px; /* Limits input width for better aesthetics */
  margin: 0 auto; /* Centers the input bar horizontally */
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  outline: none;
}
</style>
