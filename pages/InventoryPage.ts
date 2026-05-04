import { Page, Locator } from "@playwright/test";
import { InventoryItem } from "../components/InventoryItem";

export class InventoryPage {
  readonly inventoryItem: Locator;
  readonly sortDropdown: Locator;
  readonly cartBtn: Locator;

  constructor(private page: Page) {
    this.inventoryItem = page.locator(".inventory_item");
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.cartBtn = page.locator(".shopping_cart_link");
  }

  async getItemCount() {
    return await this.inventoryItem.count();
  }

  async openCart() {
    await this.cartBtn.click();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);
  }

  getItemByName(name: string): InventoryItem {
    const item = this.page.locator(".inventory_item").filter({
      has: this.page.getByText(name),
    });

    return new InventoryItem(item);
  }
}
