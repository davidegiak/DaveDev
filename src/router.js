import {createRouter , createWebHistory } from 'vue-router'

import Main from './views/Main.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Project from './components/Project.vue'
import ContactForm from './components/ContactForm.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/DaveDev/',  //ROTTA CHE COMPARIRà SULL'URL
      name: 'home', //NOME DELLA ROTTA
      component: Main, //COMPONENTE COLLEGATO ALLA ROTTA (DEVE ESSERE IMPORTATO)
    },
    {
      path: '/about',  //ROTTA CHE COMPARIRà SULL'URL
      name: 'about', //NOME DELLA ROTTA
      component: About, //COMPONENTE COLLEGATO ALLA ROTTA (DEVE ESSERE IMPORTATO)
    },
    {
      path: '/projects',  //ROTTA CHE COMPARIRà SULL'URL
      name: 'projects', //NOME DELLA ROTTA
      component: Projects, //COMPONENTE COLLEGATO ALLA ROTTA (DEVE ESSERE IMPORTATO)
    },
    {
      path: '/project/:slug',
      name: 'Project',
      component: Project
    },
    {
      path: '/contact',  //ROTTA CHE COMPARIRà SULL'URL
      name: 'contact', //NOME DELLA ROTTA
      component: ContactForm, //COMPONENTE COLLEGATO ALLA ROTTA (DEVE ESSERE IMPORTATO)
    },
  ]
});

export { router };