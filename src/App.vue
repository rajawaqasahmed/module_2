<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
(function (){
  localStorage.setItem('username','waqas');
  localStorage.setItem('password','ajwa');
})();
export default {
  name: 'app'
}
</script>

