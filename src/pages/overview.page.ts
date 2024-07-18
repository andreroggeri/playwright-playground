import { Page } from "@playwright/test";

export class OverviewPage {
  container = this.page.locator("#checkout_summary_container");
  itemsContainer = this.container.locator(".cart_item");
  subtotalLabel = this.container.locator(".summary_subtotal_label");
  taxLabel = this.container.locator(".summary_tax_label");
  totalLabel = this.container.locator(".summary_total_label");
  finishButton = this.container.locator(".cart_button");

  constructor(private page: Page) {}
}
