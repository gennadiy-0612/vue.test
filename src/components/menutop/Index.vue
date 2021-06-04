<template>
  <!-- Simulate a smartphone / tablet -->
  <div class="mobile-container" id="#BurgerMenu">

    <!-- Top Navigation Menu -->
    <div class="topnav">
      <a href="#home" class="active">Logo</a>
      <div id="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <a href="#myLinks" class="icon">
        <i class="fa fa-bars"></i>
      </a>
    </div>

    <div id="topMenuContent" class="topMenuContent">
      <a class="closeTopMenuContent" href="#BurgerMenu">
        <X/>
      </a>
      <h3>Vertical Mobile Navbar</h3>
      <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
      <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
    </div>

    <!-- End smartphone / tablet look -->
  </div>
</template>

<style>
.topMenuContent {
  display: none;
}

.topMenuContent:target {
  display: block;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.mobile-container {
  max-width: 480px;
  margin: auto;
  background-color: #555;
  height: 500px;
  color: white;
  border-radius: 10px;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}

.topnav #myLinks {
  display: none;
}

.topnav #myLinks:target {
  display: block;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #04AA6D;
  color: white;
}
</style>
<script>
import X from '../popupbluda/X.vue'

export default {
  name: 'App',
  components: {
    X
  }
}
</script>