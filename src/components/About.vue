<template>
<div>
    <h3>Click ON the links below</h3>
    <nav>
        <ul>
            <router-link :to="{name: 'historyLink'}" tag="li">
                <a class="nav-link">Our History</a>
            </router-link>
            <span>~</span>
            <router-link :to="{name: 'deliveryLink'}" tag="li">
                <a class="nav-link">Delivery</a>
            </router-link>
            <span>~</span>
            <router-link :to="{name: 'orderingGuideLink'}" tag="li">
                <a class="nav-link">Ordering Guide</a>
            </router-link>
        </ul>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'about',

}
</script>

<style>
/* div {
    flex: 1 0 auto;
    } */
h3 {
    text-align: center;
}

body {
    font-family: "Crimson Text", "sefif";
    margin: 0;
    font-size: 1.5em;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 10px 0;
    background: #f1e6da;
}

li {
    list-style: none;
}
</style>
