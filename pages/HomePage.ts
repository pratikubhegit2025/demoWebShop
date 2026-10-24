import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";



export class HomePage extends BasePage{
    protected readonly path= '/';

//product-grid home-page-product-grid
//


readonly products :Locator;
readonly slider:Locator;


constructor(page:Page){
    //this and super
    super(page);
    this.products=page.locator('.product-grid home-page-product-grid'); //class
    this.slider=page.locator('.slider-wrapper');// class= slider-wrapper' 

}

}