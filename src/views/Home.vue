<template>
  <div>
    <q-header bordered class="desktop-view-rpl bg-white">  
      <div class="row" >
        <div class="col-lg-1 col-md-1 col-sm-1"></div>
        <div class="col-lg-10 col-md-10 col-sm-10">
          <q-toolbar class="top-header-rpl">
            <div class="redimind-img-div-rpl" @click="scrollToElement('home-desk')">
              <img src="../assets/sudhirName.png" style="height: 60px;cursor: pointer;">
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
          <img src="../assets/sudhirName.png" style="height: 40px;" @click="scrollToElementmb('home-mb')">
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
    <div  class="desktop-view-rpl" style="padding-top:50px;">
      <div id="home-desk" class="full-height full-width flex flex-center text-center"
        style="z-index:0;height: 100vh !important;"
      >
        <div>
          <div class="text-h6" style="color: #00d1c1;">
            WELCOME TO MY PAGE
          </div>
          <div class="text-h2  q-py-sm q-my-md"
            style="border-top:3px solid #00d1c1;border-bottom: 3px solid #00d1c1; color: #00d1c1;"
          >
            I'M A FRONT-END DEVELOPER
          </div>
          <div class="text-h6" style="color: #00d1c1;">
            JAVASCRIPT | VUE JS | HTML5/CSS3
          </div>
          <div style="color: #00d1c1 !important;" class="text-h4 q-mt-md text-grey-2 my-font">
            Sudhir Kumar Gupta
          </div>
        </div>
      </div>
      <div class="row" id="id_about_me">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-5 col-md-5">
          <img src="../assets/my_2.jpeg" style="width: 100%;">
        </div>
        <div class="col-lg-5 col-md-5">
          hi
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="row" id="id_projects">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-5 col-md-5">
          <img src="../assets/my_2.jpeg" style="width: 100%;">
        </div>
        <div class="col-lg-5 col-md-5">
          hi
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="row" id="id_skills">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-5 col-md-5">
          <img src="../assets/my_2.jpeg" style="width: 100%;">
        </div>
        <div class="col-lg-5 col-md-5">
          hi
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="row" id="id_contact">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-5 col-md-5">
          <img src="../assets/my_2.jpeg" style="width: 100%;">
        </div>
        <div class="col-lg-5 col-md-5">
          hi
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
    </div>


    <!-- mobile-design -->
    <div  class="mobile-view-rpl" style="padding-top:50px;">
      <div id="home-mb" class="full-height full-width flex flex-center text-center"
        style="z-index:0;height: 100vh !important;"
      >
        <div>
          <div class="text-h5" style="color: #00d1c1;">
            WELCOME TO MY PAGE
          </div>
          <div class="text-h3  q-py-sm q-my-md"
            style="border-top:3px solid #00d1c1;border-bottom: 3px solid #00d1c1; color: #00d1c1;"
          >
            I'M A FRONT-END DEVELOPER
          </div>
          <div class="text-h5" style="color: #00d1c1;">
            JAVASCRIPT | VUE JS | HTML5/CSS3
          </div>
          <div style="color: #00d1c1 !important;" class="text-h4 q-mt-md text-grey-2 my-font">
            Sudhir Kumar Gupta
          </div>
        </div>
      </div>

      <div id="id_about_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div>
              <img src="../assets/my_2.jpeg" style="width: 100%;">
            </div>
            <div class="q-pt-md">
              hi
            </div>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div id="id_projects_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div>
              <img src="../assets/my_2.jpeg" style="width: 100%;">
            </div>
            <div class="q-pt-md">
              hi
            </div>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div id="id_skills_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div>
              <img src="../assets/my_2.jpeg" style="width: 100%;">
            </div>
            <div class="q-pt-md">
              hi
            </div>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div id="id_contact_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div>
              <img src="../assets/my_2.jpeg" style="width: 100%;">
            </div>
            <div class="q-pt-md">
              hi
            </div>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {scroll} from 'quasar'
const {getScrollTarget, setScrollPosition} = scroll
export default {
  data() {
    return {
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
</style>
