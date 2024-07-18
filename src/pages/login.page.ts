import { Page } from "@playwright/test";

export class LoginPage {
  usernameInput = this.page.locator("#user-name");
  passwordInput = this.page.locator("#password");
  loginButton = this.page.locator("#login-button");

  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/v1/index.html");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
