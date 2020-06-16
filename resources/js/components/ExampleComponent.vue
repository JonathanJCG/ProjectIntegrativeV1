<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.<h1>condori</h1> jajajjaj
                        <br><br>
                        <v-btn @click.prevent="ss">inde</v-btn>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.');

        },
        methods:{
            ss(){
                this.$router.push('/');
            }
        }
    }
</script>
