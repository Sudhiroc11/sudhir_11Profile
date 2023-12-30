<template>
  <div>
    <q-header bordered class="desktop-view-rpl bg-white">  
      <div class="row" >
        <div class="col-lg-1 col-md-1 col-sm-1"></div>
        <div class="col-lg-10 col-md-10 col-sm-10">
          <q-toolbar class="top-header-rpl">
            <div class="redimind-img-div-rpl" @click="scrollToElement('home-desk')">
              <img src="../assets/home.png" style="height: 40px;cursor: pointer;">
            </div>
            
            <q-space />

            <q-toolbar-title>
              <div class="title-block">
                <div class="home" @click="scrollToElement('id_about_me')" :style="{ color: navbarColors[$route.path] }">
                  About Me
                </div>
                <div class="about" @click="scrollToElement('id_projects')" :style="{ color: navbarColors1[$route.path] }">
                  Projects
                </div>
                <div class="Blog" @click="scrollToElement('id_skills')" :style="{ color: navbarColors2[$route.path] }">
                  Skills
                </div>
                <div class="Learn" @click="scrollToElement('id_contact')" :style="{ color: navbarColors3[$route.path] }">
                  Contact
                </div>
              </div>
            </q-toolbar-title>

          </q-toolbar>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1">
        </div>
      </div>
    </q-header>
    <q-header bordered class="mobile-view-rpl bg-white">
      <q-toolbar class="top-header-rpl q-px-sm">
        <div>
          <img src="../assets/home.png" style="height: 30px;" @click="scrollToElementmb('home-mb')">
        </div>
        <q-space />
        <div id="mySidenav" class="sidenav">
          <a class="closebtn" @click="closeNav()">&times;</a>

          <a @click="scrollToElementmb('id_about_mb')">About Me</a>
          <a @click="scrollToElementmb('id_projects_mb')">Projects</a>
          <a  @click="scrollToElementmb('id_skills_mb')">Skills</a>
          <a @click="scrollToElementmb('id_contact_mb')">Contact</a>

        </div>
        <q-btn
          size="md" 
          flat
          icon="menu"
          @click="openNav()"
          color="black"
        />
      </q-toolbar>
    </q-header>


    <!-- Desktop-design -->
    <div  class="desktop-view-rpl main" style="padding-top:50px;">
      <div id="home-desk" class="full-height full-width flex flex-center text-center"
        style="background-color: rgba(0, 0, 0, 0.68) !important;z-index:0;"
      >
        <div>
          <div class="text-h4" style="color: white;">
            Hello, I'm Sudhir Kumar Gupta.
          </div>
          <div class="text-h2 text-white q-py-sm q-my-md"
            style="border-top:3px solid #00d1c1;border-bottom: 3px solid #00d1c1; color: #00d1c1;"
          >
            I'm a Front-end Developer.
          </div>
        </div>
      </div>
      <div class="row" id="id_about_me" style="background-color: #00d1c1;">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-5 col-md-5">
          <img src="../assets/my_2.png" style="width: 100%;">
        </div>
        <div class="col-lg-5 col-md-5">
          <div 
            class="full-height full-width flex flex-center text-center text-white text-h5 q-pa-md"
            style="text-align:start; position: relative;"
          >
            Hi! I'm Sudhir Kumar Gupta,currently working as a Front-end Developer at Infosys Bangalore India.
            I have a Bachelor of Engineering (BE)  degree in EEE from the Nitte Meenakshi Institute of Technology Bangalore India.
            <br>
            I am a passionate software developer with excellent problem-solving skills and the 
            ability to perform well in a team. As a Frontend Developer with 3+ years of experience
            in designing and building responsive web applications. Passionate about coding and 
            the new web technologies.
          </div>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="row" id="id_projects">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-10 col-md-10">
          <q-timeline :layout="layout" color="secondary">

            <q-timeline-entry heading style="color:#00d1c1">
              PROJECTS
            </q-timeline-entry>

            <q-timeline-entry
              title="NRF (Management of cooling products for 
              the automotive market, industrial, railway and 
              marine sector)"
              subtitle="Started:- February, 2020 - Ongoing"
              side="left"
            >
              <div style="text-align:start;">
                NRF:-Since 1927 NRF has been a leading manufacturer of cooling
                products for the automotive market, industrial, rail and marine sector.
                Head office in NETHERLANDS 
                <br>
                In this application what i worked:- <br>
                Developed kanban chart to maintain the product orders. <br>
                Implemented VueJS i18n to manage translations based on user location. <br>
                Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                Worked in Quasar UI Framework to achieve responsiveness of the application. <br>
                Integrated google and microsoft authentication to achieve SSO. 
              </div>
             

            </q-timeline-entry>
            <q-timeline-entry
              title="MOTRAC (Motrac is the official importer and distributor in
              Belgium of Linde's leading forklifts and warehouse trucks)"
              subtitle="Started:- APRIL, 2018 - Ongoing"
              side="right"
            >
              <div style="text-align:start;">
                In this application what i worked:- <br>
                The dashboard integrates all the modules and functionalities which
                include total orders, pending orders, lorries under maintenance, processing, pending, and invoicing details.
                Worked in Quasar UI Framework to achieve responsiveness of the application.
                Integrated UI with backend using REST API's ,VUEX and AXIOS
              </div>
                
                

            </q-timeline-entry>
            <q-timeline-entry
              title="FFS (It is an application built for organizations to track
              resources, projects, sprints, and time logs of each resource
              within the organization.)"
              subtitle="Started:- JULY, 2020 - Ongoing"
              side="left"
            >
              <div style="text-align:start;">
                The system also has the feature of an overview of all the projects and
                also the performance of each user.
                Admin can monitor the workload of each resource and can see the daily/weekly/monthly reports and
                performances of each resource across the projects.
                The application is designed with a responsive UI that is feasible for all devices.
                Integrated UI with backend using REST API's ,VUEX and AXIOS. 
              </div>
                
            </q-timeline-entry>

            <q-timeline-entry>
            </q-timeline-entry>

          </q-timeline>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="row" id="id_skills">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-10 col-md-10">
          <div style="text-align:center; color:#00d1c1;" class="text-h2 q-py-md">
            Skills
          </div>
          <q-card 
            class="q-pa-lg" 
            style="display:flex;justify-content: space-evenly;
            border: 2px solid black;
            background: #00d1c1"
          >
            <div>
              <img src="../assets/sk1.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk2.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk3.webp" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk4.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk5.svg" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk6.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk7.png" style="height:100px;width:100px;">
            </div>
            
            <div>
              <img src="../assets/sk10.png" style="height:100px;width:100px;">
            </div>
          </q-card>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="q-py-lg"></div>
      <div class="row q-py-lg" id="id_contact">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-10 col-md-10">
          <div style="text-align:center; color:#00d1c1;" class="text-h3 q-py-lg">
            Get in Touch !
          </div>
          <div style="text-align:center; color:#00d1c1;" class="text-h5 q-py-xs">
            contact me for more info 
          </div>
          <div class="row q-pt-md">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="mail-info-child">
                <div>
                  <span class="mif-mail icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  sudhir.oc11@gmail.com
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="mail-info-child">
                <div>
                  <span class="mif-whatsapp icone-css"></span>
                </div>

                <div class="more-info q-pt-sm">
                  +91 9108677220
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="mail-info-child">
                <div>
                  <span class="mif-location icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  BTM Layout 1st Stage , 
                  Bangalore 560029
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>

      <q-toolbar 
        class="flex flex-center text-white" 
        style="background-color: #00d1c1;border-top: 2px solid green"
      >
      <div class="q-pa-sm q-gutter-sm">
        <q-btn 
          target="_blank" 
          style="border: 2px solid green"
          round type="a" 
          href="https://twitter.com/SudhirGupta_11?t=zZgJ4D2n6nKnp5w7915c4A&s=08"
          glossy
          icon="fab fa-twitter"
        />
        <q-btn target="_blank" style="border: 2px solid green" round type="a"
          href="https://github.com/Sudhiroc11"
          glossy
          icon="fab fa-github"
        />
        <q-btn style="border: 2px solid green" round type="a" href="mailto:sudhir.oc11@gmail.com"
          glossy
          icon="email"
        />
        <q-btn target="_blank" style="border: 2px solid green;" round type="a"
          href="https://www.linkedin.com/in/sudhirgupta-11/"
          glossy
        >
          <div>
            <span class="mif-linkedin"></span>
          </div>
        </q-btn>
        <q-btn target="_blank" style="border: 2px solid green;" round type="a"
          href="https://sudhir11profile.netlify.app/"
          glossy
          icon="language"
        />
      </div>
      </q-toolbar>
    </div>

    <!-- mobile-design -->
    <div  class="mobile-view-rpl main" style="padding-top:50px;">
      <div id="home-mb" class="full-height full-width flex flex-center text-center"
        style="background-color: rgba(0, 0, 0, 0.68) !important;z-index:0;"
      >
        <div>
          <div class="text-h6" style="color: white;">
            Hello, I'm Sudhir Kumar Gupta.
          </div>
          <div class="text-h5 text-white  q-py-sm q-my-md"
            style="border-top:3px solid #00d1c1;border-bottom: 3px solid #00d1c1; color: #00d1c1;"
          >
            I'm a Front-end Developer.
          </div>
        </div>
      </div>

      <div id="id_about_mb" style="background-color: #00d1c1;">
        <div class="q-pa-md">

          
          <div>
            <img src="../assets/my_4.jpeg" style="width: 100%;">
          </div>
          
          
          <div class="text-white text-h5 q-pa-sm">
            Hi! <br> I'm Sudhir Kumar Gupta, currently working as a Software Developer at MNI PVT. LTD. Bangalore India.
            I have a Bachelor of Engineering (BE)  degree in EEE from the Nitte Meenakshi Institute of Technology Bangalore India.
            <br>
            I am a passionate software developer with excellent problem-solving skills and the 
            ability to perform well in a team. As a Frontend Developer with 2+ years of experience
            in designing and building responsive web applications. Passionate about coding and 
            the new web technologies.
          </div>
          

        </div>
      </div>

      
      <div id="id_projects_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <q-timeline  color="secondary">
              <q-timeline-entry heading style="color:#00d1c1">
                PROJECTS
              </q-timeline-entry>

              <q-timeline-entry
                title="NRF (Management of cooling products for 
                the automotive market, industrial, railway and 
                marine sector)"
                subtitle="Started:- February, 2020 - Ongoing"
                side="left"
              >
                <div style="text-align:start;" class="q-py-md">
                  NRF:-Since 1927 NRF has been a leading manufacturer of cooling
                  products for the automotive market, industrial, rail and marine sector.
                  Head office in NETHERLANDS 
                  <br>
                  In this application what i worked:- <br>
                  Developed kanban chart to maintain the product orders. <br>
                  Implemented VueJS i18n to manage translations based on user location. <br>
                  Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                  Worked in Quasar UI Framework to achieve responsiveness of the application. <br>
                  Integrated google and microsoft authentication to achieve SSO.  
                </div>
                 
                  

              </q-timeline-entry>
              <q-timeline-entry
                title="MOTRAC (Motrac is the official importer and distributor in
                Belgium of Linde's leading forklifts and warehouse trucks)"
                subtitle="Started:- APRIL, 2018 - Ongoing"
                side="left"
              >
                <div style="text-align:start;" class="q-py-md">
                  In this application what i worked:- <br>
                  The dashboard integrates all the modules and functionalities which
                  include total orders, pending orders, lorries under maintenance, processing, pending, and invoicing details.
                  Worked in Quasar UI Framework to achieve responsiveness of the application.
                  Integrated UI with backend using REST API's ,VUEX and AXIOS 
                </div>
              

              </q-timeline-entry>
              <q-timeline-entry
                title="FFS (It is an application built for organizations to track
                resources, projects, sprints, and time logs of each resource
                within the organization.)"
                subtitle="Started:- JULY, 2020 - Ongoing"
                side="left"
              >
                <div style="text-align:start;" class="q-py-md">
                  The system also has the feature of an overview of all the projects and
                  also the performance of each user.
                  Admin can monitor the workload of each resource and can see the daily/weekly/monthly reports and
                  performances of each resource across the projects.
                  The application is designed with a responsive UI that is feasible for all devices.
                  Integrated UI with backend using REST API's ,VUEX and AXIOS  
                </div>
                  
                  

              </q-timeline-entry>

              <q-timeline-entry>
              </q-timeline-entry>

            </q-timeline>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div id="id_skills_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div style="text-align:center; color:#00d1c1;" class="q-py-xs text-h4">
              Skills
            </div>
            <q-card 
              class="q-pa-lg" 
              style="background-color:#00d1c1;border: 2px solid black;"
            >
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk1.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk2.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk3.webp" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk4.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk5.svg" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk6.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk7.png" style="height:100px;width:100px;">
              </div>
              
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk10.png" style="height:100px;width:100px;">
              </div>
            </q-card>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div id="id_contact_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div style="text-align:center; color:#00d1c1;" class="text-h3 q-py-lg">
              Get in Touch !
            </div>
            <div style="text-align:center; color:#00d1c1;" class="text-h5 q-py-xs">
              contact me for more info 
            </div>
            <div class="q-pt-md">
              <div class="mail-info-child q-py-md">
                <div>
                  <span class="mif-mail icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  sudhir.oc11@gmail.com
                </div>
              </div>
              <div class="mail-info-child q-py-md">
                <div>
                  <span class="mif-whatsapp icone-css"></span>
                </div>

                <div class="more-info q-pt-sm">
                  +91 9108677220
                </div>
              </div>
              <div class="mail-info-child q-py-md">
                <div>
                  <span class="mif-location icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  BTM Layout 1st Stage, 
                  Bangalore 560029
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>

      <q-toolbar 
        class="flex flex-center text-white" 
        style="background-color: #00d1c1;border-top: 2px solid green"
      >
      <div class="q-pa-sm q-gutter-sm">
        <q-btn 
          target="_blank" 
          style="border: 2px solid green"
          round type="a" 
          href="https://twitter.com/SudhirGupta_11?t=zZgJ4D2n6nKnp5w7915c4A&s=08"
          glossy
          icon="fab fa-twitter"
        />
        <q-btn target="_blank" style="border: 2px solid green" round type="a"
          href="https://github.com/Sudhiroc11"
          glossy
          icon="fab fa-github"
        />
        <q-btn style="border: 2px solid green" round type="a" href="mailto:sudhir.oc11@gmail.com"
          glossy
          icon="email"
        />
        <q-btn target="_blank" style="border: 2px solid green;" round type="a"
          href="https://www.linkedin.com/in/sudhirgupta-11/"
          glossy
        >
          <div>
            <span class="mif-linkedin"></span>
          </div>
        </q-btn>
        <q-btn target="_blank" style="border: 2px solid green;" round type="a"
          href="https://sudhir11profile.netlify.app/"
          glossy
          icon="language"
        />
      </div>
      </q-toolbar>
    </div>


   

  </div>
</template>

<script>
import {scroll} from 'quasar'
const {getScrollTarget, setScrollPosition} = scroll
export default {
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  data() {
    return {
      nrfSlide: 1,
      mtSlide: 1,
      nmdbSlide: 1,
      skillSlide:1,
      navbarColors: {
        '/websiteHome': 'orange',
      },
      navbarColors1: {
        '/aboutUs': 'orange',
      },
      navbarColors2: {
        '/blogs': 'orange',
      },
      navbarColors3: {
        '/learnmore': 'orange',
      },
    };
  },
  methods:{
    scrollToElementmb(id){
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - 65
      const duration = 800
      setScrollPosition(target, offset, duration);
      document.getElementById("mySidenav").style.width = "0";
    },
    scrollToElement(id) {
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - 65
      const duration = 800
      setScrollPosition(target, offset, duration)
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },

   
  },
};
</script>


<style lang="scss" scoped>

*{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
}
$blue-color:#00d1c1;
$black-color:#00160A;
.top-header-rpl{
  color: black;
  background: white;
}
.title-block{
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
.home{
  color: $black-color;
}
.home:hover{
  color: #00d1c1;
  cursor: pointer;
}
.about{
  color: $black-color;
}
.about:hover{
  color: #00d1c1;
  cursor: pointer;
}
.Blog{
  color: $black-color;
}
.Blog:hover{
  color: #00d1c1;
  cursor: pointer;
}
.Learn{
  color: $black-color;
}
.Learn:hover{
  color: #00d1c1;
  cursor: pointer;
}
.login-button{
  background: $blue-color !important;
  color: white !important;
}
.item-border-rpl{
  border: 1px solid $blue-color;
  border-radius: 10px;
}

@media (min-width: 600px) and (max-width: 767px){
  .title-block{
    font-size: 7px;
  }
}
@media (min-width: 768px) and (max-width: 1023px){
  .title-block{
    font-size: 10px;
  }
}
@media (min-width: 1024px) and (max-width: 1439px){

}
@media (min-width: 1440px) and (max-width: 1919px){
  .title-block{
    font-size: 18px;
  }
}
@media (min-width: 1920px){
  .title-block{
    font-size: 22px;
  }
}
.sidenav {
  height: 60%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #00d1c1;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #FFFFFF;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #00d1c1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media all and (max-width: 599px){
  .mobile-view-rpl{
    display: block;
  }
  .desktop-view-rpl{
    display: none;
  }
}
@media all and (min-width: 600px){
  .mobile-view-rpl{
    display: none;
  }
  .desktop-view-rpl{
    display: block;
  }
}



.main {
  background: url("../assets/my_1.jpeg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh !important;
}

.icone-css{
  font-size: 50px;
}
.whatsapp-icone{
  font-size: 50px;
}
.more-info{
  font-size: 18px;
  color: $black-color;
  text-align: center;
}
.mail-info-child{
  text-align: center;
}
</style>
