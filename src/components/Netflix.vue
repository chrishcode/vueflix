<template>
<div class="video-slider">
  <h3>{{ title }}</h3>

  <carousel class="carousel" :perPage="5" :navigationEnabled="true" :paginationEnabled="false">
    <slide class="slide" v-for="video in videos">
      <div class="video-card" v-on:mouseover="mouseOverVideo(video)" v-on:mouseleave="mouseLeaveVideo(video)" v-on:click="playVideo(video)">
        <div class="video-info" v-if="playingVideo == video">
          <div class="playing-wrap"><div class="playing"><p>PLAYING</p></div></div>
          <p class="video-title">{{video.title}}</p>
          <div class="video-channel"><img :src="video.channel.img" alt="" /><p>{{video.channel.name}}</p></div>
        </div>

        <div class="video-info" v-else-if="inspectingVideo == video">
          <p class="video-title">{{video.title}}</p>
          <div class="video-channel"><img :src="video.channel.img" alt="" /><p>{{video.channel.name}}</p></div>
        </div>
        <span v-if="playingVideo == video">
          <img v-bind:style="{ opacity: 0.5 }" class="image" :src="video.thumbnail" alt="" />
        </span>
        <span v-else>
          <img class="image" :src="video.thumbnail" alt="" />
        </span>
      </div>
    </slide>
  </carousel>

  <div v-if="detailVisible" class="video-detail">
      <iframe width="853" height="480" :src="detail.src" frameborder="0" allowfullscreen></iframe>
  </div>
</div>
</template>

<script>
export default {
  name: 'netflix',
  data () {
    return {
      title: 'Whispering',
      detailVisible: false,
      playingVideo: {},
      inspectingVideo: {},
      detail: {},
      videos: [
        {
          title: 'ASMR Spa (Scalp Massage, Face Massage, Personal Attention, Lotion, Gloves, Cottons, Tapping..) ',
          date: '19 april 2017',
          src: 'https://www.youtube.com/embed/OOkiD7noeV8?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/OOkiD7noeV8/hqdefault.jpg?custom=true&w=168&h=94&stc=true&jpg444=true&jpgq=90&sp=67&sigh=1d3O90skRrwa89Vn7NSwbyNHmck',
          channel: {
            name: 'ASMR Glow',
            img: 'https://yt3.ggpht.com/--9vzIulKFRU/AAAAAAAAAAI/AAAAAAAAAAA/sPxHDvZf3MU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/kAGBPJBJw1c/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=GQueHHYhzPli3o0XvepxErky2Ek',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/kAGBPJBJw1c/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=GQueHHYhzPli3o0XvepxErky2Ek',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/kAGBPJBJw1c/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=GQueHHYhzPli3o0XvepxErky2Ek',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/kAGBPJBJw1c/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=GQueHHYhzPli3o0XvepxErky2Ek',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/kAGBPJBJw1c/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=GQueHHYhzPli3o0XvepxErky2Ek',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/kAGBPJBJw1c/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=GQueHHYhzPli3o0XvepxErky2Ek',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://i.ytimg.com/vi/kAGBPJBJw1c/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=67&sigh=GQueHHYhzPli3o0XvepxErky2Ek',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        }
      ]
    }
  },
  methods: {
    playVideo (video) {
      this.detail = video
      this.detailVisible = true
      this.playingVideo = video
    },
    mouseOverVideo (video) {
      this.inspectingVideo = video
    },
    mouseLeaveVideo (video) {
      this.inspectingVideo = {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: gray;
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: 10px;
}

.playing-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}

.playing {
  width: 120px;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #CC2B51;
  font-size: 14px;
  border-radius: 100px;
}

.video-card {
  /*background-color: red;*/
}

.video-card:hover {
  cursor: pointer;
}

.video-info {
  width: 255px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  position: absolute;
  z-index: 1;
  color: #ffffff;
  padding: 5px;
  /*background-color: blue;*/
}

.video-info p {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  margin-top: 5px;
  line-height: 18px;
}

.video-title {
  /*background-color: pink;*/
  height: 37px;
  overflow: hidden;
}

.video-channel {
  /*background-color: gray;*/
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.video-info img {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  margin-right: 5px;
}

.video-slider {
  width: 100%;
  /*background-color: red;*/
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.carousel {
  width: 95%;
  height: 140px;
  /*background-color: blue;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide {
  height: 140px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide:hover .image {
  transform: scale(1.2);
  opacity: 0.5;
}

.slide .image {
  width: 255px;
  height: auto;
  opacity: 1;
  transition: all .3s cubic-bezier(.22,.68,0,1.71);
}

.video-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #000;
  margin-top: 5px;
}
</style>
