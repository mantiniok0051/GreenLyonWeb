/*
                    hhhhhhhhhhhhhhhhhhhhhhhhyyhhhhhhhhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhhhhyso+//+osyhhhhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhyo+//////////+oyhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhyso+////////////////+osyhhhhhhhhhhhhh
                    hhhhhhhhhhys+////////////////////////+syhhhhhhhhhh
                    hhhhhhyso+//////////////////////////////+osyhhhhhh
                    hhhhyo//////////:-`.:////////:.`-://////////oyhhhh
                    hhhhsso++////-.       .-//-.       .-////++++shhhh
                    hhhhsssssoo::////////`      `////////::++++++shhhh
                    hhhhssssssso+++osssss:      :ssssso++++++++++shhhh
                    hhhhsssssssso/``....++      ++....` :++++++++shhhh
                    hhhhsssssssssso.     /`    `/     .++++++++++shhhh
                    hhhhssssssssssso      .::::.      +++++++++++shhhh
                    hhhhssssssssssss       `++`       +++++++++++shhhh
                    hhhhssssssssssss        ++        +++++++++++shhhh
                    hhhhssssssssssss.      `++`      .+++++++++++shhhh
                    hhhhssssssssssssso:``..`  `..``:+++++++++++++shhhh
                    hhhhssssssssssssssss+        /+++++++++++++++shhhh
                    hhhhyssssssssssssssss-      -++++++++++++++ooyhhhh
                    hhhhhhhyssssssssssssso.    `++++++++++++osyhhhhhhh
                    hhhhhhhhhhyysssssssssssso+++++++++++oosyhhhhhhhhhh
                    hhhhhhhhhhhhhhyssssssssso++++++++osyhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhyyssssso+++++osyhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhhhhhysso+osyyhhhhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhhhhhhhhyyhhhhhhhhhhhhhhhhhhhhhhhh


  ===========================================================================================
  ||  Version: 1.0                                                                         ||
  ||  Creation date: August 2017                                                           ||
  ||  Autor: Created by Green Lyon                                                         ||
  ||  Owner: Green Lyon                                                                    ||
  ||  Description: Base HTML code for Green Lyon Website                                   ||
  ||  Last change: Creation Ver 1.0 August 2017 Green Lyon > Chrystian, Leonardo & Mariano ||
  ===========================================================================================


*/

// =================== app.component  ===================

import { Component, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message } from './message';
import {PostService} from './contact.component.service';

//======= Angular Google reCapta V2 ==============
//import { ReCaptchaComponent } from 'angular2-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    /* --- Textos Bienvenido --- */
      public tituloBienvenido: string = "BIENVENIDO";
        public textoB1 : string= " es una empresa dedicada a la innovación digital y tecnológica de las empresas, desarrollamos soluciones creativas y de alto impacto, basadas en el estudio y análisis de mercados, las las empresas y sus objetivos.";
        public textoB2: string = "Contamos con talentosos colaboradores especializados en áreas clave como; marketing, diseño gráfico, producción de software, aplicaciones móviles, sitios web, implementación de tecnologías,  inteligencia de negocios, entre otros.";
        public textoB3: string = "Contáctanos para una evaluación sin compromiso.";

    /* --- Textos Nosotros --- */
      public tituloNosotros: string = "NOSOTROS";
      public textoN1: string = "Somos un grupo de profesionales multidisciplinarios, apasionados por el éxito de nuestros clientes y la satisfacción de sus necesidades y clientes. Sabemos que la competitividad, la innovación y la calidad son cualidades de gran valor y difíciles de desarrollar, nosotros tenemos los medios y el compromiso con cada uno de nuestros clientes de guiarlos y apoyarlos en cada paso del ciclo de mejora continua de alta rentabilidad.";

    /* --- Textos Filosofía --- */
      public tituloFilosofia: string ="FILOSOFÍA";
        public subtituloF1: string = "OBJETIVOS";
        public subtituloF2: string = "MISIÓN";
        public subtituloF3: string = "VISIÓN";
          public textoF1: string = "• Detonar negocios altamente rentables y competitivos a corto, mediano y largo plazo.";
          public textoF2: string = "• Facilitar la transición orgánica al uso de mejores prácticas y estándares mundiales.";
          public textoF3: string = "• Generar el más alto grado de identificación y lealtad hacia tu marca.";
          public textoF4: string = "Desarrollar los mercados y economías a través de modelos de negocio con alto impacto, sustentados en las mejores prácticas, tecnologías confiables y estrategias disruptivas que sean capaces de romper con los paradigmas y cambiar el panorama socioeconómico.";
          public textoF5: string = "Ser reconocidos como la consultora responsable de desarrollar el mayor número de empresas de alto impacto en México y el mundo. Capaces de rentabilizar cualquier proyecto y/o idea de negocios.";

    /* --- Textos Valores --- */
      public tituloValores: string = "VALORES";
        public subtituloV1: string = "LIDERAZGO";
        public subtituloV2: string = "SERVICIO";
        public subtituloV3: string = "INNOVACIÓN";
          public textoV1: string = "Comprendemos que  la mejor forma de mantenerse al frente de cualquier industria, es a través de la innovación continua de las organizaciones y sus integrantes.";
          public textoV2: string = "Para nosotros,  el servicio y atención a nuestros clientes y sus necesidades está por encima de todo.";
          public textoV3: string = "Desarrollamos soluciones que cambian el estatus quo tomando ventaja de nuevos mercados y oportunidades antes descuidados.";


//  ====================================Sección sercvicios====================================  //
    /* --- Textos Servicios --- */
    public tituloServicios:string =  "SERVICIOS";
      public ser_0 = ["CORPORATE IMAGE & IDENTITY", "/assets/img/services/tm.png","Trabajaremos para diseñar y desarrollar tu marca para que proyecte una imagen atractiva a tu mercado y acorde a tu filosofía e identidad." ];
      public ser_1 = ["ELECTRONIC COMMERSE", "/assets/img/services/tag_e.png", "Contamos con un equipo de expertos que te guiará pasa a paso para poner tu comercio electrónico en marcha de forma fácil, rápida y segura."];
      public ser_2 = ["CUSTOM SOFTWARE", "/assets/img/services/software.png", "Contamos con un equipo de expertos que te guiará pasa a paso para poner tu comercio electrónico en marcha de forma fácil, rápida y segura."];
      public ser_3 = ["BUSINESS OPTIMIZATION", "/assets/img/services/lightbulb1.png", "Ponemos a tu disposición una amplia red de colaboradores y expertos que permitan optimizar tus procesos y estrategias para obtener los mejores resultados."];
      public ser_4 = ["IT CONSULTING", "/assets/img/services/it.png", "Generamos valor para tu empresa, convirtiéndola en un negocio inteligente por medio de la implementación de IT y herramientas para análisis y desarrollo empresarial."];
      public ser_5 = ["PROJECT OUTSURCING", "/assets/img/services/outsourcing.png", "Te ayudamos a desarrollar tus proyectos a través de la tercerización de tareas y procesos..."];
      public ser_6 = ["CONTENT MARKETING & PRODUCTION", "/assets/img/services/shareble.png", "Diseño, producción y optimización de contenidos multimedia y estrategia, para plataformas electrónicas con fines promocionales, educacionales, inducción, presentaciones, etc."];
      public ser_7 = ["WEB DESIGN & DEVELOPMENT", "/assets/img/services/devices.png", "Diseñamos sitios web innovadores, responsivos y altamente funcionales y aplicaciones IOs y Android."];
      public ser_8 = ["TRAINING & EDUCATION", "/assets/img/services/brain.png", "Desarrollamos  materiales de aprendizaje para tu empresa u organización además   de impartir cursos de capacitación en herramientas tecnológicas de la actualidad como Google for Business."];
      public ser_9 = ["GAME DEVELOPMENT", "/assets/img/services/controler.png", "Plasmamos tus ideas en un mini-juego en 2D para Android & IOS para darte a conocer de una manera original dentro de nuevos mercados."];
      public ser_10 = ["SOCIAL MARKETING", "/assets/img/services/mkt2.png", "Promovemos y administramos las redes sociales de tu empresa para mantener contacto continuo y de calidad con tus clientes para que te adaptes mejor a sus necesidades."];
    public svcdetails = [
             this.ser_0, this.ser_1, this.ser_2, this.ser_3, this.ser_4, this.ser_5, this.ser_6, this.ser_7, this.ser_8, this.ser_9, this.ser_10

    ];


  /* --- /Textos Servicios --- */

  /* --- Miembros Servicios --- */
    public ovl_btnX:string = "";
    public svc_overlay:string = "overlay_hidden";
    public ovl_svc_img  = "";
    public ovl_svc_txt:string  = "";
    public ovl_svc_ttl:string  = "";

    public svc_details(service:number){
      let svc = this.svcdetails[service];
      this.ovl_svc_img = svc[1];
      this.ovl_svc_txt = svc[2];
      this.ovl_svc_ttl = svc[0];
      this.ovl_btnX = "/assets/img/services/close.png";
      let svcs = document.getElementsByClassName("svc_btn");
        for (var i = svcs.length - 1; i >= 0; i--) {
          svcs[i].classList.toggle("svcs_blur",true)
        }
      this.svc_overlay = "overlay_open";
    }
    public close_svc_overlay(){
      this.ovl_svc_img = "";
      this.ovl_svc_txt = "";
      this.ovl_svc_ttl = "";
      this.svc_overlay = "overlay_hidden";
      let svcs = document.getElementsByClassName("svc_btn");
        for (var i = svcs.length - 1; i >= 0; i--) {
          svcs[i].classList.toggle("svcs_blur",false)
        }
    }

  /* --- /Métodos Servicios --- */

  /* --- Textos Portfolio --- */
  public tituloPortfolio:string ="PORTFOLIO";
    public texto1P:string = "Estos son algunos de los proyectos y soluciones más recientes que hemos desarrollado   para nuestros clientes."
  /* --- Textos Portfolio --- */



  /* --- Textos social hub --- */
   public tituloSocialHub:string = "SOCIAL HUB";

   public fb_video_width:string= "90%";
  /* --- Textos social hub --- */


  public showContactArea(){
    document.querySelector('#contact_container').classList.toggle('contact_open', true);
    document.querySelector('#contact_box').classList.toggle('contact_box_closed', false);
    document.querySelector('#contact_box').classList.toggle('contact_box_open', true);
    document.querySelector('#contact_component').classList.toggle('contact_component_closed', false);
    document.querySelector('#contact_component').classList.toggle('contact_component_open', true);
    document.querySelector('#close_contact_btn').classList.toggle('contact_btn_hidden', false);
    document.querySelector('#close_contact_btn').classList.toggle('contact_btn_visible', true);
    document.querySelector('#contact_tag').classList.toggle('contact_tag_hidden', false);
    document.querySelector('#contact_tag').classList.toggle('contact_tag_visible', true);
    document.querySelector('#contact_box').classList.toggle('animated', true);
    document.querySelector('#contact_box').classList.toggle('fadeInRight', true);

  }
  public hideContactArea(){
    document.querySelector('#contact_container').classList.toggle('contact_open', false);
    document.querySelector('#contact_box').classList.toggle('contact_box_open', false);
    document.querySelector('#contact_box').classList.toggle('contact_box_closed', true);
    document.querySelector('#contact_component').classList.toggle('contact_component_open', false);
    document.querySelector('#contact_component').classList.toggle('contact_component_closed', true);
    document.querySelector('#close_contact_btn').classList.toggle('contact_btn_visible', false);
    document.querySelector('#close_contact_btn').classList.toggle('contact_btn_hidden', true);
    document.querySelector('#contact_tag').classList.toggle('contact_tag_visible', false);
    document.querySelector('#contact_tag').classList.toggle('contact_tag_hidden', true);
    document.querySelector('#contact_box').classList.toggle('animated', false);
    document.querySelector('#contact_box').classList.toggle('fadeInRight', false);

  }

  public animateCloseContact($event){
    if($event.type == 'mouseover'){
      document.querySelector("#close_contact_btn").classList.toggle("animated",true);
      document.querySelector("#close_contact_btn").classList.toggle("flash",true);}
    else if($event.type == 'mouseout'){
      document.querySelector("#close_contact_btn").classList.toggle("animated",false);
      document.querySelector("#close_contact_btn").classList.toggle("flash",false);}
    else{console.log($event.type);
    }
  }

  public animateContactSlit($event){
    if($event.type == 'mouseover'){
      document.querySelector("#contact_slit").classList.toggle("animated",true);
      document.querySelector("#contact_slit").classList.toggle("headShake",true);}
    else if($event.type == 'mouseout'){
      document.querySelector("#contact_slit").classList.toggle("animated",false);
      document.querySelector("#contact_slit").classList.toggle("headShake",false);}
    else{console.log($event.type);
    }
  }
}
