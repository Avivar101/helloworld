<template>
<section>
    <div class="current_user_wrapper">
        <span>Logged in as:</span>
        {{currentUser}}
        <button type="button" class="btn_red" @click.prevent="signOut">Sign out</button>
    </div>
    <NewPizza />
    <div class="menu_wrapper">
        <h3>Menu</h3>
        <table>
            <thead>
                <tr>
                    <th>item</th>
                    <th>remove from menu</th>
                </tr>
            </thead>
            <tbody v-for="item in getMenuItems" :key="item.id">
                <tr>
                    <td>{{ item.name }}</td>
                    <td>
                        <button type="button" class="red_btn" @click="removeMenuItem(item.id)">&times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="order_wrapper">
        <h3>current orders ({{numberOfOrders}}):</h3>
        <table>
            <thead>
                <tr>
                    <th>item</th>
                    <th>size</th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody v-for="(order, index) in getOrders" :key="order.id">
                <tr class="order_number">
                    <th colspan="4">
                        <strong>Order Number: {{index + 1}}</strong>
                        <button type="button" class="btn_red" @click="removeOrder(order.id)">&times;</button>
                    </th>
                </tr>
                <tr v-for="orderItem in order.pizza" :key="orderItem.id">
                    <td>{{orderItem.name}}</td>
                    <td>{{orderItem.size}}"</td>
                    <td>{{orderItem.quantity}}</td>
                    <td>{{orderItem.price | currency }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
</template>

<script>
import NewPizza from '../components/NewPizza';
import {
    store
} from '../store/store';
import {
    mapGetters
} from 'vuex';

export default {
    name: "adminContent",
    components: {
        NewPizza
    },
    computed: {
        ...mapGetters([
            'getMenuItems',
            'numberOfOrders',
            'currentUser',
            'getOrders'
        ])
    },
    methods: {
        async signOut() {
            store.dispatch('signOut')
        },
        removeMenuItem(id) {
            store.dispatch('removeMenuItem', id)
        },
        removeOrder(id) {
            store.dispatch('removeOrder', id)
        }

    },
    beforeRouteLeave: (to, from, next) => {
        if (confirm("You will be logged out when leaving admin?") == true) {
            store.dispatch("signOut");
            next();
        } else {
            next(false);
        }
    }
};
</script>

<style scoped>
.current_user_wrapper,
.orders_wrapper,
.menu_wrapper {
    margin: 10px 0;
    padding: 10px;
    border: solid 1px #f79e38;
    background: rgb(254, 254, 252);
}

table {
    text-align: left;
    width: 70vw;
}

.order_number th {
    background: #ddd;
}

.order_number button {
    margin: 0 10px;
}
</style>
