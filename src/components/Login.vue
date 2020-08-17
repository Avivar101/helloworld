<template>
    <div class="login_wrapper">
        <form>
            <div>
                <label for="email">Email Address</label>
                <input type="email" v-model="email" id="email" placeholder="enter email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" placeholder="password">
            </div>
            <button type="button" class="btn_green" @click.prevent="signIn">Sign up</button>
        </form>
    </div>
</template>

<script>
import { firebaseAuth } from '../firebase'
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods : {
       async signIn() {
           try {    
               await firebaseAuth.signInWithEmailAndPassword(
                   this.email,
                   this.password
               );
           }
           catch(error) {
               const errorCode = error.code
               const errorMessage = error.message
               if(errorCode === 'auth/wrong-password') {
                   alert('wrong password')
               } else {
                   alert(errorMessage)
               }
           }
        }
    }
}
</script>