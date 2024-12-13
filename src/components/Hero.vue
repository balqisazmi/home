<template>
    <section class="hero bg-light py-5 text-center animate__animated animate__fadeIn">
      <div class="container">
        <h1 class="display-4 mb-4 hero-title">Welcome to Railway XYZ</h1>
        <p class="lead mb-4 hero-description">
          We strive to provide the best service possible, and your feedback helps us achieve that goal. Whether you have a suggestion, a concern, or a complaint, please feel free to let us know. We are here to listen and improve.
        </p>
        <input
          type="text"
          placeholder="Search train..."
          class="form-control form-control-lg mx-auto"
        />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
  };
  </script>
  
  <style scoped>
  .hero {
    background: url('/images/RAILWAY HOME (2).png') no-repeat center center;
    background-size: cover;
    height: 50vh; /* Adjusted height to 50vh */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-position: center center; /* Ensures the image remains centered */
  }
  
  .hero .container {
    max-width: 800px;
    z-index: 1; /* Ensure content is above background */
    padding-top: 10%; /* Optional: Push content down a bit for better alignment */
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .hero-title {
    font-size: 3rem; /* Reduced font size for better balance */
    font-weight: bold;
    color: white;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); /* Adds shadow to make it pop */
    margin-bottom: 20px;
    animation: popin 1s ease-out; /* Animation to pop the title */
  }
  
  .hero-description {
    font-size: 1.2rem; /* Reduced font size for readability */
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    animation: fadeIn 2s ease-out; /* Animation for description */
  }
  
  input.form-control {
    margin-top: 20px;
    font-size: 1.1rem;
    padding: 15px;
    max-width: 90%; /* Ensures input doesn't exceed 90% of the width */
    width: 100%; /* Makes the input responsive */
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  /* Animation to make title pop */
  @keyframes popin {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  /* Animation for description fade-in */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  