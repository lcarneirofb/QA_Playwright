import { Page, Locator } from "@playwright/test";
import { CartItem } from "../components/CartItem";

export class CartPage {
  readonly cartItem: Locator;
  readonly continueShopBtn: Locator;
  readonly checkoutBtn: Locator;

  constructor(private page: Page) {
    this.cartItem = page.locator(".inventory_item");
    this.continueShopBtn = page.locator('[data-test="continue-shopping"]');
    this.checkoutBtn = page.locator('[data-test]="checkout"');
  }

  async getCartItemCount() {
    return await this.cartItem.count();
  }

  async clickContinueShopping() {
    await this.continueShopBtn.click();
  }

  async checkOut() {
    await this.checkoutBtn.click();
  }

  getItemByName(name: string): CartItem {
    const item = this.page.locator(".inventory_item").filter({
      has: this.page.getByText(name),
    });

    return new CartItem(item);
  }
}
