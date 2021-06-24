/**
 * Options for Ecommerce instance initialization.
 */
export interface StoreOptions {
  /**
   * ID of store to operate with.
   */
  readonly storeId: number,
  /**
   * Relative URL path to store page. Optional, default value '/store'.
   */
  readonly storeLocationPath?: string,
}
