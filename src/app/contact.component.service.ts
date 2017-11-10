import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PostService {
  private API_ENDPOINT = '//jsonplaceholder.typicode.com/posts'; //replace with your API ENDPOINT
  private jwt_token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
  private MAIL_ENDPONT = '/assets/php/contact-form.php';



  constructor(private _http: Http) {}

  saveContact(contact: any) {
  let headers = new Headers({ 'Content-Type': 'application/json' }); // create new Headers object with header Content-Type is application/json.
  headers.append('Authorization', 'Bearer ' + this.jwt_token); //JWT token
  let options = new RequestOptions({ headers: headers });

    return this._http.post(this.API_ENDPOINT, contact)
      .map(res => res.json());
  }

  //===============================Send the contact form data in a Mail =============================//
  sendMail(contact_form:Object){
    //Prepare a proper container to send the data
      const body = new URLSearchParams();
    //Transfer the data structure to the container 
      Object.keys(contact_form).forEach(key => {body.set(key, contact_form[key])});
    //Create request headers
      let headers = new Headers({'Content-type':'application/x-www-form-urlencoded'});
    //Return the responce fron the Mailer service
      return this._http.post(this.MAIL_ENDPONT, body.toString(), {headers:headers}).map(res => res.json());
  }

}