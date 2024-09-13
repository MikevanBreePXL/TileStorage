<template>
    <div class="flex justify-center align-center">
        <h4 class="text-center mb-2">This website is made using:</h4>
        <ul class="ga-2">
            <a href="https://vuejs.org/" target="_blank"><li class="animate__animated slideInLeft animation_1 button_style">Vue 3</li></a>
            <a href="https://router.vuejs.org/" target="_blank"><li class="animate__animated slideInLeft animation_2 button_style">Vue Router</li></a>
            <a href="https://vitejs.dev/" target="_blank"><li class="animate__animated slideInLeft animation_3 button_style">Vite</li></a>
            <a href="https://vite-pwa-org.netlify.app/" target="_blank"><li class="animate__animated slideInLeft animation_4 button_style">Vite PWA</li></a>
            <a href="https://pinia.vuejs.org/" target="_blank"><li class="animate__animated slideInLeft animation_5 button_style">Pinia</li></a>
            <a href="https://tailwindcss.com/" target="_blank"><li class="animate__animated slideInLeft animation_6 button_style">Tailwind CSS</li></a>
            <a href="https://vuetifyjs.com/" target="_blank"><li class="animate__animated slideInLeft animation_7 button_style">Vuetify</li></a>
            <a href="https://animate.style/" target="_blank"><li class="animate__animated slideWithAttention animation_8 button_style">Animate.css</li></a>
        </ul>
    </div>
</template>

<style scoped>
.slideWithAttention {
  visibility: hidden;
  transform: translate3d(-100vw, 0, 0); /* Start off-screen */
  animation: slideInLeft 1.5s ease forwards 3.75s, tada 1s ease forwards 5.25s;
  animation-fill-mode: forwards;
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-100vw, 0, 0);
    visibility: hidden;
  }
  to {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
}

.slideInLeft {
  animation-name: slideInLeft;
  animation-duration: 3s;
}

ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button_style {
    font-size: 150%;
    font-weight: bold;
    padding: 0.33rem 1rem;
    border-radius: 2rem;
}

.animation_1 {
    animation-delay: 0.25s;
    animation-duration: 1.5s;
    background-color: #42b883;
    color: #35495e;
}
.animation_2 {
    animation-delay: 0.75s;
    animation-duration: 1.5s;
    background-color: #496684;
    color: #42b883;
}
.animation_3 {
    animation-delay: 1.25s;
    animation-duration: 1.5s;

    /* Text gradiented */
    color: #f7d94b;
    background: linear-gradient(135deg, #5AB4FF 49%, #BD34FE 52%);
}
.animation_4 {
    animation-delay: 1.75s;
    animation-duration: 1.5s;
    
    /* Text gradiented */
    color: #496684;
    background: linear-gradient(135deg, #eeeeee 32%, #4aa6c0 34%, #4aa6c0 64%, #f7d94b 66%);
}
.animation_5 {
    animation-delay: 2.25s;
    animation-duration: 1.5s;
    color: #ffd34f;
    background-color: #51b65c;
}
.animation_6 {
    animation-delay: 2.75s;
    animation-duration: 1.5s;
    background: linear-gradient(135deg, #38bdf8 35%, #00000000 37%, #00000000 42%, #38bdf8 44%, #38bdf8 56%, #00000000 58%, #00000000 63%, #38bdf8 65%);
    color: #eee;
}
.animation_7 {
    animation-delay: 3.25s;
    animation-duration: 1.5s;
    background-color: #aeddff;
    color: #1697f6;
}
.animation_8 {
    /* Text gradiented */
    background: linear-gradient(125deg, #623ac8 49%, #a26524 52%);
    color: #ffd3a5;
}
</style>
