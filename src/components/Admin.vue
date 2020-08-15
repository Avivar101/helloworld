<template>
    <div class="admin_wrapper">
        <div class="current_user_wrapper"></div>
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
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "admin"
}
</script>