<template>
    <header style="background: gray;">
        <div class="container">
            <div class="row">


                <div class="col-6 img" >
                    <img src="./pol.png">

                    <h1>

                        Pollos "AMIGOS"

                    </h1>
                </div>

                <div class="col-6 form" >


                    <form id="login" @submit.prevent="login">
                        <center id="img">
                            <img src="./pol.png">
                        </center>	<br>

                        <span>
							ingresar cuenta
							</span><br><br>
                        <input type="text" name="usu" placeholder="ingresar el usuario" v-model="logi.user"><br><br>
                        <input type="password" name="pas" placeholder="ingresar el password" v-model="logi.password"><br>
                        <br><br>
                        <v-btn type="submit">INGRESAR</v-btn>
                        <span id="sbloq"></span>
                    </form>
                    <span></span>
                </div>
            </div>

        </div>

    </header>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "login",
        data:()=>({
            logi: [
                {user: null},
                {password: null}
            ]
        }),

        methods:{
            login(){
                /*axios.get('users/All').then((result) => {
                    console.log(result.data);
                });*/

                this.$auth.login({
                    success:function (a) {
                        console.log(a)

                    }
                });

                console.log(this.logi.user)

                //this.$router.push('/inicio');
            }
        }
    }
</script>

<style scoped>

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body{


        background: #E1E1E1;
    }
    header{
        text-align: center;

        width: 100%;
        min-height: 100vh;
        /*max-height: 500px;*/
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        z-index: 1;
    }
    header::before{
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;

        top: 0;
        left: 0;

    }
    header div{

        width: 100%;
        min-height: 500px;
        max-height: 700px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        z-index: 1;

    }
    .cel{
        display: none;
    }
    .img{
        border-radius: 50px 0 0 50px;
        background: white;
    }
    #img img{
        display: none;

    }
    .form{
        border-radius: 0 50px 50px 0;
        background: #25dfc3;
        font-family: Poppins-Regular;
        color: white;
        width: 100%;


    }
    form{
        width: 100%;
    }
    .form input[type="text"], .form input[type="password"]{
        border: none;
        background: transparent;
        border-bottom: 2px solid;
        outline: none;

        width: 90%;
        color: white;
        text-align: center;
    }
    .form input[type="text"]::placeholder, .form input[type="password"]::placeholder{
        color: white;
    }
    .form span{
        font-size: 25px;
        line-height: 1.5;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
        width: 100%;

    }




    @-webkit-keyframes loading1{
        50% {
            -webkit-transform: rotate(180deg)
        }
        100% {
            -webkit-transform: rotate(360deg)
        }
    }
    @keyframes loading1{
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg)
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
    @-webkit-keyframes loading2{
        50% {
            -webkit-transform: rotate(-180deg)
        }
        100% {
            -webkit-transform: rotate(-360deg)
        }
    }
    @keyframes loading2{
        50% {
            -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg)
        }
        100% {
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg)
        }
    }


    @media (max-width: 992px) {

    }

    @media (max-width: 768px) {

        .img{
            display: none;
        }

        .form{
            width: 100%;
            border-radius: 50px;
            min-height: 70vh;
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
        .form #img img{
            display: flex;
            width: 40%;
            top: -50px;
        }
        .form span{
            width: 100%;
            font-size: 1.5rem;
        }


    }
    @media (max-width: 576px) {

        .img{
            display: none;
        }

        .form{
            border-radius: 50px;
            min-height: 70vh;

        }
        .form img{
            width: 40%;
            top: -50px;
        }
        .form span{
            width: 100%;
            font-size: 0.9rem;
        }

    }
</style>
