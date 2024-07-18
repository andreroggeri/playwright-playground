import { ItemDetails } from "./pages/products.page";
import { credentials } from "./utils/credentials";
import { expect, test } from "./utils/fixtures";

test("Checkout flow", async ({ loginPage, productsPage, cartPage, checkoutPage, overviewPage, completionPage }) => {
  const user = credentials.validUser;

  let backpack: ItemDetails;
  let onesie: ItemDetails;

  await test.step("should login", async () => {
    await loginPage.open();
    await loginPage.login(user.email, user.password);
  });

  await test.step("should add items to cart", async () => {
    backpack = await productsPage.addItemToCart("Sauce Labs Backpack");
    onesie = await productsPage.addItemToCart("Sauce Labs Onesie");

    expect(backpack.price).toBe("$29.99");
    expect(onesie.price).toBe("$7.99");
    expect(backpack.description).not.toBeFalsy();
    expect(onesie.description).not.toBeFalsy();
    await expect(productsPage.headerComponent.cartBadge).toHaveText("2");
  });

  await test.step("should navigate to cart and view added items", async () => {
    await productsPage.headerComponent.cartButton.click();

    await expect(cartPage.cartItemsContainer).toHaveCount(2);
    await expect(cartPage.cartItemsContainer.nth(0)).toContainText(backpack.name);
    await expect(cartPage.cartItemsContainer.nth(0)).toContainText(backpack.price.replace("$", ""));
    await expect(cartPage.cartItemsContainer.nth(0)).toContainText(backpack.description);
    await expect(cartPage.cartItemsContainer.nth(1)).toContainText(onesie.name);
    await expect(cartPage.cartItemsContainer.nth(1)).toContainText(onesie.price.replace("$", ""));
    await expect(cartPage.cartItemsContainer.nth(1)).toContainText(onesie.description);
  });

  await test.step("should fill contact information", async () => {
    await cartPage.checkoutButton.click();

    await checkoutPage.fillInformation({ firstName: "John", lastName: "Doe", zipCode: "12345" });
  });

  await test.step("should view the order summary and total", async () => {
    await checkoutPage.continueButton.click();

    await expect(overviewPage.itemsContainer).toHaveCount(2);
    await expect(overviewPage.itemsContainer.nth(0)).toContainText(backpack.name);
    await expect(overviewPage.itemsContainer.nth(0)).toContainText(backpack.price);
    await expect(overviewPage.itemsContainer.nth(0)).toContainText(backpack.description);
    await expect(overviewPage.itemsContainer.nth(1)).toContainText(onesie.name);
    await expect(overviewPage.itemsContainer.nth(1)).toContainText(onesie.price);
    await expect(overviewPage.itemsContainer.nth(1)).toContainText(onesie.description);
    await expect(overviewPage.subtotalLabel).toHaveText("Item total: $37.98");
    await expect(overviewPage.taxLabel).toHaveText("Tax: $3.04");
    await expect(overviewPage.totalLabel).toHaveText("Total: $41.02");
  });

  await test.step("should finish the checkout process", async () => {
    await overviewPage.finishButton.click();

    await expect(completionPage.header).toHaveText("THANK YOU FOR YOUR ORDER");
    await expect(completionPage.subHeader).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
    );
  });
});
