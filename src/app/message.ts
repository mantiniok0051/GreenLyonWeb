//   ====================================================================================
//   ||  Version: 1.0                                                                  ||
//   ||  Creation date: September 2017                                                      ||
//   ||  Autor: Created by Green Lyon                                                  || 
//   ||  Owner: Kreis Industries                                                       || 
//   ||  Description: Model fo Message for Kreis Industries Website                     ||
//   ||  Last change: Creation Ver 1.0 September 2017 Green Lyon> Mariano Soto              ||
//   ====================================================================================                


// =================== message.model Template for BrandsComponent =================== 
export class Message {

    public contact_name:string; 
    public contact_mail:string;
    public contact_msg:string;
    public contact_subject?:string;
  constructor(
                _name:string, 
                _mail:string,
                _msg:string,
                _subject:string
            ) {  
                this.contact_name= _name;
                this.contact_mail= _mail;
                this.contact_msg= _msg;
                this.contact_subject= _subject;
              }

}