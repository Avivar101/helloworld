<template>
<header>
    <div class="header_logo">
        <img src="../assets/images/planet.png" alt="logo">
        <h1 href="/">Pizza Planet</h1>
    </div>
    <nav>
        <ul>

            <router-link :to="{name: 'homeLink'}" tag="li">
                <a> Home </a>
            </router-link>
            <!-- <a href="/">home</a> -->
            <span>~</span>

            <router-link :to="{name: 'menuLink'}" tag="li">
                <a> Menu </a>
            </router-link>
            <!-- <a href="/menu">menu</a> -->
            <span>~</span>

            <router-link :to="{name: 'contactLink'}" tag="li">
                <a> Contact </a>
            </router-link>
            <!-- <a href="/contact">contact</a> -->
            <span>~</span>

            <router-link :to="{name: 'aboutLink'}" tag="li">
                <a> About </a>
            </router-link>
            <!-- <a href="/about">about us</a> -->
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    name: 'appHeader'
}
</script>

<style scoped>
h1 {
    font-size: 1.3em;
}

.header_logo {
    background-size: 80px 80px;
    display: flexbox;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}

.header_logo img {
    max-width: 25vw;
}

li {
    display: inline-block;
}

@media screen and (min-width: 900px) {
    .header_logo img {
        max-width: 20vw;
    }
}
</style>
