<template>
  <div>
    <div>
      <div class="col-lg-1 col-md-1 col-sm-1"></div>
      <div class="col-lg-10 col-md-10 col-sm-10">
        <div class="choice-container">
          <div class="user-text-name text-h5">
            <div>
              <b> Let us know you better</b>
            </div>
            <div class="q-px-sm">
              <div class="hi-icon"></div>
            </div>
          </div>
          <div class="q-py-sm" style="color:grey;">
            Pick 3 (or more!) topics of your choice
          </div>
          <q-scroll-area
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
            style="height: 450px; max-width: 100%;"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4 q-pr-md q-py-sm"
                v-for='job in jobs' :key='job.jobId'
              >
                <q-card class="student-choice-card">
                  <q-checkbox 
                    v-model="job.jobId" 
                    color="green" 
                  />


                  <div class="q-px-sm">
                    Selected professioan: <strong>{{ job.jobId }}</strong>
                  </div>
                  <div class="text-h6" style="text-align:center;padding-top:30px;">
                    {{job.jobName}}
                  </div>
                </q-card>
              </div>
            </div>
          </q-scroll-area>
          <div class="get-started-div q-pa-lg">
            <q-btn
              label="get started" 
              class="get-started" 
            />
          </div>
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    
  },
  data() {
    return {
      jobs:[
        {
          jobName: "Engineer",
          jobId: 1,
        },
        {
          jobName: "Doctor",
          jobId: 2,
        },
        {
          jobName: "Pilot",
          jobId: 3,
        },
        {
          jobName: "Software Devloper",
          jobId: 4,
        },
        {
          jobName: "Artist",
          jobId: 5,
        },
        {
          jobName: "Teacher",
          jobId: 6,
        },
        {
          jobName: "CA",
          jobId: 7,
        },
        {
          jobName: "MBA",
          jobId: 8,
        },
         {
          jobName: "Engineer",
          jobId: 9,
        },
        {
          jobName: "Doctor",
          jobId: 10,
        },
        {
          jobName: "Pilot",
          jobId: 11,
        },
        {
          jobName: "Software Devloper",
          jobId: 12,
        },
        {
          jobName: "Artist",
          jobId: 13,
        },
        {
          jobName: "Teacher",
          jobId: 14,
        },
        {
          jobName: "CA",
          jobId: 15,
        },
        {
          jobName: "MBA",
          jobId: 16,
        },
        {
          jobName: "MBA",
          jobId: 17,
        },
        {
          jobName: "Artist",
          jobId: 18,
        },
        {
          jobName: "Teacher",
          jobId: 19,
        },
        {
          jobName: "Engineer",
          jobId: 20,
        },
        {
          jobName: "Doctor",
          jobId: 21,
        },
        {
          jobName: "Pilot",
          jobId: 22,
        },
        {
          jobName: "Software Devloper",
          jobId: 23,
        },
        {
          jobName: "Artist",
          jobId: 24,
        },
        {
          jobName: "Teacher",
          jobId: 25,
        },
        {
          jobName: "CA",
          jobId: 26,
        },
      ],
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#303C6E',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#303C6E',
        width: '9px',
        opacity: 0.2
      },
    };
  },
  methods:{

  },
};
</script>

<style lang="scss" scoped>
$blue-color:#34568B;
$black-color:#00160A;
.left-screen{
  min-height: 100vh;
  background-color: #f6f7f8;
}
.cursor-text{
  cursor: pointer;
  color: $black-color;
}
.cursor-text:hover{
  color: orange;
  cursor: pointer;
}
.bottom-home{
  position: absolute;
  bottom: 4%;
  display: flex;
}
.copy-right{
  position: absolute;
  bottom: 4%;
  right: 52%;
  color: $black-color;
}
.copy-right1{
  position: absolute;
  bottom: 0;
  color: $black-color;
}
@media all and (max-width: 1023px){
  .copy-right1{
    display: block;
  }
  .copy-right{
    display: none;
  }
}
@media all and (min-width: 1022px){
  .copy-right1{
    display: none;
  }
  .copy-right{
    display: block;
  }
}
//Right screen
.user-text-name{
  display: flex;
}
.get-started{
  background: $blue-color !important;
  color: white !important;
}
.student-choice-card{
  background:#34568B;
  color:white;
  height:135px;
  cursor: pointer;
}

.get-started-div{
  text-align: center;
}
.hi-icon{
  background-repeat: no-repeat;
  background-size: 28px;
  height: 30px;
  width: 35px;
}
.choice-container{
  position: absolute;
  top: 10%;
  left: 53%;
  right: 3%;
}
</style>
