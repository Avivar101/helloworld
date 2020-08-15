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
            <div v-if="basket.length > 0" >
                <table>    
                    <tbody v-for="(item, option, index) in basket" :key="index">
                        <tr>
                            <td>
                                <button class="btn_green" @click="decreaseQuantity(item)">&#8722;</button>
                                <span>{{ item.quantity}}</span>
                                <button class="btn_green" @click="increaseQuantity(item)">&#43;</button>
                            </td>
                            <td>{{item.name}} {{item.size}}</td>
                            <td>{{Math.round(item.price * item.quantity)}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total</p>
                <button class="btn_green">Place order</button>
            </div>
            <div v-else><p>{{basketText}}</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            basket: [],
            basketText: "Your basket is Empty",
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
        },

        removeFromBasket(item) {
            this.basket.splice(this.basket.indexOf(item), 1)
        },

        increaseQuantity(item) {
            item.quantity++;
        },

        decreaseQuantity(item) {
            item.quantity--;
            if(item.quantity === 0) {
                this.removeFromBasket(item);
            }
        },
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