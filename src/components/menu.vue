<template>
    <div class="menu_wrapper">
        <div class="imenu">
            <h3>~ Authenic handmade pizza ~</h3>
            <table v-for= "item in getMenuItems" :key="item.name">
                <tbody>
                    <tr>
                        <td><strong>~{{item.name}}~</strong></td>
                    </tr>
                    <tr>
                        <td><small>{{item.description}}</small></td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="option[index]">
                        <td>{{option.size}}"
                        </td>
                        <td>${{option.price}}
                        </td>
                        <td>
                            <button type="button" class="btn_green" @click="addToBasket(item, option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- shopping basket -->
        <div class="basket">
            <h3>~Cart~</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button class="btn_green">&#8722;</button>
                            <span>2</span>
                            <button class="btn_green">&#43;</button>
                        </td>
                        <td>Pepperoni 9"</td>
                        <td>$6.95</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            basket: [],
            getMenuItems: {
                1: {
                name: 'Margherita',
                description: 'A delicious tomato based pizza topped with mozzarella',
                options: [
                    {
                    size: 9,
                    price: 6.95
                }, {
                    size: 12,
                    price: 10.95
                }]
                },

                2: {
                name: 'Pepperoni',
                description: 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                options: [
                    {
                    size: 9,
                    price: 7.95
                }, {
                    size: 12,
                    price: 12.95
                }]
                },

                3: {
                name: 'Ham and Pineapple',
                description: 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
                options: [
                    {
                    size: 9,
                    price: 7.95
                }, {
                    size: 12,
                    price: 12.95
                }]
                }   
            }
        }
    },
    methods: {
        async addToBasket(item, option) {
            const pizzaExist = await this.basket.find (
                pizza => pizza.name === item.name && pizza.size === option.size
            )
            if(pizzaExist){
                pizzaExist.quantity++
                return
            }
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1

            })
        }
    }
}
</script>


<style scoped>
h3 {
  text-align: center;
}

.menu_wrapper {
  display: flex;
  flex-direction: column;
}

.imenu,
.basket {
  background: #f1e6da;
  border-radius: 3px;
  height: 100vh;
  margin: 10px;
  padding: 10px;
}

@media screen and (min-width: 900px) {
  .menu_wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .imenu {
    width: 65vw;
  }
  .basket {
    width: 35vw;
  }
}
</style>