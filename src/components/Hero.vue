<template>
  <div class="hero-wrapper">
    <div class="header">
      <h3 class="logo">vlogflix</h3>
    </div>
    
    <carousel :perPage="1" :navigationEnabled="false" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="3000" :autoplayLoop="true">
      <slide class="slide">
        <div class="slide-info">
          <div class="channel-info">
            <img src="https://yt3.ggpht.com/-A-0LnXtDFUY/AAAAAAAAAAI/AAAAAAAAAAA/u0929ZobFc8/s100-c-k-no-mo-rj-c0xffffff/photo.jpg">
            <h1>Gentle Whispering ASMR</h1>
          </div>
        </div>
        <img class="background" src="https://i.ytimg.com/vi/iqcfWHZMayw/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=S6ePtiLyiuzACx0A18PRW0O87_E">
      </slide>
      <slide class="slide">
        <div class="slide-info">
          <div class="channel-info">
            <img src="https://yt3.ggpht.com/-mmDfdeEZgA8/AAAAAAAAAAI/AAAAAAAAAAA/grHwlX6-1mo/s100-c-k-no-mo-rj-c0xffffff/photo.jpg">
            <h1>Springbok ASMR</h1>
          </div>
        </div>
        <img class="background" src="https://i.ytimg.com/vi/X0iFzjdzl7E/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=SfmnEMrutKwti06z5UYAsvDBiz8">
      </slide>
    </carousel>
    <!-- <img class="background-fade" src="https://yt3.ggpht.com/G4v0mFn0bB7gfXEnFeWM2abMrLZho4sWjPhZcvwNQrXy1b5_xqTkEyJZjbWtbpt8QMLrSZBi=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no"> -->
  </div>
</template>

<script>
export default {
  name: 'hero',
  data () {
    return {
      videos: [
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero-wrapper {
    width: 100%;
    height: 600px;
    /*overflow: hidden;*/
    margin-bottom: 0px;
  }

  .slide {
    height: 600px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .slide-info {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #ffffff;
  }

  .channel-info {
    margin-left: 35px;
  }

  .hero-wrapper .background {
    width: 100%;
    filter: blur(20px);
    z-index: 1;
  }

  .background-fade {
    width: 100%;
    height: 100px;
    /*background-color: #000000;*/
    filter: blur(100px);
    margin-top: -50px;
  }

  .header {
    width: 100%;
    height: 70px;
    background-color: #000000;
    position: fixed;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 35px;
  }

  .logo {
    color: #CC2B51;
    /*color: #ffffff;*/
  }
</style>
