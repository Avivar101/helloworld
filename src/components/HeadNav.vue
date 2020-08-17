<template>
    <header>
        <div class="header_logo">
            <img src="../assets/images/planet.png" alt="logo">
            <h1 href="/">Pizza Planet</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/" >
                        <a> Home </a>
                    </router-link>
                    <!-- <a href="/">home</a> -->
                </li><span>~</span>
                <li>
                    <router-link to="/menu" >
                        <a> Menu </a>
                    </router-link>
                    <!-- <a href="/menu">menu</a> -->
                </li><span>~</span>
                <li>
                     <router-link to="/contact" >
                        <a> Contact </a>
                    </router-link>
                    <!-- <a href="/contact">contact</a> -->
                </li><span>~</span>
                <li>
                     <router-link to="/about" >
                        <a> About </a>
                    </router-link>
                <!-- <a href="/about">about us</a> --></li>
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