const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://localhost:3000').then(function(){
driver.findElement(By.id('email')).then(function(element){
  element.sendKeys("ADMIN");
  driver.findElement(By.id('password')).then(function(passElement){
    passElement.sendKeys('password')
    console.log('I tu tekst jaki wyciągneliśmy z elementu.')
  })
  // driver.quit();
});
});

// Java simple example
// driver.get('http://localhost:3000')
// WebElement email = driver.findElement(By.id('email'));
// email.sendKeys("ADMIN");
// WebElement pass = driver.findElement(By.id('password'));
// pass.sendKeys('password');