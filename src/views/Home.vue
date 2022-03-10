<template>
  <div>
    <div class="desktop-view">
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <!-- <q-drawer
        v-model="leftDrawerOpen"
        bordered
        :width="400"
        content-class="bg-primary"
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

          <q-item clickable v-ripple style="color: white;">
            <q-item-section avatar>
              <q-icone>
                <img src="../assets/Image/Home.png">
              </q-icone>
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-item clickable v-ripple style="color: green;">
            <q-item-section avatar>
              <q-icone>
                <img src="../assets/Image/Card.png">
              </q-icone>
            </q-item-section>
            <q-item-section>Cards</q-item-section>
          </q-item>

          <q-item clickable v-ripple style="color: white;">
            <q-item-section avatar>
              <q-icone>
                <img src="../assets/Image/Payments.png">
              </q-icone>
            </q-item-section>
            <q-item-section>Payments</q-item-section>
          </q-item>


          <q-item clickable v-ripple style="color: white;">
            <q-item-section avatar>
              <q-icone>
                <img src="../assets/Image/Credit.png">
              </q-icone>
            </q-item-section>
            <q-item-section>Credit</q-item-section>
          </q-item>

          <q-item clickable v-ripple style="color: white;">
            <q-item-section avatar>
              <q-icone>
                <img src="../assets/Image/Account.png">
              </q-icone>
            </q-item-section>
            <q-item-section>Settings</q-item-section>
          </q-item>

        </q-list>
          </q-drawer> -->
        </div>
        <div class="col-lg-9 col-md-9">
          <div>
           <userCard />
          </div>
        </div>
      </div>
    </div>
    
        

    <div class="mobile-view">
      <q-header class="aspire-mb-header">
        <q-toolbar class="q-px-lg q-mt-lg">
          <q-space />
          <img
            src="../assets/Image/aspireIcone.png"
          />
        </q-toolbar>

        <div class="q-pr-lg">
          <userCard />
        </div>
      </q-header>

      <q-footer elevated class="bg-white text-primary">
        <div class="aspire-mb-footer q-py-sm">
          <div>
            <div>
              <img src="../assets/Image/Logomb.png">
            </div>
            <div style="color:#DDDDDD;">Home</div>
          </div>
          <div>
            <div>
              <img src="../assets/Image/Card.png">
            </div>
            <div style="color:#01D167;">Cards</div>
          </div>
          <div>
            <div>
              <img src="../assets/Image/Payments.png">
            </div>
            <div style="color:#DDDDDD;">Payments</div>
          </div>
          <div>
            <div>
              <img src="../assets/Image/Creditmb.png">
            </div>
            <div style="color:#DDDDDD;">Credit</div>
          </div>
          <div>
            <div>
              <img src="../assets/Image/Accountmb.png">
            </div>
            <div style="color:#DDDDDD;">Settings</div>
          </div>
        </div>
      </q-footer>
    </div>

    <q-page-container>
      <transition name="slide" mode="out-in">
			  <router-view />
      </transition>
    </q-page-container>
  </div>
</template>

<script>
import userCard from '../components/userCard';
export default {
  components: {
    userCard,
  },
  data () {
    return {
      leftDrawerOpen: true,
      tab: 'images'
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
$blue-color:#0C365A;
$green-color:#01D167;
@media all and (max-width: 1023px){
  .mobile-view{
    display: block;
  }
  .desktop-view{
    display: none;
  }
}
@media all and (min-width: 1024px){
  .mobile-view{
    display: none;
  }
  .desktop-view{
    display: block;
  }
}
.aspire-mb-header{
  background-color: $blue-color;
  color: #fff;
  // padding-bottom: 4rem;
  z-index: 0;
}
.aspire-mb-footer{
  display: flex;
  text-align: center;
  justify-content: space-around;
}
</style>

