import { Locator, Page, expect } from "playwright/test";

import { Header } from "../components/Herader";

export abstract class BasePage{ // abtsraction, inheritance, encapsulation and polymorphim

readonly header:Header;
protected abstract readonly path:string; // 

constructor(readonly page: Page){

this.header= new Header(page); // object 

}
// open page 

async open():Promise<void>{
    await this.page.goto(this.path,{waitUntil: 'documentcontentloaded'});
}

// notifocations 
//closeNotification
// page title capture - get 
get pageTitle():Locator{
    return this.page.locator('.page-title h1');
}

}
