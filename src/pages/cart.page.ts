import { Page } from "@playwright/test";

export class CartPage {
  cartItemsContainer = this.page.locator(".cart_item");
  checkoutButton = this.page.locator(".checkout_button");

  constructor(private page: Page) {}
}
