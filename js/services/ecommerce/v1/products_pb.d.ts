import * as jspb from 'google-protobuf'

import * as common_messages_pb from '../../../common/messages_pb';


export class ListProductsRequest extends jspb.Message {
  getPageOptions(): common_messages_pb.PageOptions | undefined;
  setPageOptions(value?: common_messages_pb.PageOptions): ListProductsRequest;
  hasPageOptions(): boolean;
  clearPageOptions(): ListProductsRequest;

  getSortBy(): ProductSortBy;
  setSortBy(value: ProductSortBy): ListProductsRequest;

  getSearchTerm(): string;
  setSearchTerm(value: string): ListProductsRequest;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): ListProductsRequest;
  clearCategoriesList(): ListProductsRequest;
  addCategories(value: string, index?: number): ListProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsRequest): ListProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ListProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsRequest;
  static deserializeBinaryFromReader(message: ListProductsRequest, reader: jspb.BinaryReader): ListProductsRequest;
}

export namespace ListProductsRequest {
  export type AsObject = {
    pageOptions?: common_messages_pb.PageOptions.AsObject,
    sortBy: ProductSortBy,
    searchTerm: string,
    categoriesList: Array<string>,
  }
}

export class ListProductsResponse extends jspb.Message {
  getProductsList(): Array<Product>;
  setProductsList(value: Array<Product>): ListProductsResponse;
  clearProductsList(): ListProductsResponse;
  addProducts(value?: Product, index?: number): Product;

  getTotal(): number;
  setTotal(value: number): ListProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsResponse): ListProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsResponse;
  static deserializeBinaryFromReader(message: ListProductsResponse, reader: jspb.BinaryReader): ListProductsResponse;
}

export namespace ListProductsResponse {
  export type AsObject = {
    productsList: Array<Product.AsObject>,
    total: number,
  }
}

export class GetProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): GetProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductRequest): GetProductRequest.AsObject;
  static serializeBinaryToWriter(message: GetProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductRequest;
  static deserializeBinaryFromReader(message: GetProductRequest, reader: jspb.BinaryReader): GetProductRequest;
}

export namespace GetProductRequest {
  export type AsObject = {
    productId: string,
  }
}

export class GetProductResponse extends jspb.Message {
  getDetail(): Product | undefined;
  setDetail(value?: Product): GetProductResponse;
  hasDetail(): boolean;
  clearDetail(): GetProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductResponse): GetProductResponse.AsObject;
  static serializeBinaryToWriter(message: GetProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductResponse;
  static deserializeBinaryFromReader(message: GetProductResponse, reader: jspb.BinaryReader): GetProductResponse;
}

export namespace GetProductResponse {
  export type AsObject = {
    detail?: Product.AsObject,
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): Product;

  getName(): string;
  setName(value: string): Product;

  getDescription(): string;
  setDescription(value: string): Product;

  getBrief(): string;
  setBrief(value: string): Product;

  getPrice(): number;
  setPrice(value: number): Product;

  getInStock(): boolean;
  setInStock(value: boolean): Product;

  getImageUrlList(): Array<string>;
  setImageUrlList(value: Array<string>): Product;
  clearImageUrlList(): Product;
  addImageUrl(value: string, index?: number): Product;

  getSeller(): Seller | undefined;
  setSeller(value?: Seller): Product;
  hasSeller(): boolean;
  clearSeller(): Product;

  getStarRating(): number;
  setStarRating(value: number): Product;

  getRatingCount(): number;
  setRatingCount(value: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    brief: string,
    price: number,
    inStock: boolean,
    imageUrlList: Array<string>,
    seller?: Seller.AsObject,
    starRating: number,
    ratingCount: number,
  }
}

export class Seller extends jspb.Message {
  getSellerId(): string;
  setSellerId(value: string): Seller;

  getName(): string;
  setName(value: string): Seller;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seller.AsObject;
  static toObject(includeInstance: boolean, msg: Seller): Seller.AsObject;
  static serializeBinaryToWriter(message: Seller, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seller;
  static deserializeBinaryFromReader(message: Seller, reader: jspb.BinaryReader): Seller;
}

export namespace Seller {
  export type AsObject = {
    sellerId: string,
    name: string,
  }
}

export class CreateProductRequest extends jspb.Message {
  getProduct(): Product | undefined;
  setProduct(value?: Product): CreateProductRequest;
  hasProduct(): boolean;
  clearProduct(): CreateProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
  static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
  export type AsObject = {
    product?: Product.AsObject,
  }
}

export class DeleteProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): DeleteProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductRequest): DeleteProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductRequest;
  static deserializeBinaryFromReader(message: DeleteProductRequest, reader: jspb.BinaryReader): DeleteProductRequest;
}

export namespace DeleteProductRequest {
  export type AsObject = {
    productId: string,
  }
}

export class DeleteProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductResponse): DeleteProductResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductResponse;
  static deserializeBinaryFromReader(message: DeleteProductResponse, reader: jspb.BinaryReader): DeleteProductResponse;
}

export namespace DeleteProductResponse {
  export type AsObject = {
  }
}

export class ProductInternal extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): ProductInternal;
  hasMeta(): boolean;
  clearMeta(): ProductInternal;

  getName(): string;
  setName(value: string): ProductInternal;

  getDescription(): string;
  setDescription(value: string): ProductInternal;

  getSeller(): Seller | undefined;
  setSeller(value?: Seller): ProductInternal;
  hasSeller(): boolean;
  clearSeller(): ProductInternal;

  getBrief(): string;
  setBrief(value: string): ProductInternal;

  getPrice(): number;
  setPrice(value: number): ProductInternal;

  getInStock(): boolean;
  setInStock(value: boolean): ProductInternal;

  getImageUrlList(): Array<string>;
  setImageUrlList(value: Array<string>): ProductInternal;
  clearImageUrlList(): ProductInternal;
  addImageUrl(value: string, index?: number): ProductInternal;

  getStarRating(): number;
  setStarRating(value: number): ProductInternal;

  getRatingCount(): number;
  setRatingCount(value: number): ProductInternal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductInternal.AsObject;
  static toObject(includeInstance: boolean, msg: ProductInternal): ProductInternal.AsObject;
  static serializeBinaryToWriter(message: ProductInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductInternal;
  static deserializeBinaryFromReader(message: ProductInternal, reader: jspb.BinaryReader): ProductInternal;
}

export namespace ProductInternal {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    name: string,
    description: string,
    seller?: Seller.AsObject,
    brief: string,
    price: number,
    inStock: boolean,
    imageUrlList: Array<string>,
    starRating: number,
    ratingCount: number,
  }
}

export enum ProductSortBy { 
  PRODUCT_SORTBY_NAME = 0,
  PRODUCT_SORTBY_PRICE = 1,
  PRODUCT_SORTBY_POPULARITY = 2,
  PRODUCT_SORTBY_RATING = 3,
}
