<template>
<div class="background">
    <div class="background-overlay">
        <h2>Welcome to Pizza Planet</h2>
        <img src="../assets/images/roller.png" alt="roller img">
        <h3>Feeling Hungry</h3>
        <button class="order-button" @click="goToMenu">Let's Order</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        goToMenu() {
            this.$router.push({
                name: 'menuLink'
            })
        }
    }
}
</script>

<style>
h1,
h2 {
    margin: 2%;
}

.background {
    background: url("../assets/images/dough.jpg") center;
    background-size: cover;
    height: 30vh;
    display: flex;
    text-align: center;
    /* vertically align box center */
    align-items: center;
}

.background-overlay {
    display: flex;
    flex-direction: column;
    background: #f1e6da;
    opacity: 0.8;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    align-items: center;
}

.background-overlay>img {
    max-width: 15%;
}

.order_btn {
    background: #f79f38;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>
