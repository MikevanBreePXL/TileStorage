<template>
    <div class="flex justify-center align-center">
        <h4 class="text-center">This website is made using:</h4>
        <ul>
            <li class="animate__animated slideInLeft animation_1 button_style">Vue 3</li>
            <li class="animate__animated slideInLeft animation_2 button_style">Vue Router</li>
            <li class="animate__animated slideInLeft animation_3 button_style">Vite</li>
            <li class="animate__animated slideInLeft animation_4 button_style">Vite PWA</li>
            <li class="animate__animated slideInLeft animation_5 button_style">Pinia</li>
            <li class="animate__animated slideInLeft animation_6 button_style">Tailwind CSS</li>
            <li class="animate__animated slideInLeft animation_7 button_style">Vuetify</li>
            <li class="animate__animated slideInLeft animation_8 button_style">Animate.css</li>
        </ul>
    </div>
</template>

<style scoped>
@keyframes slideInLeft {
  from {
    transform: translate3d(-100vw, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
.slideInLeft {
  animation-name: slideInLeft;
}

ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button_style {
    font-weight: bold;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    margin-block: 0.125rem;
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
    background: linear-gradient(135deg, #eeeeee 31%, #4aa6c0 34%, #4aa6c0 64%, #f7d94b 67%);
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
    background: linear-gradient(135deg, #38bdf8 34%, #00000000 37%, #00000000 42%, #38bdf8 45%, #38bdf8 55%, #00000000 58%, #00000000 63%, #38bdf8 66%);
    color: #eee;
}
.animation_7 {
    animation-delay: 3.25s;
    animation-duration: 1.5s;
    background-color: #aeddff;
    color: #1697f6;
}
.animation_8 {
    animation-delay: 3.75s;
    animation-duration: 1.5s;

    /* Text gradiented */
    background: linear-gradient(125deg, #623ac8 48%, #a26524 52%);
    color: #ffd3a5;
}
</style>
