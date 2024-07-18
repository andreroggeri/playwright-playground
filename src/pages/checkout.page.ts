import { Page } from "@playwright/test";

export class CheckoutPage {
  container = this.page.locator(".checkout_info_container");
  firstNameInput = this.container.locator("#first-name");
  lastNameInput = this.container.locator("#last-name");
  zipCodeInput = this.container.locator("#postal-code");
  continueButton = this.container.locator(".cart_button");

  constructor(private page: Page) {}

  async fillInformation(params: { firstName: string; lastName: string; zipCode: string }) {
    await this.firstNameInput.fill(params.firstName);
    await this.lastNameInput.fill(params.lastName);
    await this.zipCodeInput.fill(params.zipCode);
  }
}
