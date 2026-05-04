import { Locator } from "@playwright/test";

export class CartItem {
  readonly name: Locator;
  readonly price: Locator;
  readonly qtt: Locator;
  readonly removeBtn: Locator;

  constructor(private root: Locator) {
    this.name = root.locator(".inventory_item_name");
    this.price = root.locator(".inventory_item_price");
    this.qtt = root.locator(".cart_quantity");
    this.removeBtn = root.locator("button");
  }

  async removeItem() {
    await this.removeBtn.click();
  }

  async getItemName() {
    return (await this.name.textContent()) ?? "";
  }

  async getItemPrice() {
    return (await this.price.textContent()) ?? "";
  }

  async getItemQt() {
    return (await this.qtt.textContent()) ?? "";
  }
}
