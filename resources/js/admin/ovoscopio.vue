<template>
    <div>
        <v-container >
            <v-card >
                <v-card-title>Ovoscopio</v-card-title>
            </v-card>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12" md="12" offset-md="12">
                    <v-card>
                        <v-container fluid>
                            <v-row>
                                <v-col class="d-flex child-flex" cols="6">
                                    <v-card style="background: aliceblue; color: black;">
                                        <v-card-title>Camara del Huevo</v-card-title>
                                        <hr>
                                        <v-card-text>
                                            <iframe src="http://192.168.0.7" style="width: 80%; height: 50vh; margin-left: 10%; " frameborder="0"></iframe>

                                        </v-card-text>

                                    </v-card>

                                </v-col>
                                <v-col class="d-flex child-flex" cols="6">
                                    <v-card style="background: aliceblue; color: black;">
                                        <v-card-title>Huevo Ejemplar</v-card-title>
                                        <hr>
                                        <v-card-text></v-card-text>


                                    </v-card>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "ovoscopio"
    }
</script>

<style scoped>

</style>