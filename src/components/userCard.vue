<template>
  <div>
    <dir class="row">
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
        <div class="q-py-md">
          Account balance
        </div>
        <div class="balance-new-card">
          <div class="text-h5">
            <q-badge 
              class="q-pa-sm"
              align="middle"
              color="aspire-green" 
              text-color="white" 
              label="S$"
            />
           <b class="q-pl-sm">3,000</b>
          </div>
          <div>
            <q-btn 
              color="aspire-primary" 
              icon="add_circle" 
              no-caps
              label="New card" 
              dense
              flat
              class="q-px-xs"
              @click="addCard = true" 
            />
          </div>
        </div>

        <div class="q-py-md">
          <q-tabs
            v-model="tab"
            indicator-color="aspire-primary"
            no-caps
            align="left"
            dense
          >
            <q-tab name="debitCard"  label="My debit cards" />
            <q-tab name="allCard"  label="All company cards" />
          </q-tabs>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <!-- <div class="q-py-lg" v-for='userCard in userCards' :key='userCard.cardNo'>
                <q-card class="user-card q-pa-md">
                  <div style="text-align: end;">
                    <img
                    src="../assets/Image/aspir-card-logo.png"
                    />
                  </div>
                  <div class="text-h6 q-py-xs" style="color:white;">
                    {{userCard.userCardName}}
                  </div>
                  <div style="display:flex;justify-content: space-between;" class="q-py-sm">
                    <div>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div style="color:white;">
                      {{userCard.cardSlNumber}}
                    </div>
                  </div>
                  <div style="display:flex; color:white;">
                    <div class="q-pr-sm">
                      Mon: 12/20
                    </div>
                    <div class="q-px-sm">
                      CCV: ***
                    </div>
                  </div>
                  <div style="text-align: end;">
                    <img
                    src="../assets/Image/visaLogo.png"
                    />
                  </div>
                </q-card>
              </div> -->
              
              <q-carousel
                v-model="userCard"
                swipeable
                animated
                navigation
                infinite
              >
                <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                  <q-btn v-if="active" size="md" icon="circle" color="green" flat round dense @click="onClick" />
                  <q-btn v-else size="xs" :icon="btnProps.icon" color="green-11" flat round dense @click="onClick" />
                </template>

                <q-carousel-slide 
                  v-for="userCard in userCards" :key="userCard.id" :name="userCard.id" 
                  :img-src="userCard.url" 
                >

                  <q-card class="user-card q-pa-md">
                  <div style="text-align: end;">
                    <img
                    src="../assets/Image/aspir-card-logo.png"
                    />
                  </div>
                  <div class="text-h6 q-py-xs" style="color:white;">
                    {{userCard.userCardName}}
                  </div>
                  <div style="display:flex;justify-content: space-between;" class="q-py-sm">
                    <div>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div style="color:white;">
                      {{userCard.cardSlNumber}}
                    </div>
                  </div>
                  <div style="display:flex; color:white;">
                    <div class="q-pr-sm">
                      Mon: 12/20
                    </div>
                    <div class="q-px-sm">
                      CCV: ***
                    </div>
                  </div>
                  <div style="text-align: end;">
                    <img
                    src="../assets/Image/visaLogo.png"
                    />
                  </div>
                  </q-card>
                </q-carousel-slide>
              </q-carousel>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-1 col-md-1"></div>
    </dir>
    <q-dialog 
      v-model="addCard"
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add new card</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form @submit.prevent="submitForm">
            <q-input outlined 
              v-model="cardName" 
              placeholder="Card name"
              dense
              class="q-py-xs"
              :rules="[val => (val && (val.length > 0)) || 'Please enter your name']"
              ref="name" 
            />
            <q-input 
              outlined 
              v-model="userName" 
              placeholder="User name" 
              dense
              class="q-py-xs"
              :rules="[val => (val && (val.length > 0)) || 'Please enter your name']"
              ref="name" 
            />

            <div class="q-py-md" style="text-align:center;">
              <q-btn
                label="submit"
                no-caps
                color="aspire-green"
                type="submit"
              />
            </div>
          </q-form>
          
        </q-card-section>
      </q-card>
    </q-dialog>

    
  </div>
</template>

<script>
const userCards = [
  {
    id: 1,
    userCardName: "Sudhir Gupta",
    cardSlNumber:2020,
  },
  {
    id: 2,
    userCardName: "Mark Henry",
    cardSlNumber:2022,
  },
  {
    id: 3,
    userCardName: "Max L",
    cardSlNumber:2019,
  },
]
export default {
  components: {
  },
  data () {
    return {
      tab: 'debitCard',
      addCard: false,
      cardName:"",
      userName:"",

      userCard: 1,
      userCards

    }
  },
  methods:{
    submitForm(){
      console.log("NEW_CARD_GENERATED");
      this.addCard = false;
    }
  }
  
}
</script>

<style lang="scss">
$blue-color:#0C365A;
$green-color:#01D167;
$primary-color:#23CEFD;

.text-aspire-green {
  color: $green-color !important;
}
.bg-aspire-green {
  background: $green-color !important;
}
.text-aspire-primary {
  color: $primary-color !important;
}
.bg-aspire-primary {
  background: $primary-color !important;
}
.q-tab-panel {
  padding: 0 !important;
}
.balance-new-card{
  display: flex;
  justify-content: space-between;
}
.user-card{
  background-color: $green-color !important;
  border-radius: 10px !important;
}
.dot{
  height: 8px;
  width: 8px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  margin: 2px;
}

.q-carousel {
  height: 275px !important;
  background-color: transparent !important;
}
</style>

