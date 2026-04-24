import { Locator } from "@playwright/test";

export class InventoryItem {
  constructor(private root: Locator) {}

  name = this.root.locator(".inventory_item_name");
  price = this.root.locator(".inventory_item_price");
  addCartBtn = this.root.locator("button");

  async addToCart() {
    await this.addCartBtn.click();
  }

  async getName() {
    return await this.name.textContent();
  }
}
