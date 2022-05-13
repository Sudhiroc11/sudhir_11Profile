<template>
  <div>
    <div class="desktop-view">
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <q-drawer
            v-model="leftDrawerOpen"
            bordered
            :width="400"
            :content-style="{ backgroundColor: '#0C365A' }"
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

            <q-list class="q-pt-lg">

              <q-item clickable v-ripple style="color: white;" class="q-py-lg">
                <q-item-section avatar>
                  <q-icone>
                    <img src="../assets/Image/Home.png">
                  </q-icone>
                </q-item-section>
                <q-item-section>Home</q-item-section>
              </q-item>

              <q-item clickable v-ripple style="color: green;" class="q-py-lg">
                <q-item-section avatar>
                  <q-icone>
                    <img src="../assets/Image/Card.png">
                  </q-icone>
                </q-item-section>
                <q-item-section>Cards</q-item-section>
              </q-item>

              <q-item clickable v-ripple style="color: white;" class="q-py-lg">
                <q-item-section avatar>
                  <q-icone>
                    <img src="../assets/Image/Payments.png">
                  </q-icone>
                </q-item-section>
                <q-item-section>Payments</q-item-section>
              </q-item>


              <q-item clickable v-ripple style="color: white;" class="q-py-lg">
                <q-item-section avatar>
                  <q-icone>
                    <img src="../assets/Image/Credit.png">
                  </q-icone>
                </q-item-section>
                <q-item-section>Credit</q-item-section>
              </q-item>

              <q-item clickable v-ripple style="color: white;" class="q-py-lg">
                <q-item-section avatar>
                  <q-icone>
                    <img src="../assets/Image/Account.png">
                  </q-icone>
                </q-item-section>
                <q-item-section>Settings</q-item-section>
              </q-item>

            </q-list>
          </q-drawer>
        </div>
        <div class="col-lg-1 col-md-1">
        </div>
        <div class="col-lg-8 col-md-8">
          <div>
           <userCard />
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-view">
      <q-header class="aspire-mb-header">
        <q-toolbar class="q-px-lg q-mt-md">
          <q-space />
          <img
            src="../assets/Image/aspireIcone.png"
          />
        </q-toolbar>
        <div>
          <userCard />
        </div>
      </q-header>
      <q-page class="aspire-page">
        <div v-for="n in 100" :key="n" class="q-pa-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </div>
      </q-page>
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
      tab: 'images',
    }
  },
}
</script>
<style lang="scss" scoped>
$blue-color:#0C365A;
$green-color:#01D167;
.text-aspire-blue {
  color: $blue-color !important;
}
.bg-aspire-blue {
  background: $blue-color !important;
}
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
  padding-bottom: 3rem;
  z-index: 0;
}
.aspire-mb-footer{
  display: flex;
  text-align: center;
  justify-content: space-around;
}
.aspire-page{
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  margin-top: -1rem;
  background: #fff;
  padding: 1.5rem;
  margin-top: 450px;
}
</style>

