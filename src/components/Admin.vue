<template>
    <div class="admin_wrapper">
        <div class="current_user_wrapper"></div>
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
                <tbody>
                    <tr>
                        <td>Magarita</td>
                        <td>
                        <button type="button" class="red_btn">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="order_wrapper">
            <h3>current orders</h3>
            <table>
                <thead>
                    <tr>
                        <th>item</th>
                        <th>size</th>
                        <th>quantity</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="order_number">
                        <th colspan="4">
                            <strong>order Number: 4 </strong>
                            <button type="button" class="btn_red">&times;</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Magarita</td>
                        <td>9"</td>
                        <td>2</td>
                        <td>$13</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Login />
    </div>
</template>

<script>
import NewPizza from '../components/NewPizza'
import Login from '../components/Login';

export default {
    name: "admin",
    components: {
        NewPizza,
        Login
    }
};
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}

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