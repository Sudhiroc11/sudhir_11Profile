<template>
  <div>
    <div class="q-px-lg">
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
            @click="open('top')"  
          />
        </div>
      </div>
      <div class="q-py-xs">
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
            <q-carousel
              v-model="userCard"
              swipeable
              animated
              navigation
              infinite
            >
              <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                <q-btn v-if="active" size="sm" icon="circle" color="green" flat round dense @click="onClick" />
                <q-btn v-else size="xs" :icon="btnProps.icon" color="green-11" flat round dense @click="onClick" />
              </template>

              <q-carousel-slide 
                v-for="userCard in userCards" :key="userCard.id" :name="userCard.id" 
              >

                <q-card class="user-card q-pa-sm">
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
    <q-dialog 
      v-model="addCard"
      :position="position"
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add a new card</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form @submit.prevent="saveCard">
            <q-input outlined 
              v-model="userName" 
              placeholder="User name"
              dense
              :rules="[val => (val && (val.length > 0)) || 'Please enter your name']"
            />
            <q-input 
              outlined 
              v-model="cardLastdigit" 
              placeholder="Card number last 4 digit" 
              dense
              :rules="[ val => val.length <= 4 && (val && (val.length > 0)) || 'Enter your last 4 digit code']"
            />

            <div class="q-py-md" style="text-align:center;">
              <q-btn
                label="Save"
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
    userCardName: "Lisa de boer",
    cardSlNumber:2019,
  },
]
export default {
  created(){
  },
  components: {
  },
  data () {
    return {
      addNewCard: [],
      userName:"",
      cardLastdigit:"",
      tab: 'debitCard',
      addCard: false,
      position: 'top',
      userCard: 1,
      userCards
    }
  },
  methods:{
    saveCard(){
      let user = {
        adminUserName:  this.userName,
        adminCardLastFourDigit: this.cardLastdigit,
      }
      console.log("NEW_CARD_GENERATED", user);
      this.addCard = false;
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Success message',
        text: 'Added new card',
      });
      if(localStorage.addNewCard){
        let lsUsers = localStorage.addNewCard;
        this.addNewCard = JSON.parse(lsUsers);
      }
      this.addNewCard.push(user);
      localStorage.setItem("addNewCard", JSON.stringify(this.addNewCard));
      this.userName = "";
      this.cardLastdigit = "";
    },
    open (position) {
      this.position = position
      this.addCard = true
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
  height: 250px !important;
  background-color: transparent !important;
}
</style>

