/**
 * Created by Cynthia Ji on 6/03/15.
 */


 


    var  baseUrl = "http://www.abc.net.au/";
    var curTitle ="Bernard Tomic eliminated from the Sydney International in straight sets by Gilles Muller - ABC News (Australian Broadcasting Corporation)";
    var myStory ="TOP STORIES";
    var myMap ="MAP: Sydney 2000";
    var myMap2='Maps';
    //'Google Maps';
    var myelement ='';
    var mylink='';
    var i=1;
    //num.toString();

describe('ABCNet page test', function () {
    browser.ignoreSynchromization = true;
    browser.driver.manage().window().maximize();

    //static
    it('should be on correct page', function () {
        browser.driver.get(baseUrl+"/news/2015-01-15/tomic-out-of-sydney-international/6020172?WT.ac=statenews_nsw");
        browser.driver.getTitle().then(function(title) {
            
            expect(title).toEqual(curTitle);
            
            console.log(title);
        });
    });

    //blue map
    it('show Map', function () {
        browser.driver.get(baseUrl+"/news/2015-01-15/tomic-out-of-sydney-international/6020172?WT.ac=statenews_nsw");
        
          
        myelement = browser.driver.findElement(By.xpath('//div[@id="main_content"]/div/div/div/div/div[3]/div/a'));
        expect(myelement.getText()).toEqual(myMap);
         
        console.log(myMap);
        myelement.click();
        browser.driver.getTitle().then(function(title) {
            expect(title).toMatch(myMap2);
           
            console.log(title);
        });

    });

    //green dynamic browser through
    it('show Stories', function () {
        browser.driver.get(baseUrl+"/news/2015-01-15/tomic-out-of-sydney-international/6020172?WT.ac=statenews_nsw");
        myelement = browser.driver.findElement(By.xpath('//div[@id="main_content"]/div/div/div[2]/div/div/h2'));
  
   
        expect(myelement.getText()).toEqual(myStory);
        
     
        console.log(myStory);
         
        
    });

    //green dynamic browser through
    it('all links have hrefs', function() {
        
        myelement = browser.driver.findElement(By.xpath('//div[@id="main_content"]/div/div/div[2]/div/div/ul/li/a'));
        mylink =myelement.getAttribute('href');
        if ( !mylink.toBeNull) {
             browser.driver.get(mylink);
             browser.driver.getTitle().then(function(title) {
             console.log(title);
             //assert.equal('1', '1', '== Here is the title!');
             expect(true);
             browser.driver.get(baseUrl+"/news/2015-01-15/tomic-out-of-sydney-international/6020172?WT.ac=statenews_nsw");
            });
         }

         
         for (i=1; i<12;i++){
             myelement = browser.driver.findElement(By.xpath('//div[@id="main_content"]/div/div/div[2]/div/div/ul/li['+i.toString()+']/a'));
             mylink =myelement.getAttribute('href');
             if (!mylink.toBeNull) {
                 browser.driver.get(mylink);
                 browser.driver.getTitle().then(function(title) {
                 console.log(title);
                 //assert.equal('1', '1', '== Here is the title!');
                 expect(true);
                 browser.driver.get(baseUrl+"/news/2015-01-15/tomic-out-of-sydney-international/6020172?WT.ac=statenews_nsw");
                });
             }
             }
         
         myelement = browser.driver.findElement(By.xpath('//div[@id="main_content"]/div/div/div[2]/div/div/ul/li[8]/a'));
        mylink =myelement.getAttribute('href');
        if ( !mylink.toBeNull) {
             browser.driver.get(mylink);
             browser.driver.getTitle().then(function(title) {
             console.log(title);
             expect(true);
             //assert.equal('1', '1', '== Here is the title!');
             browser.driver.get(baseUrl+"/news/2015-01-15/tomic-out-of-sydney-international/6020172?WT.ac=statenews_nsw");
            });
         }

          
});


});


/*
*

});
* angularjs without
* browser.ignoreSynchronization = true
* browser.driver.manage().window().maximize();
 http://stackoverflow.com/questions/20927652/how-to-use-protractor-on-non-angularjs-website
 browser.driver.findElement(by.id('username')).sendKeys('Jane');
 browser.driver.findElement(by.id('password')).sendKeys('1234');
 browser.driver.findElement(by.id('clickme')).click();
angular with
 browser.element(by.id('s')).sendKeys('test automation');
 browser.element(by.id('searchsubmit')).click();
 browser.getTitle().then(function(title) {
 expect(title).toEqual('test automation | Search Results | Pactera');
 console.log(title);
 ////div[@id='main_content']/div/div/div[2]/div/div/ul/li[9]/a
    driver.get(baseUrl + "/news/2015-01-15/tomic-out-of-sydney-international/6020172?WT.ac=statenews_nsw");
    
    // red above  Blue below
    
    
    "Map: Sydney 2000".equals(driver.findElement(By.xpath("//div[@id='main_content']/div/div/div/div/div[3]/div/a")).getText())) break; } catch (Exception e) {}
    
     "Top Stories".equals(driver.findElement(By.cssSelector("div.inner > h2")).getText())) break; } catch (Exception e) {}
     
        try { if ("Pyne splits university changes in bid to revive stalled debate".equals(driver.findElement(By.linkText("Pyne splits university changes in bid to revive stalled debate")).getText())) break; } catch (Exception e) {}
     
 */
