<template>
    <div>
        <v-container>
            <v-card>
                <v-card-title>
                    Incubadoras<label >{{temperatura}}</label>
                </v-card-title>
            </v-card>
        </v-container>
        <v-container>
            <v-card>
                <v-row>
                    <v-col cols="12" sm="12" offset-sm="12">
                        <v-card>
                            <v-container fluid>
                                <v-row>
                                    <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                                        <v-card style="background: aliceblue; color: black;">
                                            <v-card-title>Incubadora N° {{n}}</v-card-title>
                                            <hr>
                                            <v-card-text>
                                                <v-img style="width: 100px; margin: auto;" :src="`https://incubadoradehuevos.top/wp-content/uploads/2019/03/la-INCUBADORA-SAILNOVO-1.png`"></v-img>
                                                <br>
                                                <table style="color: black; width: 80%; margin: auto; text-align: justify-all;">
                                                    <tr>
                                                        <td width="50%">Huemadad:</td>
                                                        <td width="50%">70%</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Temperatura</td>
                                                        <td width="50%">63°</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Cantidad huevos</td>
                                                        <td width="50%">52</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Inicio</td>
                                                        <td width="50%">55</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Desechados</td>
                                                        <td width="50%">3</td>
                                                    </tr>
                                                </table>



                                            </v-card-text>

                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "incubadoras",
        data: () => ({
            temperatura:[],
        }),
        mounted() {
            console.log('hola')
            axios.get('localhost/sensor/datos.php').then((result) => {
                console.log(result.data)
            })
            //const url = new URL('http://midominio.com/ruta/?param1=valor1&param2=valor2')
            const url = new URL('https://localhost/sensor/datos.php')

            const searchParams = url.searchParams

            const keys = [...searchParams.keys()]

            const object1 = keys
                .reduce((obj, key) =>({...obj, [key]: searchParams.get(key) }), {})
            const object2 = [...searchParams.entries()]
                .reduce((obj, [key, value]) => ({...obj, [key]: value }), {})

            console.log(object1)
            console.log(object2.Hum)

           this.temperatura = object1.Temp

        }
    }
</script>

<style scoped>

</style>
