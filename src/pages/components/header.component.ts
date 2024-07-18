import { Page } from "@playwright/test";

export class HeaderComponent {
  cartBadge = this.page.locator(".shopping_cart_badge");
  cartButton = this.page.locator(".shopping_cart_link");

  constructor(private page: Page) {}
}
