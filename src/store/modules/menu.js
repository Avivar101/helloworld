import {  firestoreAction } from 'vuexfire'
import { dbMenuRef } from "../../firebase";
const state = {
    menuItems: []
}

const getters = {
    getMenuItems: state => state.menuItems
};

const mutations = {};

const actions = {
    setMenuRef: firestoreAction(context => {
        return context.bindFirestoreRef('menuItems', dbMenuRef)
    }),
    addMenuItem: async(context, pizza) => {
        try{
            await dbMenuRef.add(pizza)
        }
        catch(error) {
            alert(`error creating new pizza, ${error}`)
        }
    },
    removeMenuItem: async(context, id) => {
        try {
            const item = dbMenuRef.doc(id)
            item.delete()
        }
        catch(error) {
            alert(`error removing items, ${error}`)
        }
    }
};

export default {
    state,
    mutations,
    getters,
    actions,
  };