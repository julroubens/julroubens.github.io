function sendEmail() {
    Email.send({
        Host : "sandbox.smtp.mailtrap.io",
        Username : "adf7afeb170dcc",
        Password : "23b28d69ed2141",
        To : 'julroubens2005@gmail.com',
        From : "rougens.jules@esih.edu",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
      }).then(
        message => alert(message)
      );
      console.log('FAILED...', "ok");
   // var templateParams = {
   //    name: 'James',
   //    notes: 'Check this out!'
   // };


   // emailjs.send('service_7gbgr5d', 'YOUR_TEMPLATE_ID', templateParams) //use your Service ID and Template ID
   //    .then(function(response) {
   //       console.log('SUCCESS!', response.status, response.text);
   //    }, function(error) {
   //       console.log('FAILED...', error);
   //    });
}
