import { Page } from "@playwright/test";

export class CompletionPage {
  container = this.page.locator("#checkout_complete_container");
  header = this.page.locator(".complete-header");
  subHeader = this.page.locator(".complete-text");

  constructor(private page: Page) {}
}
