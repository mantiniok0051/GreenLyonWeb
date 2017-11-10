<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';
//Validate Form structure 
if (isset($_POST['contact_name']) && isset($_POST['contact_mail']) && isset($_POST['contact_company']) && isset($_POST['contact_phone']) && isset($_POST['contact_services']) && isset($_POST['contact_msg'])) {

    //check if any of the inputs are empty
    if (empty($_POST['contact_name']) || empty($_POST['contact_mail']) || empty($_POST['contact_company']) || isset($_POST['contact_phone']) || isset($_POST['contact_services'])  || empty($_POST['contact_msg'])) {
        $data = array('success' => false, 'message' => 'Por favor completa los campos obligatorios.');
        echo json_encode($data);
        exit;
    }


    $msg = '';
    date_default_timezone_set('Etc/UTC');

    //create an instance of PHPMailer
    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->SMTPDebug = 2;

    $mail->Host = 'mx1.hostinger.mx';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
 

    $mail->Username = 'contact_form@greenlyon.com';
    $mail->Password = ']M#oVX*1T&k5g#PE|k';

    $mail->setFrom('contact_form@greenlyon.com', 'Contact Form'); //sender
    $mail->AddAddress('marketing@greenlyon.com ', 'Green Lyon Marketing Team'); //recipient 
    
    if ($mail->addReplyTo($_POST['contact_mail'], $_POST['contact_name'])) {
        $mail->Subject = 'A visitor has left a comment';
        $mail->isHTML(false);

        $mail->Body = "Nombre: " . $_POST['contact_name'] . "\r\n\r\nCorreo:".$_POST['contact_mail'] . "\r\n\r\nEmpresa:" . $_POST['contact_company'] . "\r\n\r\nTeléfono:" . $_POST['contact_phone'] . "\r\n\r\nMensaje: " . stripslashes($_POST['contact_msg']);
    
          if(!$mail->send()) {
                $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
                echo json_encode($data);
                exit;
        }
        $data = array('success' => !false, 'message' => 'algo paso.');
        echo json_encode($data);
    }


    

    $data = array('success' => true, 'message' => 'En breve recibirías respuesta.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Por favor, completa los campos obligatorios.');
    echo json_encode($data);

}

?>