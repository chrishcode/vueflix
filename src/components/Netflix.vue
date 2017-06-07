<template>
<div class="video-slider">
  <h3>{{ title }}</h3>
  <p class="desc">{{ description }}</p>

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
      <!-- <iframe width="853" height="480" :src="detail.src" frameborder="0" allowfullscreen></iframe> -->
      <div class="detail-images"><img class="detail-image" :src="detail.thumbnail" alt="" /></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'netflix',
  data () {
    return {
      title: 'Cereals',
      description: 'Vegan cereals for your breakfeast enjoyment.',
      detailVisible: false,
      playingVideo: {},
      inspectingVideo: {},
      detail: {},
      videos: [
        {
          title: 'ASMR Spa (Scalp Massage, Face Massage, Personal Attention, Lotion, Gloves, Cottons, Tapping..) ',
          date: '19 april 2017',
          src: 'https://www.youtube.com/embed/OOkiD7noeV8?autoplay=1',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81BlIkXC6QL._SX522_.jpg',
          channel: {
            name: 'ASMR Glow',
            img: 'https://yt3.ggpht.com/--9vzIulKFRU/AAAAAAAAAAI/AAAAAAAAAAA/sPxHDvZf3MU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAEsASwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aimSyxwRNLNIscaAszucBQO5PauV1D4neFdPYqb5rhgcEQRlv1OAfwNJtLcqMZSdkjraK80uvjbpMZxa6XdT/wC+yp/jWfL8cXI/ceHwD/t3Wf5LU+0j3N1hKz2iet0V43J8bNUYfutHtEPq0jN/hUDfGXxCx+Wy09R/uOf/AGahTT2NFgK76HtdFeFv8WPFbcrLap9IB/WoX+KHi5xj7fGv+7An+FVc0WW1/I96pK+f2+I3i5jn+12H0iT/AAqvL468VStubW7oH/ZIUfpS5iv7Mrd0fRFFfOLeMPE7f8x6/wDwmYVG/ifxJIMPruosPQ3D/wCNLnK/sur3R9JUYr5oOua4/wB7Vb4/WZj/AFoGq6seuo33/f5/8ann8h/2VU/mR9L4o49a+axqd5nMmoXjDHeVun50C8X+K5mPrl25o9p5E/2ZU7n0pketJkf3hXzgt3bfx3Eh/wCBNxUovdOOA0jke5aj2hLy6p3/AAPovI9RSZH94V86G907BJkc/wDfVNN7p4BxI5544OaPaIf9nVO/4H0dkeopMj1FfNzXtiTw7n35FVnuo8fLNKDjrk/40vaoayyb6/gfTeR6ij8a+XWuJCMiaUH/AHzUf2i4zkXEo/4GaHVSNP7Kn/N+B9TUV8s/abr/AJ+Zv+/h/wAaUXd6OBdzgenmt/jU+28hf2VP+Y+paK+XV1LU0GE1C7UegnYf1pf7V1X/AKCd5/4EP/jT9t5C/suf8x9Q0V8wLrGsKcrqt6D7XD/41KniTxDEcx65qKn2unH9aPbeQnldTufTdJXzUvi/xQnTxBqP43LH+ZqzD4/8XQDC63ct/v7W/mKftV2J/syr3R9G0V8+xfFHxhCedRV/9+BD/SrUPxf8VxHLm0m9ngwP0IpqrEzeX1l2PeKK8Zt/jZqyjFzpNpJ7ozL/ADJrYsvjXZSn/S9Hmh94pg/8wKpTiYywlaO8T06iua0bx/4e1udLa3umhuJG2pFOhUsfryPwzXSDpVJ3Odpp2Z5x8VvFU2nwnQIrcFbuBZJJtxyBvPAH/AevvXjDHc2SBXpvxkH/ABUNof8ApzX/ANDevMO9c1Tc9zARiqd0hcD0pwx7UwU6sT00PGKcCKYBThWkTRMdn3paQClq7FBxS5FJR1pWHccGFODCmAU8CmgJV5/CnYJwABj1zTFGBTwcNnGOPypEMawXtgYqJhjrU/qD0681Ex5pjRGQfTrSYp/Tmk6+9KyLuyMikxTzjrSHg1LihDaTNOpOKzaQCZpM0vFFKwtQzSZoopiDNGaKKYBmjNFJTJ1DNJmiigTDNG6koxVIlti5qSI89aip8YycVaM5GhA7RskinDIQVI7GvoLwjq9xrvhmz1G7RFmlDBwgwCQxGfxxXz3Hwv4V738P4zF4I00MMEozfm7GtYbnh41LRnB/GMY1uzP/AE64/wDHmry09a9V+Mg/4mtkf+nc/wDoRryputY1N2d2B/hAKcKbThWR6KHCnCminCtIo0Q4ZpaSlrSyKCiiilYYopwzTRjHvUqc0CuPXOPX608Kc8EdPypFAxT/AEzipM3ITYSfvfjUZgYnO4DNTcfXHGKbwc84NMOZkX2fglnxim+QMkb+ncCpWzt64A9e9MKsgySQM9h0pj5mN+zgnh8nr9KaYAB98ZqQp0Iz6j6UjIcctkY47UWQczImixjkHNMK4PJqQpjncMDrTGXHTOM1LiirjMUUGkrNodwooopCCkoopiuFFFJQJhRRRTEJRRRTRLCpI+tR1JH1rRGcti4mdlfQXgkY8GaX/wBcB/M14Ai5Svf/AAUc+DNK/wCvdauG54mM6HA/GQgapY/9e5/9CNeUnqa9j+K3hzWdVvLa906ye6gig2OIvmcNuJ+71PUdK8mn02/tj+/0+6j5/iiIrOpFtnXgpwVPVlWnAVNHau0RkeORAOMFeTVU3SqceWfzrPlZ3qtT7k4pwqqL0f8API/99U9bvcQBH+taLQtV6fcs0UzzeP8AV5/GkE5zzDx/vVSaH7en3JKKei7+qkfjUogXuCSemDSckL6zT7kAGDUi/SpBAB2NSJAOOCPxqXJA8TTGgZNPA4/CmuDEQAM/Wm+bIFyFX3yKV0Q68CbjsQR3+lNJBPJHHIpnnuBkotQS30kZyI157E07iVWDLWMD39elDfMACMis86vMP+WUf5Uf2zN3iiP4GncbqxRoLtAyo6frTW5IyO9Z/wDbE3/PKMD6Un9rz/8APOPHTGDTuL20C6w3AAHkH0qFlPoOlVjqk5PCRj6CmG/lPVV/Ki5SxECyR1pKq/bJP7q0ouZD/CKl6lfWKZPRUPnyeg/KjzZPQUuUPbwJqKh82THQUhnfsBS5WHt4E1FQ+dIew/KjzZO4H5UcrJdeBLRUXmv6D8qPNk9B+VPlYvrFMkopnmOT0FPQs38IpqLJeIph7VLHTo7ZpOBilFrfLMY4rKSfHP7pC38qqzM3iKUtEy0h+Svf/A5z4L0v/rh/U14dp/hvxRqJVLfw7ebW6SOhjX82wK968L6dPpPhqwsLrb58MIWQKcgHqRn8a0hueVi5RdrM1KCAevNLRWhwHknxUH2bxDHMI1/e268+uCRXkdyv75iFwCc17N8YIAs9hcEjDxun5EH/ANmryK6TL7gPx7VlJXZ6GFs1YpAN6VNDHKzDaBn3p6qM1cth8wIUn6Ucitqd3LZCfZrs94x+BoWzus53xg/StAhiAArH8KAr9SjAA8nFJJEJogisrr/nvGO/CVZWxuCP+Phf++KnSOXtDJx/smrSQTHpBJ/3yalqJLaKH9nzf8/I/wC+akWxkxk3BP0Wrv2efp5Ev/fBqRba4720vv8AIan3QuZc2nseftLflTRpbFcfaX/75FaclpdHkW0v/fBpYLa4dNywSMpHUKTmj3RqWhkHSv8Ap6kOKrS6WucG4kP1rda2uiWRbWUkfeGzpVaWxvi2Psc3PT5DVXiWpoxW0tMZErH8KZ/Zi/8APU8+1bMmnXyMoa0mBfhQUPJpj6bfoQDZzDccD5DyaacC1KLMc6avaQ/iKQ6cnP7w8deK2DpOpZ2/YZjn/YNKdI1PH/HjN/3zTvDuF4GL/Z6AffNIbBOQJDmtiXS7+CNppbWRIl6sR0qmV7r1qlyvYpcrKn9npn/WH8qkTS0P/LVh+FWAoz/jU6DAFNpCaS2KY0pf+e7flS/2UP8Anu35VexTJ5PKgZgeei/WpsiEruyM02iCZkEpKqMlj29ai8kD5cnOOtWmAjiEXdvnfP6D+tRBSTnuTisJM7YU42uC2JaR4xLtKd8daU6dL2n/AEq1EAbyYjpU3TpWqWhw1NzMNhMOkw/KmmzuAM7x+VafrTD3qrIzM0W9wP4h+VSxxzj+Jfyq5jPanBRmlYzkLbiQddpr3D4Y24h8GQS7ArTyyOSP4sMV5/75rxaCJmyVUkDk17v4EgNv4L02NupjL/8AfTFv61UXqcddWsb9FLRWhzBRRRQBx/j4WyJp9xchSqu65foM4/wrzbxGqiw1JIIVMLFZNwKgcheQOpPHb1r074g2YvNFthyCt0vzAZwCrf8A1q8v8SaZAI5UlaSRoLVWTbKE6ZG4g/e6YxQ9jSk/3iOJQcV2vhI50SQIis6yHGR7VwiyRdTuzXb+CJA+m3CpwFlz+OK5q7vA9Wu7wOktt80f3F3qCWA56daf8rjaQCD2PNQaZexWYluVi2wW8jrIBk8fxfnkmrT3VjcSCKxVwUXLsykbs5x1+hrksuW5xa3sZ+v6tNo2lfbIER38wJh84AOeePpUKeIZn8JnV0SMzhtm3nbu3Y+vTmovGJK+G3kXqkqMPzrF092Hhy800Ngm6iaM55w205H6fnSSTjctI3tO8SNNok+o3YQtHKI1EakAkgYz+dULbxTqcNxDe6hZxrbXA2rIqEFlB7HPNZ1vuHha9BG0x3URAPQ5GBmtPW9reCdIPGQUwP8AgJzRZBYta3rup2eujTrFFfcgaMCPczk/iOOtLouuXp1UaRqdmtuzDK7V2kE5PTJBB9RWbeX0T+MLK6jdjFFHGrlkIJ7cDr1NX9WIHjvTufmIj4HpuNFlsFiz/aeqTXc9vbRRyGNjgBOcA4qPVNT1TT9Da6aFI7vzQi7+hXHJ/nUcFxd2urX0llGJpdzgqRnjd1qt4subm48KxNdW7RzPL82BgJjOM555qnHVCW5nP4p8UWVnb6ld2kMllMflbYAGH1B4q74q8TXmmw6fPpcirFeRGT50DHtj+dYE2q3us6VpvhiC2SMhl2yO+PM64PPQcmr3jeyFnaaHpwYFoozGX9cbR/OtOWPMroo1Nb8SXUfh3TtR0xlWa7cI427sMByPzrasTLPZ2d5PI3ntAu9QcKSQCTj1rzHUfteltLodwcra3RkB98YyPYjBr0/Tf+QNYn/p3j/9BFZ1IKMVYCn4lkKeH5+hZioVc4yciuGM0seC0K47HNdf4yLpokcqbTsnG4H0IIrhxfuW5wo6cDP861ou0Dtw1uUm+1v/AM8xn13VIt846xr+JP8AhUAmeSVEWGIlyApIxk1uQ6bY2yj+1XKN3CQMqj/gRFa8zfU6XyrdFCO4lkOEEJPpvIP8qiummLKkiIMcgA9frW9J4e069ty+l3AVx0w+5Sff0rnbnz1naK5BDxHYQetJydtQpxTleIyR2cljjcxyaASjAjBK8896RTuJc9D0+lRSSqGG0An36VmtzqlZQLsCXIQyKI/3nPzE5p/+l+kQ/OqZ1O4PGE/Km/2hcnkFeP8AZrdNJHnSTk7lwi7/AOmX600i59YvyNUzqFx/eH/fNNN9cY++P++RTuiGmXgLk85j/I09BN1JT8AazhfT/wB/H4CpobqZjy/6UXM5J2NyzmEMbhhkt6V794ci8nw3pqZzi1jP5qDXgdvAJLTfkhicfWvoi1hW3tIYEztjjVBn0AxTgtbnDiXqiaiiitTlCiiigDD8XozeHpSv8Dox9huFeX+Irbz9Rt3XTRfH7O4++F8seoyRnr0r1bxREJvDN+pOAsJc/wDAfm/pXllxcW+tfY2s55QgLo7xAbgQAe9PoODtNM8zGQxHkDIP5V1/gmZ/9Kh+z7IsBzJnv0xj/PSuVknRLmRSG4c9Rg9a6TwdfLJfT2yxuQ8e4t2XHr+dc1Wzgz2KmtM7jSG8mSeK8jVILliEbsfQ59c5q5fpb21v5KYeeRtzMOSBTdJIvbK4sp0ACNmNu5BA5/A5q7BBFYxyXUwUvjqe2B0FTGDdPTbv+Z5cpWn59jkPFJA8NXJYcKUJHtuFYdrFjWdFQLiO8gjk6ZyUHI/JRXYswEbzzDEXJZmHHqawbrxQ0F28UVlGVjYqrMefw9K5FK2h1xTlsZmlwy6toeuwRRnzF8pkQdW25/mBUE2rDVdAsdGS2b7XA+MkfexkAD8+fpXaadfxahB5sSCN1xvQEHGelWZGit4pLkxICiliwABP40uYWt7M5PxHc/2P4js55lLpFbxB8DltrdvfipbKS48QeLYtQitjFaRIhLsQcAcgZ9cnpVseIhdTwW9xYxGKRwDuO7HvzXQr/dHAHQClzDknHc5hbtrHXLu7RC+JWUqGwT/9biqniXVW1fwvdObcwmKdBjOc1vDW5oy6tbx5H1rNn8TSxswa2hBwcMScEgelW5LR2GoSuYHiCyLeDdC1GNSskCCNmUcgHkH8CP1pPFl42qQaBe7W/fREuQpOGyAf1BrtNJvm1LT0u3RUZmIKr04NZureKV0+5e0tIElkTh3b7qn0AFNVdtNgUZN2W5j/ABH04PdW2oJnc0Zjk4JHHKnj1zj8q6nSyx0WwLDDfZo8g/7ornbLxTv1OOe/tk4Xy/MjyNgJ5yO9dWfvZByDyCO9RKXuqL6BODjozA8ZSlNKhjEAmMkvf+DA6iuN3ygf8eS/kK6XxveeTdWUHTCs+c9c8Yx+HWuaa9IGRFkeoauqi0oandQi/Z3Qx1lkxi22+uD1ro9D10bFsb59rLxHK3/oLf41zv8AaWD/AKr/AMepkt4sw/1IB9c1ckt0zW6atL/hjuptMiaQzQf6Nc9pYxjP1HcVzOuSTy3wFzbiO6CBXC/dkIOAw9j/AEqtZa/e2ShI5i0Y6JINw/xFO1DWJNUdJZURWgXjYMZqG7ounFxle5Akdwhy9pv9ATxUm+b/AKB6fpTDqznnyVH4mganMzYES/n0rVWRi3OTuxXlljXc1jGB65FRMz7xP9nXYeBnpT1FxeyGQIDHHyWbhBUVxdSuWRwuI2wMDgmp5kylGw9BOiYNmr5OctjNBafvZx1GdTuD2T8qYdQnPOV/KqTMXcnBn/59I/0qaIzcZt0WqQv5/wC8P++as29zK5G45/CncxmmdBptr5tzaAncJJkXZ65YDFfQ1eEeF7aZ/EekDJI+1RsFBzwGBP8AI17vVw2ODEO8haKKKs5wooooAqarEs+kXkT52vA6nHoVNeNalpVkukQQ2bJbiWfLMXIAYgjk9R2r29lDAqwBBGCD3rxGXyptKkiuGSaOOWMvHgnjOOgo6AnaSPPry1jtL2a2kkZ3icqzDoT6itzwbc2tvrJRXbfNGVUMOCQQcfoayddS3TW7oQK6x7+AQRj8DzVnwtcRWuvw713CUGME/wAJPeueezPZfvUz1+508Ni6sT5UwGQF6MKbFC9/cRvcFjEkasUPQt/+sGjTL6MxC3lcK6cKT3FWri6itITKMMScAL3PvVJQa5+nVHj3kny9TK8XSf8AEmlhTA2xE4Hb0rmtA0+1uob8yokpZtitj7vGcj061r6q7z6fevIcu8TH9KzPCTq0N0F+7vB6Y7VwVJ88nI7qa5adiDwmWS7uYyeqcj6H/wCua29Xfy9HuMdwF/MisPw02zW7yMgchsH6NWn4ik8vTUXn55QMe2Cag0kr1Ec9dJ5dhBcL97zW5x6YrtEuI5BCd4DzJvRc8sMAnH5iuX1A2x8MW0YlQzpIWKZ5AOf/AK1amnJLe6dpNxEy5tWIkDcZXBU/0pdRz1Vy9e21tHp0zJCgfGdwHI5rG0W2gunuTcQxygFcBxnB5rfvgH0+ZQcbgBn8aw/D5Amul5zkY9Mc1XQiL91mzBHHCojhjWNB0VRgVwulwWsupSS6ng23mmOUPx8zZ5PpyK7rp+FY2seHVvFnmsyq3EuC6N91sdx6GpTKpySun1IPEulvczILO2DyvDtAVgOARg89eMjP0rVhkFlpEMl4fLFvAvnE87cDnpXLaVrU+izra3kTMikq4dfniH+yfTviuxykihlIeOQZB6hgf/rUPzHUUkknscX4wjS6u7fUYlM1nLAAsq/dJyTjPr7Vziy24I2xP/33XS+NrO3s2tHtkaFZSzOifcZhjnHTPJrl2VW+c5GewHeuum/dO2jrBND3GTwmR6E0iGJTiSP8GJH8qkwHUH9aTcQwRxkeuKSep3OC6jy9uoyLTcvqJDTd8Tk+VCIwB8w3E5pBGqMWBbGOi0oTbuOMEjkelXzXREadpCia3fpZoMDqXPFWtOsBcqZJUxAeg6Fv/rVHY2K3UuxtwiXljnr7Vr3dyLaEbAN5G2OMcflWdSbvyozS5UROyvcraRqBDCN8uBwPQVhtcDzDJ5SHdk4PT61stGLHTZSSTJLy5JGSx96yFSErl1BPQfvAMD6UUV2IlsRm5H/PCL/vmmm6PaKIf8AqUi3H/LJf+/tNzAD/AKpAPXeTiukwGi6f+6g/4AKvWkryOA2MHsBUCPZD7wTPbANXbdoWdViXqeDimYyep2vgOCd/GGnBzgLvbHsENe015L8N4ZZfFu6Y/wCotnYbemchf5E161WkdjzKzvMKKKKoyCiiigAryHV4pUn1SNAiGOVsHbyGEn8q9ery3xHFIusarCG4O9mA75G4fjzTQuqPNPEljdtqzSSzRTuyKTImQG496q6bYyf2lbeaF8vzV35PbPNXtTiXTZI0kuPODrkMAePUc+9VYr+BJUbzGXawO4DpWLSPZhdw0PRD5xuwoRfI2Hn+LdngfTFaFooksbqAnBXEi59utcjf+LLKK6haznWWEg+Zwf5etZyeLJ40VFuQ23oWXJPPc1xwpy3sc/spSWh2pjE8LwnpIpX8xXLeH9Vi0eW5ivEYA/3Rkhh2rUXxVo/l5F2vmKgYjBAJ9AcVS1DUPCt1cLLLMzu/33hyPz9fwrLkl2LgnqmhfDaO+tXM3BXYxJU8cnirHiubb9lj/wB5v5Cm2/iDw7pkQhs5CyM+HYAlv97nr1qOTW/D2qKJdQJWWLIRVY8j8KOSVtirS5uaxYv9DVND+0+cxlij37do74yPX1qXwlOJNOlh7xSZx7H/ACafJ4n0SWARy3GUlTDgD7oI6H/61U7HW9A095FsVcB8ZZm4b8zxR7OTewrTcWmjoL7jT5jnGBnI69aw/Drgz3ajvtb9TVqPxDY3Ubw3EscSN1PJyvpx3rO07UtK0+9uDLcrGr5CyEkjAPAx/Wm4StsJQkotWOiK70ZOhYEVxmlagukai0l1HtQEwuA2XU8c4J6ZGfxrU/4TTTd+PLfGcbsjp61BNf8AhbW7l3uX+zuuAJWbaZPy4496nkkt0VCLjdSWhmeI9Qg1W+Se2U7QnljjDOQepH48V1lg8VtpttbyzxLLFEqupcZUgcg/kfyrFtLzwzpmqKkEiSgIWN07FtjdgBjH41YvdQ8MXQdri+DZfcQu7JOMcYHp/Oiz2sVNXSVnYZ4zgF1o1uVxxMCHHPBU/wA+K4w2ZijLeYHHcYrpte1vTbrTrW3s5GYIQeVI2gDAB96wvtduP+WgPrwa66MVyanRRUoR1RURdiAA7l/kacQCuGGQaPMiEjKvzI3bp/kik3KG2k59OOtRJanpU5K1v69ARNiEBicdvahVCM2Ohpw657jpTeQCCOnShMpRszZtESy09S33pPmIHVie35YpILfzLkXs3MmMIvZR6gUsEDSxpPPkKFGA3H/6hTLrUVTMdt+8lbgEDIFYa3stzltfUg1WTzpEt1OWVs/jUX2G27x5Pc5NJCjxku8MrSN3OP8AGiS72tsWNt59cH+VdkIqEdTnm3J2iMlhtYFyYgzHovrTUgSOIyTIpPXbjpTxDNC4kuIv3jcrvYDj1pksnmSqrFAo5PzcGr8yPJE0aRsgYQque2KsxYVgQBwaqC4UnmSP8DVyyZJZ0DMNvUntT6HO9z0f4VEz6zfzMoykAUY92z/SvUK89+FMShNWmQfIzRICOhIDE/8AoQr0KtI7Hm1HeTCiiiqMwooooAK858UxN/wk9yqEgugY8cEFMf0r0auG8VkR+J4xsOJbVckeu5h/hTQnseQeIZVVbY2yzKdpWTzASCfUZHSsb7VMOuPxUV0viOW/+xQDyCkUMrxo+7cXHrjtXO/a7sDn9UrN7nsYd3gi9Fpevy2X2yLTJ3tipcSLBlSo75xUNmupagzrZWj3LRrucRRbio9Tiussb+KWPR1j8RNa3r26xx2ojLQ78sMSYIxnOOlY/hy8vbTxnZ2jgQSfahDMFGMHO0j35otruONWTT8jDF5If4U/74FOF5KP4Y/++BXR3f8AZV7ZX8miwzR3WmndIJyGFzHu2lgB90gkcc8GtFtCtBeDQxb3g1Qp/wAfpi/0bzcZ2Yxnb23Z69qVn3NPbxS1RxgvpemyP/vgU4X8ufuRf9+xXS20WhjQU1i7+1lo5hbT2qIgZ5SM/K3YDnqKvjw9Yrrd1pFxdSW0yW4uonaFSEj2hisgBzuGT044osxuvBbo4/7fJt+5F+EYp6X0mPuRcf7ArpZINIbSIdcjF5BppnNvIJYlaRm25DJggEZGCO1PvbHT7DxBZ6QlxPOt2qMsqW4+bfjyyo3cg5OfpSsw9tHscsNSnXnEfB/uCmSajM/LLGf+2YrZ1u5stO1CSzsJPtXksUlkkjCgsD/DgnIrNOrPj/j3joNou6uolA3Umfux/wDfsU03Mh7J/wB8Crbamx6QRim/2nJ/zxj/ACqPmVr2KpmkOM4Iz2UCnNLIhAUjbjj5RU/9qSYwIo6iW4b946qAWByO2DUvR3TKjqrDzZXrOdqguBkqCM4+lMLz25xJE8Z+mK6GSCO4iQkkEAFHU8r9DVY3ctq4g1BQ8bfdmAyD9RXMqrfQ0tbqY7S3BUgSMQexGKjTzjkbC4HUbc10MlnHLH+6YKGGRxuQ/h/hWS8V5Yz4ZCM9GQZUitI1IzJtbbT8iFfNx/qJPyNO+YEiSMofQ1IL2/YkIu/H91M0x5JpGJuAQwHQrjitGopXRdOpNy5WNdL2UD927LjjPpTDb3aAuVZB3O7FSGa/jjXO9VwACVA4q1Y6de6tMsZdhEBl5mHCj2FVZLYwbk9ZPQrWVheX8pSENIR1YthV9ya6W10iz0qE3Eo+0TKM7mHAPoorRt7eK1gW3t12ooxz1b3NVCxvdTCKwNvZnLYP3pew/D+dFurMnK+iMHxDbTTX6s7rlIhvJPfkn+dZi2RkRWMiqOwNWtYYS6rPN56kb8bQemOOfyqmYLcHm63fRafUl/CSpZRKwJuBx6YrW06GHzMbsp3OayYoLfIwZX/4DitjT4I33DlQBnmmc8nqev8AwthCeH7mRSMPdEDHsq12tct8OrdIPB8BQn97JIxz/vEf0rqa2Wx5cviYUUUUyQooooAK4rx3GzXtgQCFKsNw7EEGu1rkfH8Ra1spDjZ5jI3OOoz/AOy00J7Hk3iaB4ra4lhGCLohyJCSeuPl6D6iuUN1cYwZWFdz4hhRILuXcisrqS2TvIwO3QiuU+1Rn/l5X/gUdRJanq4aXuGzZ3ukala6ZNf6i1jJpi7ZYVhLNcgNuBVh3PQ56Vm2+sCbxjFq842RNfidx12LvyfyFRwBLu5jgSS3LysFUumBk+54qa5sXshG1ytook3BMYPKnDDgnBBpa7m0YxTavuX5m0jSrbVr2x1OO8fUkaG2t1Qh4kZwzGTIwMbcDGc5rWfV0vr8a03iyS3011Elzpyzus6uBzGijggnocjg1yY+ysSSLbp64qWOCymztjjYgEkI2cAdT9KBOkt2aMNraT+C7iE6xYJcSXQu0gklO8KEYFTx948YHf1pPBixNf3N5fanaWyNbyQH7TNtdi6EDAPUA4zWd5Omk5zHx1+elFvpp4ymP+un/wBep6mnJ7rV9ypPbXEMz6esouhGxwLdzIjHHJXHXjv7V1uj3kU3huHXJmButAjkt0z1feP3P/fJLflWdot7FoeqR6hp7x+egK7WfIYEYI6+lWtTnjliTTWso9Lt43802yblLuf4m3HJOOlMmo+ZqNv666HLbSSS3XqT3NIVOOua3VsrE8ZH4PUEsFiJTGwOMfeDZqLnRGpfRIxGxTRxyK2jp9hjJbH/AAOm/YLD/np/5EFFh+0RliVx/Hj8KPMJPzNnHbFaf2GwxkyAD18ykNlp46yDH/XShxuCqJaou6bL51iozlo/lb+n6VZeNZEMbjKntWZYb4NRaO1RrmN15EQ3sB64Hp/WtYjnAP4159SLjI6Lp7GQ/n6PIX3PPbOehGcfj2NaUckN5b7lIeJuvYg/0NSMFZWVxuVhgg9xWaYU0lzNESsbdckkH2P+NC9/1JenoUryzksZggd/LblWBwfpUCsrbipdu2XPNb7rFqNifLIKvyrd1Yf5/WsBRtzkY55Fbwm3GzNKavK461t3vLqO2hDM0nHzN90dznsK7a0tIdPtVtYAdi8knqx9TVDw5Ypb2QvWX97cDgkchc/5/Srt9ew6baNc3DcDhVHVz6CtkcU3d2RW1fUGsIEigG+8uTthQdvf9adFFFo+lN0/dIXkI/ifvzVfSoXunOr3UeJpB+6BH3V9R/SofEl+LeCK1UB3mO4qT0Uf/X/lVaEWOXM7EiQom9jnG3g0fabgn5QP+AoKct60QIREOTncRzQdQnPQqPoKEEuw+Jrxzzvx9MVt6fbs8TGQkbetYkVxO4yZD1xxW5YxM9oZC5GPTvTOaeh7v4OiWHwlpqIMAwhh+JJ/rW1VHRIWttC0+3YYaK1jQ/UKBV6tzy3uFFFFAgooooAK5nx5AJdCjYniO4U8+4I/rXTVh+MYxJ4ZueOVaMj2+cD+RNCEzyXX7exaOcTFfNaFPLbccn2GODXHtpsZ5DsK7XX7C0Kn7SdsiW2YCHK/Nk8D1rhGkvkP/LT8qUtz0cI7x0Z1em6Wbvwx9jSdS4YvHkqqq4cHp1LYzz6GquvaNdRQxyngLfTlCUyDuKkex6H61j29trF1ZXF9BEz29qB50mANuf5/hUcU+pu0CLE7NcYEK+Wf3nOPl9eaTaN4wfNfmOvutGur6+8uTTLZUgubZkUQeUu1l/eKxUcgnFSDTJre8h1C2tLeUT2c8MoksxEHfDlcRj1CgZ7j61y8/wDb9pEzXFtcRoo3OWRsKMlcn05BHPpVf+3tRLbzcsW3BwdxyGHQ9etLmiCpTa0aOgh0OT7To4m021kc3rw3SRodrK2wgH3AZsemPamW9pZ2emQtfaRFIn2mWGaRQTIUCgrjkANk/e9BWLF4j1SEytFdOhmOZCrEFz6nnmnS+I9WniMFxO7xN82yQkg984JpXiaezqX1Zv3HhtX0i4t4rO3W/tYYWWONmabezKG3scLg7iQB04rM1+0vJ5tPkYbm+wQhmZhnhcVWXxZrMaxqt44ES4XBPA6Yptz4j1K82C6mE2wYTcM4z/8Aqo06DhConrY6GfR7YXd5o0VgIxa2xkjvQ5MjuqhtzDO3axJGMdxzS6hoNudPu4La3jjvbWKJkRJGafzGZVYPj5MHccAc9KxP+Em1R7MWklxuhAA2kdhyAT1I9ulSP4s1oKu28KsBjIUZP19fxpOwlTqprU09Yt/tT6c40GEpBaQtOfOYHacrt6+p69abdafpcEmsCLRl26YwEGZWbzcvtPmYPI5yMY6d6yF8S6tb20MEF2fIjOYwyhip9CT1xnjNOGv6rJHM32zm5H775FHmcY54qW1a5tChVbtfb1NGPRNOe/ku5Y1htk05Lw2zs+wOxC4JGX2AnPr2z3qRNF064kgv4beCSH7PK0wWR47ZHU7UbL4cqSQCB36VlnxHq8s8cpvnMsQKqSi8A8EYxgj26VCda1dbw3a3m6Up5eNi7dn93bjbj2xRzIbw1W17/idFbaNLY+KtDvbGJUim8tp3t2YRbizcLu+bBC9D71g2F8bdja3XyjPysT932Pt701fFOuINo1OeMgkjJBwT9Rx/Ss+6vLq5lM1zJ5rscliB835VFRRmrDpQnB+9qjpiMfj3FIwV1KOAysMFT0rBsdVkt8IR5kf9wnkfQ/0rZgu4Lr/Uv83dG4YfhXDKDidBRggm0q9IT5rWTnBPI/8Arj9RVK92tdzeX91nJGO9b0sCzwtE+QG7jgqfWucVCp8oHJztBrWD5tepVJWb7Ha3d9a6bboJGUyKgCxA4PTv6Csi20251e9XUNVYeQv+qgHQj/D+dWbHwxa2T+bdMbubr8w+UH6d/wAa0rq4htITPcyCNB69T7Ad66lscIk80cETTzMI44xknp+FcTe3C32oSXEs20P0OPujsBU+r6tJqkuwDy7dDlIycEn1as1omZslk/BqNyrW9R5jsgP9e7fRaTFptyFkPuxxTI4S8gQDc56KKsT2LwoGlfcx/gQZwKTkr2J5basW3kjKf6rle5NbNplzHFu2hyOB0GayLePHSNv+BHFdF4ctjPr2mxOn7uS5jBx3G4A1okcdaVrn0JGgjiRB0VQKfSUtbHmBRRRQAUUUUAFZ3iBDJ4fvlAyfJY9M9Oa0ar38TT6dcwp96SF1X6kEUAeO+IbpLFLWa5RJN6PHuA5XI6j3rjjImcCRT+Ndctxd3tvGLuz3PE7IqhAd6kdcH6VwNxFJFPIpt+Ax4ZTxSluduDs1Y6zRdWsrfSbuwvGG2Ri6Dbu3krjGf4eQDW1rEr2PivSLyaWGK1AK72OdqjrxjoQcAiuA0zTF1XzVVo4XiwSGDcg9/wBP1pZ9Muo5FRYpblDHvSSNiRtHXqMjGaLm7ox59zvbW/h8xGe+sZJ5baWJ/MH7tm8wMm4YHamTJ4ebTbr7FaWjutwxUylVOd424B5K4/DGc1wE9s9tuZxOYlYL5ynKE4zgN9Kc1tPFGsrpexo67lYoeV9evSlzeRSw63UjqfEEGlP4gt7COytrW0EgVrm2w6lGI5OM4I5rofFUenXGmG6u7NLmS3jMUaxzozwjOEfAPzBsDjt6V5moOxmFzcqqgFvl6Z6d6RXQH/j/AJgf90/40rlug24+9sejeBzHHozCG3D+bdkTKm1CibcZkDfeTnoPSo9P0TTLfQ7q8TT4ry5lE6q0cRccEhdingDjOeeMYNefl0PLanKM8H5W/wAa1LbxHqVpYiyg1rbEFKoxgBdAeoVyMgc9jRdEzoTu3F7m74X0fStTsbln0o3c8EkeAGMe5WOD+WCatTaHoNlpl5fSaZNdQ2108AkjY/MnZ/wPFcvY6pqMFjPY2WqMbeQF5lEG446FskEjHr2qmpwMDVmwO2WxSuinSm5N82nzOw1Hw5o1lpQvBat5dutvMtwZMR3hc/MmO3HpyKuX3hqwufFNy1xZi2g+ztLBbwuSbkrtGQoGQOeg61wk0MyqiXGoSBSN8ayhgGB7jPr61Ekj+YGM7s/8HzHKgehqJNLob0qM3tPU7WXR0tdM8S22m21yEVYSN5yTyrGMjH8Iyc5zzzS3/hWwGnXa22l3MVzDYx3YdpiwVj96PGOcAE1xYZznDuSeTyck9zTZC75Uyvkj+8anmj2Oj6tVTup6je4PcdDQxV9zytg9tqjB+uKGKJtXzM5HcYINIeKjY7LRqK63JBO5BSd5FBHACLn8c0xool5xPx0yFpqxx+YWcsoIxkdvw7imwrZkM0+7GeCtUmnozlnFwd0Si+vIuFlfH+0wqPeUxIOoOR9ac407aRH5hf8Ah69aYxUYMgJTI3Y9O9TKKT0LpTbjJssy+ItTk63LD/dAH8hVFrp5ZDJPulb1ZjU5uLBfu2xP1H/16ZPPCyhYrdUJ7bRuNW0kcyk35EYmTG77NEo9SCf61PbWUt03mlRFD64+99BV+0slWMNNFtJ/hY5P4/4VbOT7CuapW6IpRsQBYbWJiq7QOTgcmqF0lw9srA7ZJGLtzjaMcCrTu1zeCJRiGLl2xwx9BUGpGUzIqEBcYb8aVNe8rkT20IoLR2w7Pwa7fwOEk8U6ZboN7LJuz6BVLf0rioYmyN9xux2BzXe/DK1D+L4HBx5MTucjr8u3/wBmrvieVXdz2aloorQ4QooooAKKKKACkIyCPWlooA8a1CIra7LiRvKhlGGU7TkZHBrirxGF5N5d3uG84JAOa9E1jEJ1BFU7YLtyO+AHPr/WuB1AW9zeyyxxjYzZGVwaJHThXuRWl1qNhKZYJIGLDDb16jIP9KsxareRRqh0+1fbjkMwyRjB/MCs82duT9zH0JFQXCwQZCySDHUl8AVLdj0lBTZrXeq3F1YNZnS41U46SA9Me2eo9au6jq8ZkeSztZC8sYTCEKqgNnBBHJOTnr161yaXas4RLt2Y+5q9CrS/KLyRHPY85pc4/YxautUuxuy61ZSzLP8A2ZexSArkowIO1944z1HzD8aRdZ08LK0llfvLLGUdigywy+Bnd6MBzkcdOBjJNtdDpet+K0G3ve14P++aLi9nEuabJpmlajI/kXMkflgJL5WeTgkYzx3Hf8jVyPUdEWO3X+zZwEPyhoMmM4Ybyc4OSQcAdvYZx/Jv8H/S0wO5FQNc3acC6V/cL/8AWpcyRapOb0N/7dpLG48qOW2Equkm21/1u6MKCD1XkE9uue+Kraq+j3EdokUM5SNvnEUOz5MKMZwDng+vXrzislbu8JH74fkKnja+l/1d1ET6Ywf5UuZMp0ZQ1ZuatqelXdo6RQNLKU8v57dvlX+EoT0bH3iepx1qiJdPXSo7cuiFIHPz23zmTdlPm28/nVPy9T/57x/5/CmyW2oTKBJJG4U5x/kUS1JhGMdLmxHf2MFytzDLDGzTO2z7PzCrIVwQVxw3YZHp1xVa6uNPGjvbwMrSlsq3lYZjvJyeOBjHQ+gx3rKRZHLyFtyjGc/eHv8A0pCOKyuehCnF631RG6K4G4dPwpXA+9GkghzgM46H0zSmmNvK7VkKKx+b0/KpRrNNPmiB9KQxqUKrGd3UkHjH0p8kLwMEkIJxkMOjD2qNhuXGSD7UtmOVpxuiR1TyVdLQICcb9+ee/FNQbpFXarc/dc4BqMKPMJznA/CiRPMwhzyeMdzTbu0Yxi1TdiSQh28pYoE5+8v+NadnaeSivMieaOgA6f8A16ZYacsTfaX+Z8fID0X3q6xCjc5AHqTWFWo27IxSSXkNJ/Gql7dCLbbx5M0nAC9QPWpZLqMBhC6yOOMA52/WorWKPe9xw0hJUseoNZxjyrmaJck3ZEkEIt4hFuLEdWJ5JrJu5WkvJCke4q23pnOK15H2IWIyR0HvV/T/AApIbd7rUroWpYbhEq7nA9x2JyOPetqEXKTZz16kacdWYFulwTyAo9MYr0v4TW4/t26kPVLYgfiw/wAK4m+sH0q7WKRw6ON0bj+IfT1Fel/Cq3jRdQmVOSI1LH1+YkfyrtWjseXVleN0eh0UUVocoUUUUAFFFFABRRRQB5h4pi232uRrGUYjf04OQDmvLnunjGGhJx6V7F4sgYavfhiNs1uGUD/dI/mK8bljuAT5cmcHsaUuh1YS12hv9op93Y249PY1LLprT6RJEygSzYkR2HPHb8aq7boyqsy/ITjOBWt5zwlraUhkAzE/90D+GuStNpqx68YRcGnszntHaG2eQXdrNIiZMxiO1416Bs+gJFI09wLySRpkljRzG044SQjOCDjqQKlvJLW4E6NM6znC26RKBuJI3Bz6elVrmznmupozYvA8eIhFAhZDKMAgnPGeTXRFJq7PG5p06nuPY3bW7SWEGRwvHBY4yKnE0OCfNTHU/NWdc6VJp9tGJZGd5BllI/1bDtnv/wDWqpCN0mMZPapcrbnsU0qsVJaX/pmxbWl3rNwVgXbEn3izABR+PU1rWcFlablS1WWWFsO7jfj3z0qnf6XqtlDGLW7ihjCAMwP3nznuKgjuJIWn09JJktrKPzLkg7nlY9V3DjB9e1YOMpq5NSuoT5Vt0LyPPe+d5GmRTCPcGPlgAn2qOXw7M9pBJpqyXEnAk3sFAOP4ST60xNbsYZDK0E1hC0WIk6Fznk5NXrS7a502F0fajruyOMD/APXUzjKl8QUa/tf4crf1+JlQ3EiyG3ulZJFOPm4IPof8atd+tQarN9vJuCxkMWFL9cj0rEYbHKkn2rSlU50bSpJq6Ni4QwS/aYxkHh1/z61WmiCgSRnMLdPVT6Gs/PvUmRKuCcP2P96rcTSm3G3cmNNpiS4+STgjjJp5rNndCSkrolR1ltzDIwV05iZjj8KgBBwaRlDrg0yIkEoRj0obujNLknbox6jHHvVzTYBNMzsPlTj8aqVracmyyDHjLFiT/n2rKcnFaBV+GxTFnqIjAiAimL/vZ9+fNHOD7Y44qrqLfYnj867L3BXDjzCdvzA9OwwMVrRG91rVY9E0cbZ5BmSdvuxJ3P8An2xXcaf8PfDmmwiOazOoTn789wSSx9lBwP5+9b0oTlrI8DEVoU3yx1PMbLSmubeOdbrag7K2TnHX2Pt71p2lt9jtvK3BuSSQMDn2rZ8X+E7fw1Gmu6KrRWocLd2pYsACcBhnnr/Ssx2G3cp4IyKxxKnF2b0ZvhJU6kbxVmjU0WzXY9/ICXU7LZAuS798DuQOcdzVlrqPfcyC1uLyVztu7gOE2lcdPVhjnFWp7OO1022eCXfcQxLGIDnCSPyJAOm4An8qxLO7txFFaGR1h3sCj/fY9M8cetehQhGnTS7niYzEOdVsl1iJDYxNB++RJdySMcnDjPPp2r0j4XwhdGvJg2Q1xt/JR/jXA6uoTRYY/lC/aMYUc9TXpnw8hSLwwHQ5Es7v06dB/SlL4y1/DR1NFFFMkKKKKACiiigAoopKAOL8YNDDrUXmSBWntto3cDgn/GvFryzcTyeWwPzHHOK9Z+LEII06bHJEik/Tbj+Zry6WME45H0pPU6cOrNsy1S6jkXzNxjB55yK0owdQuZLZOZgMhe7/AP16ieJmRlEhIx0IFQG3uZYmurVirouS44IwK5qtPnkj05VuSi2+5nrYXn9rzWsNus7yoVJdchAe/sR612ZFtpdlFZ2DAqgO6RWO5smqOjCBrOBixHnqBLMRkg55z61YmRVEZLrtdmZXTrnpjH4frWFWpJxt2NMPQjF8/fUytUthMUvDxLGQpweCp7VRF05dZPLTMWCAoxuwavahJ8m0jDE/liobq1SKBGjG1jwx9/WqotunqdLiovTrc131uCK1854Wk3L8sLqTk/Q0aVbtewG9nufs0NySjQRR4ZdvTjv1qLV/OsJ7bUHuBLayRBXlg4ZCcYyD2z3quJJn1Ke8aR4IliWWKMnBmJ4BI/Gqkvc5Y7HmQ1k5zuntbt5nR31npFxbmC2gKNsx+9AbIAwODk/rWLLb6dHojWdmZFWJSWdmLFz346Ae1Sxakk1h9rjcYYY2k8g+n51VhtI9NMkUzNeJPE21gDlG7g46/WsYKU203t3NJwhSimldeRa02/tYbJYLRGihkTaXl5DcVhrcLbnHkxyBum8ZxVzSbuCK3kikmW7xHu/eKOOPu45qGCyS6VndmXacDbXSopVXY1w0v9nvIj+3+lrB/wB801r5zkeTAAf+mdW/7Ji6+c+foKadJTnE7f8AfNalc0Cilwyk5wGPG4gH+dN8x42+cZB7irx0gf8APc/98/8A16QaWUGBcAj0Kf8A16hx7GsayTvcrAhhkHNNfcSuGO3OSM8fWpJLGaElkBPuvIP4UxWyOcZHpWTujrjJVFYCeDU0cV9qSJGP3dvH3xgHHf3NMjTfMkfZmArfOc4xgdvQVlOfKTWV2kWPBlynhzwXrviRI1muPO8mIv0wMBc+2WyfpV27u7nSbW/jvNe1CfWRpzTtGVC26ZAIKHHUZxn/APVUfgJbO9sdZ8I6iuQ8hmRCcF0OOV9xhT+PtWzD4Fs0WWO81G/vvMt/sqmaQZji3Bto49RXpReiaPkKifO7mZaxt/wrfV5rwal5k1ruZtRk3bm25BjHZdx4rjnuN8dnZg8tsEpHbpxXa/EXVEt9Jt/Ddq264uNvmKp5jiXGM/Ugfka4mGL7MVkODICPwrGrHmaT6HfgtFKXc9I1iUve28R2BI58LtBz/q26n1rmmHmeJHSWIRgEMo9QvQj6810uqA6haxSWuPOdEngYt99h/D7ZGR+PtWEyTapqUMiWs9skK/6SZYyu3HYHuevSulO8PQ8mtTk6istxdXYfZbSM9WkL+h/zzXrPgmIQ+ENPULt3IW6Y6sTXj+sz79XSJCB5CY5PAJ5/wr2/Q42i0HT42+8ttGDj/dFY7zZ1yVopF+iiirMwooooAKKKKACkpaKAOJ+KMW/QbeTbnZPjPplT/hXkUvWvaviNAZvCMzAj9zIj/rt/9mrxKd5Izkx7h7UmdNAb0Oaha4ltYJrZD+6uCCSByPX+dNN9CDhwyn3FKbi1lQqZVwfXipaO9RUk4yWjIvDd7vkmsd2cMZIg/c9K2p5FBGXjARME4x/k1h/ZtsolgdGcHIYHBqcw3E5zPJgfXP8A9auSpRc5XR2YdqlDllK9gDG8ugxHyRADp6VZkRZUZGPDDr6UIixoEUYApR+npXTGCjGxnUqOcrkdrLDLAdMvvlRnA3k/dB6/4ikudGS5uJbOK4keC1fgN1K4GACenSlnt1nAP3XAwG/oaiWa6tMiRSyllYnr09D/AI1ly8l7BOCryTv6ruTaXYWVsrCR94kTPkMTtVs9M/nVWJVj1S6jsJpBGiEggF+Qfu57CrMl3pkm6VrR5JX+8jsDHnGM9M0yK5vHiaK1RYVc/MYhs3D0J9PpT0cddzD6tVVTTSKFmuw1ollbQiME5dVGMt6fnVqKMQxLGDnHU+9R21stuM/ecjBIHA+lTU4xsbTkrKMdkKKDRj8aKszGkE9qaTmnH1pnvjigBOQTg81n3T77l/8AZ+Wr7vsjZz0UZrL5PPc8ms6j0OzCxvLmHRR+dKEJIGCSRUzRSRAD7YUB6AnH9aLJeXf/AICKiurGea5eSN0CuACW6rgHjp70RgmtSMRWmp+6ONvcJNFfQX7Q3URBhnU4Oe3Oa2j428ZND5DXFkjkY+0CIbz746Z/CufOmOcCSdWVSCoOfXNNTTYIiGkudxBz1xmtYvlVkebUp+1lzSjqTJPCs081xctNdSMfOnl6se+KkWaKcsInDbeuKgNtZMGGT82cleScnP6Yp0YgtgfKRgG6k8fzoZrGMoq1tDsfDWsWs1mulahII3iYm3lbp9M1q6lqcWlQGWe6SeUD9zEpySccE+1ec/aYv4nX6ZyafHKGbMcbt7kYoTMZ0db30NBJJXkaZjukkYlia+kIIvIgjhByI0C59cDFfO2iwG51eyilHyyXCKQO4LCvoynHuclbcWiiirMQooooAKKKKACiiigDE8ZRed4S1FduSIt4/Ag/0rwSeZoz8yZHqK+jr+0S/wBOubORiqXETRMR1AYEE/rXh+v+B/FGhuxWwOo2oPyy2oLnHuv3h+WPekzei0nqcu13bMcOAP8AeFN8uxl5/d8+hxUMl9b+Y0VxbFJFOGVlwQfQikB02T1X86TPTjaxONPtn+7kfRqX+zUH3ZnWoRb2R+5cFf8AgVSLaDHyXrj8aRa9QaxlQfLduMf59a6zVfCCW9u81hcTt5scPkKz7gHY4cH8wR9a5b7Lc4wLwn6rXSDxRdLBPEIVIc27RBjwjxhQ2fZttNJMyqupdODIB4O1ZFujJqUOYIDKhQgrIQ2CuTjGOf09ai0fQ7vVbeF1vSjNeLBMAgIjjZc7/rwa0rnxDbXc8ySG7a3ntpIy0hVnR2YMMAYG0Yx61Q8P6rPpNvqcdwFdrm3KwFB92XkKT7cmiyuQpVeVt7kqeE9UkZ4obhWnWadVVohhkjxhsjuxIAFc99p1PcVMB3A4xsrsT4iiuNU06STMVvHZNDcuFJIlZSCQO4ziufu0aFYBZTLOWTMxdSux8ngeoxik1bYunOb+NFy+0Se2064ubTVIb2ezCG7hSEhU39Nr5w2O9Zumpeahepb3E0VjEQS88ykKoAz+J9BW/q01hHocdjod6pRMPLE8TK9xJ3JboAOwqhDBYm+hiurotaywgyTRqQYZSOhB6gHuKLChNuLv+RW1iyvdKktzBKLy3uovNik8ko2MkYKk5B4qfRtKuNTtXu76+XT4BKsEZ8gyF5G6cAjAHrVrxHfNeS2hglS9uIodlxdEGMSHJwAuOwqXRbu1bTDZalcC1MV2lyrIhcOo6r7Gi2thOcvZp21KGn6NcXeuT6Nf3xtLlJfKiMdt5okPOT1GBjnPvWVqC3trf3Ftbyi4ihkZEmCgCQDvXVWOqWL3ur39xcGzubslLVxGXMcZPJx/exxXOTxPHM8du6SQq2I3KkFh647UmtC4Sbk7lpNBuJ9U07TJrtlkuoPtF0dgxEuNwUAck7cfiat2/hrTZ9Wa3RtRWJbRrhoJohDMCGAAy3ykEHOe1Eut2tt4mtNXMhkiktRHOkX34W2bGxnv3FRXWr6Jdvb6fcLf3NnBA0aXRIE5dn3bsZwQOmCaiSi3qbR9so3V1oRSeFL+5v54bANZRIVCJeTjdIxGeCowcgE1VvtLVNKtLq3ZS/mSQXDeYzK7KRhh9QentXW6bqdndRXMjXC2Ma+XDAHZS8SIpAfB78npmuYvbu3Nla2Ns5Mdvvd3fgu7Hrj0AA/WtOWyOaNSpKVmZP2OT+/GP+2ef50fZSP+W5H+6gFTNPCvJkT86ia8gU58wH6DNTY3uxDaqfvSyt7FqQWsA58vP1Oaa1/COm5j9KiN/nhIiaWgnctqiL91FH0FSL1FZr3k/fZGD61uaR4R8S60yG10y6kjfBErr5UePXc2ARj0oMZtJas1vBi+d4v0uNMlvtCtgc8D5j/Kvfq888E/DafQNQi1XU7yN7mIN5cFvkopIIyWOCeCeMD8a9DrRKx5tSSctAoooqjMKKKKACiiigAooooAKKKKAKd9pOnaomzUNPtrtemJ4lf+Yrm7z4VeDbwlv7J8hjk5gmdP0zj9K7Cigak1szzS4+B2gOP9G1PUYW/22Rx+W0H9ay5/gS43G38Qr/siS0/mQ39K9epaVkaqvUXU8Pm+CfiOMEw6jp8nPALOp/8AQapTfCTxnAuY0tpvaO5AP/j2K99oosi1iqq6nzw3w48dxKWOlSED+7dRE/lvqIeBvG2fm0u6X6nP8s19GUUuUv65U8j51PgrxmmVOnXHH+zQPB3jMf8AMOuOf9mvoqijl8w+uVOyPnA+GfFaHm0cEdiVFQtoniZeDbOPxWvpWily+Y/rs+yPmc6V4iTrbyfgAajax14fet5R/wAA/wDrV9OUU+Uf12XZHy+1rrIxuimH/AD/AIUhsdaI4iuTkZG2Jz/SvqGijl8w+uz7I+YodE1qdf3Wi6jL3YrayH+lTx+EfE9yQkeg6ivubdl/nivpais1SV73NZZnVatZHznF8NvFtwwH9kXA7fOyL/Nqsp8JvFzsAdNVQerNdR4H5E19B0VfIjneLqHhMXwX8SyEB5NPiHctOzfyStK2+Bt+w/0rWrSI+kVu0n6lhXsdLT5UQ8TVfU8wtfgdpSH/AEvWb2Tj/likcfP4hq27P4TeELUDzbKa7YD71xcOc/gCB+ldnRTsjN1Zvdmfp/h/RdKO7TtKs7Vv70MCq35gZrRoopmYUUUUAFFFFABRRRQB/9k=',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/510W%2BLZjFPL.SX349_SY500_CR,0,0,349,500_PIbundle-6,TopRight,0,0_SX349_SY500_CR,0,0,349,500_SH20_.jpg',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81irEF6Sc8L._SX522SX522_SY653_CR,0,0,522,653_PIbundle-6,TopRight,0,0_SX522_SY653_CR,0,0,522,653_SH20_.jpg',
          channel: {
            name: 'Gibi ASMR ',
            img: 'https://yt3.ggpht.com/-v-8oPg2kcUg/AAAAAAAAAAI/AAAAAAAAAAA/8CUnL1z8f9w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        {
          title: '[ASMR] Personal Shopper Roleplay 2 | Healthy Products & Candles (Soft Spoken)',
          date: '2 maj 2017',
          src: 'https://www.youtube.com/embed/kAGBPJBJw1c?autoplay=1',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71nx%2BbQpciL._SX522SX522_SY450_CR,0,0,522,450_PIbundle-15,TopRight,0,0_SX522_SY450_CR,0,0,522,450_SH20_.jpg',
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
  color: #333333;
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: -20px;
}

.desc {
  color: gray;
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: 20px;
  font-size: 16px;
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
  background-color: #ffffff;
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
  margin-bottom: 80px;
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
  max-width: 245px;
  height: 140px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fafafa;
  border-radius: 10px;
  margin: 5px;
}

.slide:hover .image {
  transform: scale(0.7);
  opacity: 0.5;
}

.slide .image {
  width: 100%;
  height: auto;
  opacity: 1;
  transition: all .3s cubic-bezier(.22,.68,0,1.71);
  border-radius: 10px;
  transform: scale(0.5);
}

.video-detail {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 450px;
  background-color: #fafafa;
  margin-top: 10px;
}

.detail-images {
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  /*border: 2px solid #EFEFEF;*/
  border-radius: 10px;
  margin-left: 40px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail-image {
  width: 300px;
  height: auto;
}
</style>
