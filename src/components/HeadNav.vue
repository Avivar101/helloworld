<template>
    <header>
        <div class="header_logo">
            <img src="../assets/images/planet.png" alt="logo">
            <h1 href="/">Pizza Planet</h1>
        </div>
        <nav>
            <ul>
                <li><a href="/">home</a></li><span>~</span>
                <li><a href="/menu">menu</a></li><span>~</span>
                <li><a href="/contact">contact</a></li><span>~</span>
                <li><a href="/about">about us</a></li>
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

    @media screen and (min-width: 900px){
        .header_logo img {
        max-width: 20vw;
    }
    }

</style>