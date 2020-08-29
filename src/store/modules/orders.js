import { menuOrder } from "../../firebase"
import { firestoreAction } from 'vuexfire'
const state = {
    orders: [],
}


const getters = {
    numberOfOrders: state => state.orders.length,
    getOrders: state => state.orders
}

const mutations = {
    addOrder: (state, orders)=> state.orders.push(orders)
}

const actions = {
    setOrderRef: firestoreAction(context => {
        return context.bindFirestoreRef('orders', menuOrder)
    }),
    addNewOrder: async(context, order) => {
        try {
            await   menuOrder.add(order)
        }
        catch(error) {
            alert('unable to place order, pls try again')
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};