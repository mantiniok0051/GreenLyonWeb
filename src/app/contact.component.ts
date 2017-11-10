import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

//======= Angular Google reCapta V2 ============== //
import { ReCaptchaComponent } from 'angular2-recaptcha';


// =======================FaceBook Service initilization ======================= //
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams } from 'ngx-facebook';

import { Message } from './message';
import { PostService} from './contact.component.service';



@Component({
  selector: 'contact-component',
  templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit, OnDestroy{
  
    
 //============= Contact Form Mesasage data members ================//
  private _sub;
  public _key:string='6Lcqii8UAAAAAMg64tkJfXQKSrhOzyddVPCUFpBv'; //Recaptcha ApiKey
  private res:any; 
  private _submitMessage = '';
  public contact_form:FormGroup;
  public form_title:string = 'Contact';
  public contact_name:string='';
  public contact_mail:string='';
  public contact_msg:string='';
  public contact_company:string='';
  public contact_phone:string='';
  public contact_services = ["CORPORATE IMAGE & IDENTITY", "ELECTRONIC COMMERSE", "CUSTOM SOFTWARE", "BUSINESS OPTIMIZATION", "IT CONSULTING", "PROJECT OUTSURCING", "CONTENT MARKETING & PRODUCTION", "WEB DESIGN & DEVELOPMENT", "TRAINING & EDUCATION", "GAME DEVELOPMENT", "SOCIAL MARKETING"];
  public succesfully_sent:boolean=false;
  public contact_send:any;

//================= Google reCaptcha data memebers =============//
  public recapcha_token:string='';
  public isTrusted:boolean=false;
  public secret:string='';

//==================Contact vía FB data members ======================//
  public fb_sesion;


  //==================================== Contact form =======================//
 



    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    @ViewChild('contact_send_btn') button;

    constructor(private fBuilder:FormBuilder, private postService:PostService, private fb: FacebookService) { }

    ngOnInit() {      
      this.succesfully_sent = false;
      this.captcha.reset();

      this.contact_form = this.fBuilder.group({
        'contact_name':[null, Validators.required],
        'contact_mail':[null, Validators.compose([Validators.required, Validators.email])],
        'contact_company':[null, Validators.required],
        'contact_phone':[null, Validators.required],
        'contact_services':[null, Validators.required],
        'contact_msg':[null, Validators.required]
      })
      let initParams: InitParams = {
      appId: '165825823966727',
      xfbml: true,
      version: 'v2.10',
      cookie: true
      };
 
      this.fb.init(initParams);
    }

    ngOnDestroy(){
      // clean subscription when component destroy
      if (this._sub) {
        this._sub.unsubscribe();
      }
  }

onSubmit(){
       this.succesfully_sent = true;
       console.log(this.contact_form);
       
       console.log(this.contact_form.value);       
       console.log(this.contact_form.value);
       let formValue:Object = this.contact_form.value;

       // Asynchronously sen the information
      this._sub = this.postService.sendMail(formValue)
        .subscribe(data => {
          console.log(data)
          this.res = data;
          console.log(this.res)
        });
      this.contact_form.reset();      
      this.isTrusted=false;
      this.recapcha_token = '';
       this.succesfully_sent = false;
      this.ngOnInit();
    }
  
  isUserTrusted():boolean{
    let response:boolean=false;
        if(this.isTrusted && this.secret.length > 5){
          response = true;
        }
      return response;
    }

    processReCaptcha($event){
      if(event.isTrusted){
        this.isTrusted=event.isTrusted;
        this.recapcha_token = this.captcha.getResponse().toString();
      }
      console.log(this.captcha.getResponse());
      
    }


// ===========================Handle message vía FaceBook=========================== //

  //-Check if user has signed in vía FB
  getFBStatus() :boolean{
    let isloged:boolean = false;
    this.fb.getLoginStatus()
    .then((res:any) => {
      if(res.status == "connected") {
        isloged = true
      }
    })
    .catch(this.handleError);
    return isloged;
  }
  //-Login with facebook 
  login2FB() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list,user_birthday,user_hometown,user_likes,ads_read'
    };

    this.fb_sesion = this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        this.fb_sesion = res;
      })
      .catch(this.handleError);

  }
  //-Build and display send dialog
  buildFBMessage() {

      const options: UIParams = {
        method: 'send',
        to: '1603828853165224',
        link:'http://greenlyon.com/greenlyon',
        redirect_uri: 'http://greenlyon.com/greenlyon'
      };

      this.fb.ui(options)
        .then((res: UIResponse) => {
          console.log('Got the users profile', res);
        })
        .catch(this.handleError);

    }
  contactViaFB(){
    // 1-Check if user has signed in vía FB
      if(!this.getFBStatus()) {
         // A)User is not logged
          // A1)-Login with facebook
          this.login2FB();
      }
      // B)User is logged 
      //  2-Build and display send dialog
      this.buildFBMessage();
      
  }
  animateContactSocial($event){
    if($event.type == 'mouseover'){
      document.querySelector("#contact_via_fb").classList.toggle("rubberBand",true);}
    else if($event.type == 'mouseout'){
      document.querySelector("#contact_via_fb").classList.toggle("rubberBand",false);}
    else{console.log($event.type);
    }

  }
  outContactSocial(){
    document.querySelector("#contact_via_fb").classList.toggle("rubberBand",false);
  }


/**
   * ========================== REMOVE FOR PRODUCTION ========================== 
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }
}