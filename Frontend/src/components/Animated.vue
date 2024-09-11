<template>
    <h3 class="antialiased text-2xl">This website is made using:</h3>
    <div>
        <li class="animate__animated slideInLeft animation_1 hide-bullet-point">Vue 3</li>
        <li class="animate__animated slideInLeft animation_2 hide-bullet-point">Vue Router</li>
        <li class="animate__animated slideInLeft animation_3 hide-bullet-point">Vite</li>
        <li class="animate__animated slideInLeft animation_4 hide-bullet-point">Vite PWA</li>
        <li class="animate__animated slideInLeft animation_5 hide-bullet-point">Pinia</li>
        <li class="animate__animated slideInLeft animation_6 hide-bullet-point">Tailwind CSS</li>
        <li class="animate__animated slideInLeft animation_7 hide-bullet-point">Vuetify</li>
        <li class="animate__animated slideInLeft animation_8 hide-bullet-point">Animate.css</li>
    </div>
</template>

<style scoped>
@keyframes slideInLeft {
  from {
    transform: translate3d(-60vw, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
.slideInLeft {
  animation-name: slideInLeft;
}

.hide-bullet-point {
    list-style-type: none;
}
.animation_1 {
    animation-delay: 0.25s;
    animation-duration: 1.5s;
    color: #41b883;
}
.animation_2 {
    animation-delay: 0.75s;
    animation-duration: 1.5s;
    color: #496684;
}
.animation_3 {
    animation-delay: 1.25s;
    animation-duration: 1.5s;

    /* Text gradiented */
    background: #5AB4FF;
    background: linear-gradient(135deg, #5AB4FF 49%, #BD34FE 52%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.animation_4 {
    animation-delay: 1.75s;
    animation-duration: 1.5s;
    
    /* Text gradiented */
    background: linear-gradient(90deg, rgba(238,238,238,1) 45%, rgba(74,166,192,1) 46%, rgba(74,166,192,1) 53%, rgba(247,217,75,1) 54%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.animation_5 {
    animation-delay: 2.25s;
    animation-duration: 1.5s;
    color: #ffd34f;
}
.animation_6 {
    animation-delay: 2.75s;
    animation-duration: 1.5s;
    color: #38bdf8;
}
.animation_7 {
    animation-delay: 3.25s;
    animation-duration: 1.5s;
    color: #1ad1a5;
}
.animation_8 {
    animation-delay: 3.75s;
    animation-duration: 1.5s;

    /* Text gradiented */
    background: linear-gradient(125deg, #623ac8 48%, #e69138 52%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
