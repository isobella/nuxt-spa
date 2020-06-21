<template>
  <v-app dark>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span class="caption">Inspired by <a href="https://noopschallenge.com" target="_blank">Github Noops Challenge</a> ❤️</span>
    </v-footer>

    <v-snackbar
      timeout="20000"
      top
      left
      vertical
      v-model="snackbar"
    >
      If on a mobile device, remember to turn silent mode off to hear the sounds!
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      snackbar: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Pre-set bops',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Create your own beat',
          to: '/cyob'
        }
      ],
      right: true,
      title: `🥁 Drum bot 🥁`
    }
  }
}
</script>
