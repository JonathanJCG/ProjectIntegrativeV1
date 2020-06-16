<template>
    <div>
        <v-navigation-drawer v-model="drawer" app clipped>


            <v-list dense>
                <v-list-group
                        v-for="(item, i) in itema"
                        :key="i"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                        @click="menudi(item.title)"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                            v-for="(subItem, a) in item.items" :key="a" link @click="moveritem(subItem.title)"
                    >
                        <v-list-item-icon><v-icon>{{subItem.icon}}</v-icon></v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="subItem.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>


        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Menu</v-toolbar-title>
            <div style="right: 0;margin-left: auto;">
                <div class="text-center">
                    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
                        <template v-slot:activator="{ on }">
                            <v-btn color="blue" dark v-on="on">
                                <v-icon>mdi-account</v-icon>
                            </v-btn>
                        </template>

                        <v-card>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>John Leider</v-list-item-title>
                                        <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                                    </v-list-item-content>


                                </v-list-item>
                            </v-list>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-switch v-model="message" color="purple"></v-switch>
                                    </v-list-item-action>
                                    <v-list-item-title>Enable messages</v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-action>
                                        <v-switch v-model="hints" color="purple"></v-switch>
                                    </v-list-item-action>
                                    <v-list-item-title>Enable hints</v-list-item-title>
                                </v-list-item>
                            </v-list>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text @click="menu = false">Cancel</v-btn>
                                <v-btn color="primary" text @click="menu = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </div>
            </div>

        </v-app-bar>

        <v-footer app :inset="false">
            <span>Pollos amigos &copy; 2020</span>
        </v-footer>
    </div>
</template>

<script type="text/javascript">
import scroller from 'vue-scrollto/src/scrollTo';
    export default {
        name: "menubar",

        data: () => ({
            drawer: null,
            fav: true,
            menu: false,
            message: false,
            hints: true,
            itema: [
                {
                    action: 'mdi-view-dashboard',
                    title: 'Reportes',
                    active:true,
                    items: [
                        { title: 'List Item' },
                    ],
                },
                {
                    action: 'mdi-account-circle',
                    title: 'Usuarios',
                    active: false,
                    items: [
                        { title: 'Usuarios Activos', icon:'mdi-account-check' },
                        { title: 'Usuarios Inactivos',icon:'mdi-account-remove' },
                    ],
                },
                {
                    action: 'mdi-server',
                    title: 'Incubadora',
                    active: false,
                    items: [
                        { title: 'Breakfast & brunch' },
                        { title: 'New American' },
                        { title: 'Sushi' },
                    ],
                },
                {
                    action: 'mdi-magnify',
                    title: 'Ovoscopio',
                    items: [
                        { title: 'List Item' },
                    ],
                },
                {
                    action: 'mdi-egg',
                    title: 'Eclosiones',
                    items: [
                        { title: 'List Item' },
                    ],
                },
            ],
        }),

        created () {
            this.$vuetify.theme.dark = true
        },
        methods:{


            menudi(title){
              console.log(title);
              if (title=='Usuarios'){
                  return this.$router.push('/users')
              }
              if (title=='Ovoscopio'){
                  return this.$router.push('/ovoscopio')
              }
              if (title=='Incubadora'){
                  return this.$router.push('/incubadoras')
              }
              if (title=='Eclosiones'){
                  return this.$router.push('/eclosion')
              }
              if (title=='Reportes'){
                  return this.$router.push('/reportes')
              }
            },
            moveritem(title){
                console.log(title);
                if (title == 'Usuarios Inactivos'){
                    scroller('#uin', {offset: -70})
                }
                if(title == 'Usuarios Activos'){
                    scroller('#uac',{offset: -70})
                }
            }

        }
    }
</script>

<style scoped>

</style>