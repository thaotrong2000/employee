<template>
  <div id="app">
    <TheNavbar/>
    <TheHeader/>
    <TheContent/>

  </div>
</template>

<script>

import TheNavbar from './components/layout/TheNavbar'
import TheHeader from './components/layout/TheHeader'
import TheContent from './components/layout/TheContent'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader, 
    TheContent
  }
}
</script>

<style>
*{
    box-sizing: border-box;
}

body {
    margin: 0px;
    font-size: 13px;            
    font-family: GoogleSans-Regular;
    box-sizing: border-box;
}

@font-face {
    font-family: 'GoogleSans-Medium';
    src: url('assets/font/GoogleSans-Medium.otf') format('opentype');
}
@font-face {
    font-family: 'GoogleSans-Regular';
    src: url('assets/font/GoogleSans-Regular.otf') format('opentype');
}
</style>
