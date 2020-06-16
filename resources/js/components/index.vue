<template>
    <v-app>
        <h1>hola mundo de la vida</h1>
        <v-btn @click.prevent="ema" >hola</v-btn>
    </v-app>

</template>

<script>
    export default {
        name: "index",
        methods:{
            ema(){
                console.log('no fin');
                this.$router.push('/exa');

            }
        }
    }
</script>

<style scoped>

</style>
