<template>
    <div class="top-bar d-flex justify-center w-vw bg-white">
        <RouterLink to="/entry"><img src="../assets/TegelsLogo.png" alt="Logo" class="logo my-5 flex justify-center"></RouterLink>
    </div>
    <div class="top-bar-gradient mb-2">
    </div>
</template>

<style scoped>
.top-bar {
    width: 100dvw;
}
.top-bar-gradient {
    height: 0.5em;
    background: linear-gradient(to bottom, white, transparent);
    margin-top: -1px;
}
.logo {
    max-width: 70vw;
    height: auto;
}
</style>
