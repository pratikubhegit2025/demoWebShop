//mohini

import { Locator, Page, expect } from "@playwright/test";
// parent class 
import { BasePage } from "./BasePage";

// interface(gender,fistname,lastname,password)
import { newUser } from "../utils/randomData";
// 

// Inheritance: RegisterPage extends BasePage.
export class RegisterPage extends BasePage {
  // URL path for open().
  protected readonly path = '/register';
  // Gender radio buttons.
  readonly genderMale: Locator;
  readonly genderFemale: Locator;
  // Personal details and password fields.
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  // "Register" submit button.
  readonly registerButton: Locator;
  // Result message after registering.
  readonly result: Locator;
  // "Continue" button on the success page.
  readonly continueButton: Locator;

  // Constructor: init parent, then locators.
  constructor(page: Page) {
    // Run BasePage constructor first.
    super(page);
    // #gender-male / #gender-female = the two gender radio buttons.
    this.genderMale = page.locator('#gender-male');
    this.genderFemale = page.locator('#gender-female');
    // #FirstName / #LastName = name text boxes.
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    // #Email = email text box.
    this.email = page.locator('#Email');
    // #Password / #ConfirmPassword = password and confirm-password boxes.
    this.password = page.locator('#Password');
    this.confirmPassword = page.locator('#ConfirmPassword');
    // #register-button = "Register" button.
    this.registerButton = page.locator('#register-button');
    // `.result` inside `.page-body` = "Your registration completed" message.
    this.result = page.locator('.page-body .result');
    // <input class="register-continue-button"> = "Continue" after registration.
    this.continueButton = page.locator('input.register-continue-button');
  }

  // Fill and submit the form from a NewUser object (typed parameter = TS safety).
  async register(user: newUser): Promise<void> {
    // Ternary picks the right radio locator based on gender, then check() selects it.
    await (user.gender === 'male' ? this.genderMale : this.genderFemale).check();
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    // Confirm password must equal password.
    await this.confirmPassword.fill(user.password);
    // Submit the form.
    await this.registerButton.click();
  }

  // Reusable assertion: registration succeeded.
  async expectRegistrationSuccess(): Promise<void> {
    // Auto-retrying check for the success text.
    await expect(this.result).toContainText('Your registration completed');
  }
}
