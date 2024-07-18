import { test as base } from "@playwright/test";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { CompletionPage } from "../pages/completion.page";
import { HeaderComponent } from "../pages/components/header.component";
import { LoginPage } from "../pages/login.page";
import { OverviewPage } from "../pages/overview.page";
import { ProductsPage } from "../pages/products.page";

interface PageFixtures {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  overviewPage: OverviewPage;
  completionPage: CompletionPage;
}

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  productsPage: async ({ page }, use) => {
    const headerComponent = new HeaderComponent(page);
    const productsPage = new ProductsPage(page, headerComponent);
    await use(productsPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  overviewPage: async ({ page }, use) => {
    const summaryPage = new OverviewPage(page);
    await use(summaryPage);
  },
  completionPage: async ({ page }, use) => {
    const completionPage = new CompletionPage(page);
    await use(completionPage);
  },
});

export default { test };

export { expect } from "@playwright/test";
