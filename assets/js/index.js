function sendEmail() {
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var subject = document.getElementById("subject").value;
   var message1 = document.getElementById("message").value;
   
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "julroubens2005@gmail.com",
        Password : "7363E9F71838F0714103904643A182C1BDC3",
        To : email,
        From : "julroubens2005@gmail.com",
        Subject : subject,
        Body : name+"\n"+message1
      }).then(
        message => alert(message)
      );
}
