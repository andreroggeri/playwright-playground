import { Page } from "@playwright/test";
import { ensureDefined } from "../utils/string";
import { HeaderComponent } from "./components/header.component";

export interface ItemDetails {
  price: string;
  name: string;
  description: string;
}

export class ProductsPage {
  header = this.page.locator(".product_label");
  productsContainer = this.page.locator(".inventory_item");

  constructor(private page: Page, public headerComponent: HeaderComponent) {}

  async addItemToCart(itemName: string): Promise<ItemDetails> {
    const itemNameLocator = this.page.getByText(itemName);
    const itemContainer = this.page.locator(".inventory_item").filter({ has: itemNameLocator });

    const price = await itemContainer.locator(".inventory_item_price").textContent();
    const name = await itemContainer.locator(".inventory_item_name").textContent();
    const description = await itemContainer.locator(".inventory_item_desc").textContent();

    await itemContainer.locator(".btn_inventory").click();

    return { price: ensureDefined(price), name: ensureDefined(name), description: ensureDefined(description) };
  }
}
