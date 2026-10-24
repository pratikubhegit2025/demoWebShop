import { Locator, Page } from "@playwright/test";


export class Header{// class, object and methods 
   readonly registerLink:Locator;
   readonly loginLink: Locator;
   readonly logoutLink: Locator;
   readonly accountLink:Locator;
  readonly searchBox: Locator;
readonly searchButton: Locator;
readonly logo:Locator;

//these are variables


//private is accessspecifire 
    constructor(private readonly page :Page){// constructor
// variables and value 
const links =page.locator('.header-links');
this.registerLink =links.locator('a.ico-register');
this.loginLink=links.locator('a.ico-login');
this.logoutLink=links.locator('a.ico-logout');
this.accountLink=links.locator('a.account');


this.searchBox=page.locator('#small-searchterms');
this.searchButton=page.locator('.button-1 search-box-button');
this.logo =page.locator('.header-logo');

//ico-logout
//account
    }
// function / => 
// creation of method= inside class only 
// term = "Test";
    async search(): Promise<void>{
await this.searchBox.fill(term);// hardcoded 
await this.searchButton.click();


    }
}




