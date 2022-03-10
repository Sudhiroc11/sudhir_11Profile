<template>
  <div>
    <q-drawer
      bordered
      :content-style="{ backgroundColor: '#0C365A'}"
      v-model="leftDrawerOpen"
      :mini-width="400"
      class="desktop-view-rpl"
    >
      <div class="q-px-lg">
        <img
          src="../assets/Image/aspireLogo.svg"
          class="q-mt-xl q-mb-lg"
        />
        <div style="color:#FFFFFF;opacity:30%;">
          Trusted way of banking for 
          3,000+ SMEs and startups in Singapore
        </div>
      </div>

      <q-list>

        <q-item clickable v-ripple style="color: white;" @click="Home">
          <q-item-section avatar>
            <q-icone>
              <img src="../assets/Image/Home.png">
            </q-icone>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple style="color: green;" @click="card">
          <q-item-section avatar>
            <q-icone>
              <img src="../assets/Image/Card.png">
            </q-icone>
          </q-item-section>
          <q-item-section>Cards</q-item-section>
        </q-item>

        <q-item clickable v-ripple style="color: white;" @click="Payments">
          <q-item-section avatar>
            <q-icone>
              <img src="../assets/Image/Payments.png">
            </q-icone>
          </q-item-section>
          <q-item-section>Payments</q-item-section>
        </q-item>


        <q-item clickable v-ripple style="color: white;" @click="Credit">
          <q-item-section avatar>
            <q-icone>
              <img src="../assets/Image/Credit.png">
            </q-icone>
          </q-item-section>
          <q-item-section>Credit</q-item-section>
        </q-item>

        <q-item clickable v-ripple style="color: white;" @click="Settings">
          <q-item-section avatar>
            <q-icone>
              <img src="../assets/Image/Account.png">
            </q-icone>
          </q-item-section>
          <q-item-section>Settings</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>



    <q-page-container>
      <transition name="slide" mode="out-in">
			  <router-view />
      </transition>
    </q-page-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      leftDrawerOpen: true,
    }
  },
  methods:{
    Home(){
      this.$router.push({ name: "dashboardHome"})
    },
    card(){
      this.$router.push({ name: "userCard"})
    },
    Payments(){
      this.$router.push({ name: "Payments"})
    },
    Credit(){
      this.$router.push({ name: "Credit"})
    },
    Settings(){
      this.$router.push({ name: "Settings"})
    }
  }
}
</script>

<style lang="scss" scoped>
$blue-color:#0C365A;
$green-color:#01D167;
.q-item.q-router-link--active {
  color: red !important;
  background-color: #c6c3c3;
}

</style>

