import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Product {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  readonly category?: string;
  readonly inventory?: number;
  readonly createdAt?: string;
  readonly baseType?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}