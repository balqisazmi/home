<template>
  <nav class="pure-menu pure-menu-horizontal">
    <a href="#" class="pure-menu-heading pure-menu-link">Logo</a>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">About Us</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">FAQ</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Feedback</a></li>
    </ul>
    <form class="pure-form">
      <input type="text" placeholder="Search here..." />
    </form>

    <!-- Profile Icon (Font Awesome) -->
    <div class="profile-icon">
      <a href="#" class="pure-menu-link"><i class="fa fa-user-circle"></i></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Custom Navbar Styles */
nav {
  background-color: #0073e6;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Make navbar fixed */
  top: 0; /* Position it at the top of the page */
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it's above other content */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Adds a subtle shadow under navbar */
}

.pure-menu-heading {
  color: white;
  font-size: 1.5rem;
}

.pure-menu-link {
  color: white;
}

.pure-menu-link:hover {
  color: #ffcc00;
}

.pure-form input[type="text"] {
  border-radius: 4px;
  padding: 5px;
  margin-left: 20px; /* Space between search input and menu items */
}

/* Adjust the body content to ensure the navbar does not cover it */
body {
  margin-top: 60px; /* Space for the fixed navbar */
}

/* Profile Icon Styles */
.profile-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.profile-icon i {
  font-size: 1.8rem; /* Adjust size */
  color: white;
}
</style>
