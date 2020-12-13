<template>
  <nav>
      <v-app-bar flat app color="white">
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light">Todo</span>
            <span>List</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text color="grey">
              <span>로그아웃</span>
              <v-icon right>mdi-exit-to-app</v-icon>
          </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app class="teal lighten-3">
          <v-list>
              <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                  <v-list-item-action>
                      <v-icon class="white--text">{{ link.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: '대시보드', route: '/' },
                { icon: 'mdi-account', text: '내 정보', route: '/myInfo' }
            ]
        }
    }
}
</script>

<style>

</style>