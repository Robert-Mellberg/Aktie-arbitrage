function myFunction() {
  var properties = PropertiesService.getScriptProperties();
  var date = Utilities.formatDate(new Date(), "GMT+1", "yyyy-MM-dd HH:mm:ss");

  var data = properties.getProperty('Test');
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var aktier = sheet.getDataRange();
  
  var email = sheet.getRange(1, 11).getValue();
  var undreLimit = sheet.getRange(2, 11).getValue();
  var overLimit = sheet.getRange(3, 11).getValue();
  
  for(var i = 1; i <= aktier.getNumRows(); i++){
    var div = aktier.getCell(i, 3).getValue();
    var aktie = aktier.getCell(i, 4).getValue();
    var aktieBillig = aktier.getCell(i, 5).getValue();
    var aktieDyr = aktier.getCell(i, 6).getValue();
    
    if(div < undreLimit){
      if(properties.getProperty(aktie) != 'Köp'){
        var meddelande = 'S ' + aktie + ' ' + aktieBillig + ' och k ' + aktie + ' ' + aktieDyr;
        sheet.getRange(i, 7).setValue('Köp');
        sheet.getRange(i, 8).setValue(date);
        properties.setProperty(aktie, 'Köp');
        MailApp.sendEmail(email, 'Aktiearbitrage ' + aktie, meddelande);
        sheet.getRange(i, 15).setValue(email + ' ' + meddelande);
      }
    }
    else if(div > overLimit){
      if(properties.getProperty(aktie) != 'Sälj'){
        var meddelande = 'S ' + aktie + ' ' + aktieDyr + ' och k ' + aktie + ' ' + aktieBillig;
        sheet.getRange(i, 7).setValue('Sälj');
        sheet.getRange(i, 8).setValue(date);
        properties.setProperty(aktie, 'Sälj');
        MailApp.sendEmail(email, 'Aktiearbitrage ' + aktie, meddelande);
        sheet.getRange(i, 15).setValue(email + ' ' + meddelande);
      }
    }
  }
  sheet.getRange(1, 9, aktier.getNumRows()).setValue('Uppdaterad ' + date);
}
