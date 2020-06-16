<template>
  <v-app>
      <div>
        <menubar></menubar>
      </div>
      <v-content>
          <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
    import menubar from "./admin/menubar";
    export default {
        name: "app",
        components:{
          menubar,
        },
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        }
    }
</script>

<style scoped>

</style>
