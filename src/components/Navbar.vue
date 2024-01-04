<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Imgur Clone</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="btn btn-dark" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-dark" to="login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-dark" to="register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>





<script>
export default {
    name: 'Navbar'
}
</script>

<style>
/* Add your custom styles here */
.navbar {
  margin-bottom: 20px;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-nav .nav-item {
  margin-right: 10px;
}

.navbar-nav .btn {
  color: #ffffff;
  transition: background-color 0.3s ease;
}

.navbar-nav .btn:hover {
  background-color: #333333;
}

.navbar-toggler {
  border-color: #ffffff;
}

.navbar-toggler-icon {
  background-color: #ffffff;
}
</style>
