<template>
    <div>
        <v-container>
            <v-card>
                <v-card-title>
                    Usuarios
                </v-card-title>
            </v-card>
        </v-container>
        <v-container id="uac">
            <v-card>
                <v-card-title><v-icon>mdi-account-check</v-icon> Usuarios Activos</v-card-title>
                <hr>
                <v-simple-table height="65vh">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">#</th>
                            <th class="text-left">Nombres</th>
                            <th class="text-left">Apellidos</th>
                            <th class="text-left">Tel/Cel</th>
                            <th class="text-left">Correo</th>
                            <th class="text-left">Estado</th>
                            <th class="text-left">Acciones</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, i) in usersAc" :key="i">
                            <td>{{i=i+1}}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.ap}} {{item.am}}</td>
                            <td>{{item.tel}}</td>
                            <td>{{item.correo}}</td>
                            <td>{{item.estado}}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>

        </v-container>
        <v-container id="uin">
            <v-card>

                <v-card-title><v-icon>mdi-account-remove</v-icon> Usuarios Inactivos</v-card-title>
                <hr>
                <v-simple-table height="65vh">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">#</th>
                            <th class="text-left">Nombres</th>
                            <th class="text-left">Apellidos</th>
                            <th class="text-left">Tel/Cel</th>
                            <th class="text-left">Correo</th>
                            <th class="text-left">Estado</th>
                            <th class="text-left">Acciones</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, i) in usersAc" :key="i">
                            <td>{{i=i+1}}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.ap}} {{item.am}}</td>
                            <td>{{item.tel}}</td>
                            <td>{{item.correo}}</td>
                            <td>{{item.estado}}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>

        </v-container>
        <v-container>
            <v-card>
                <v-data-table
                        :headers="headers"
                        :items="usersAc"

                        sort-by="calories"
                        class="elevation-1"
                >

                    <template v-slot:item.apellidos="{item}">
                        <span>{{item.ap}} {{item.am}}</span>
                    </template>
                    <template v-slot:item.action="{item}">
                        <v-icon
                        pig
                        color="orange"
                        class="mr-2"
                        @click="editItem(item)"
                        >
                            mdi-border-color
                        </v-icon>
                        <v-icon
                        pig
                        color="red"
                        @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:item.state="{ item }">
                        <div v-show="item.estado==1">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-icon
                                            small
                                            class="mr-2"
                                            dark v-on="on"
                                            text icon color="green lighten-2"
                                            @click="editStatusItem(item)"
                                    >
                                        mdi-thumb-up
                                    </v-icon>
                                </template>
                                <span>Deshabilitar</span>
                            </v-tooltip>
                        </div>
                        <div v-show="item.estado==0">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-icon
                                            small
                                            class="mr-2"
                                            dark v-on="on"
                                            text icon color="red lighten-2"
                                            @click="editStatusItem(item)"
                                    >
                                        mdi-thumb-down
                                    </v-icon>
                                </template>
                                <span>Habilitar</span>
                            </v-tooltip>
                        </div>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "users",
        data:()=>({
            desserts:[
                {name: 'hola', calories: 'mundo'},
                {name: 'mari', calories: 'loca'},
                {name: 'carla', calories: 'se te ve la falda'},
            ],
            usersAc:[],
            headers:[
                {text:'N°', align:'left', sortable:'false', value:'id'},
                {text: 'NOMBRE', value: 'name'},
                {text: 'APELLIDOS', value: 'apellidos'},
                {text: 'TEL/CEL', value: 'tel'},
                {text: 'CORREO', value: 'correo'},
                {text: 'ESTADO', value: 'state'},
                {text: 'ACCIONES', value: 'action'}
            ],

        }),
        mounted() {
            axios.get('http://localhost:3000/users')
                .then((result)=>{
                    console.log(result.data)
                     this.usersAc = result.data;
                }
            )
        },
        created: function() {
            this.fetchEventsList();
        },
        methods:{
            reloadPage() {
                window.location.hotReload
            },
            editItem(it){
                console.log(it.id);
            },
            editStatusItem(b){
                if (b.estado == 1){
                    axios.put('http://localhost:3000/delete_users/'+b.id,
                        {'estado':0}
                        ).then((result)=> {
                            console.log(result.data)
                        this.usersAc.filter(
                            axios.get('http://localhost:3000/users')
                            .then((result)=>{
                                    console.log(result.data)
                                    this.usersAc = result.data;
                                }
                            ))
                    })
                }else{
                    axios.put('http://localhost:3000/state_users/'+b.id,
                        {'estado':1}
                    ).then((result)=> {
                        console.log(result.data)
                        this.usersAc.filter(axios.get('http://localhost:3000/users')
                            .then((result)=>{
                                    console.log(result.data)
                                    this.usersAc = result.data;
                                }
                            ))

                    })
                }
            },
            deleteItem(c){
                axios.put('http://localhost:3000/delete_users/'+c.id,
                    {'estado':0}
                ).then((result)=> {
                    console.log(result.data)
                    this.reloadPage();
                })
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
</style>
