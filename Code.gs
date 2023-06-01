function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function processForm(address, email) {
  // Process the submitted text
  var map = Maps.newStaticMap().addMarker(address);
  GmailApp.sendEmail(email, 'Address in map', 'See Below', {attachments:[map]});
}