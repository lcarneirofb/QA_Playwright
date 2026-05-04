import { Locator } from "@playwright/test";

export class InventoryItem {
  readonly name: Locator;
  readonly price: Locator;
  readonly addCartBtn: Locator;

  constructor(private root: Locator) {
    this.name = root.locator(".inventory_item_name");
    this.price = root.locator(".inventory_item_price");
    this.addCartBtn = root.locator("button");
  }

  async addToCart() {
    await this.addCartBtn.click();
  }

  async getName() {
    return (await this.name.textContent()) ?? "";
  }
}
