import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(private page: Page) {
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    this.loginBtn.click();
  }
}
