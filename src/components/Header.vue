<template>
  <nav class="pure-menu pure-menu-horizontal">
    <!-- Logo Section -->
    <a href="#" class="pure-menu-heading pure-menu-link">Logo</a>

    <!-- Navigation Links -->
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">About Us</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">FAQ</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Feedback</a></li>
    </ul>

    <!-- Search Form -->
    <form class="pure-form">
      <input type="text" placeholder="Search here..." />
    </form>

    <!-- Profile Icon Section (Font Awesome) -->
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
/* Custom Header Styles */
nav {
  background-color: #0073e6;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Navbar remains fixed at the top */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure navbar stays on top of other elements */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
}

.pure-menu-heading {
  color: white;
  font-size: 1.5rem; /* Adjust logo size */
  font-weight: bold;
}

.pure-menu-link {
  color: white;
  text-decoration: none; /* Remove underline from links */
}

.pure-menu-link:hover {
  color: #ffcc00; /* Highlight color on hover */
}

.pure-form input[type="text"] {
  border-radius: 4px;
  padding: 5px;
  margin-left: 20px; /* Space between search input and menu items */
  border: none; /* Remove default border */
}

body {
  margin-top: 60px; /* Adjust body content to ensure it doesn't overlap with navbar */
}

/* Profile Icon Styling */
.profile-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.profile-icon i {
  font-size: 1.8rem; /* Icon size */
  color: white;
}
</style>
