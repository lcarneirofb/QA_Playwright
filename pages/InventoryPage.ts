import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly InventoryItem: Locator;
  readonly sortDropdown: Locator;
  readonly cartBtn: Locator;

  constructor(private page: Page) {
    this.InventoryItem = page.locator(".inventory_item");
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.cartBtn = page.locator(".shopping_cart_link");
  }

  async getItemCount() {
    return await this.InventoryItem.count();
  }

  async openCart() {
    await this.cartBtn.click();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);
  }
}
