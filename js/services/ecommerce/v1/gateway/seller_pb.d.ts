import * as jspb from 'google-protobuf'

import * as common_messages_pb from '../../../../common/messages_pb';
import * as services_ecommerce_v1_products_pb from '../../../../services/ecommerce/v1/products_pb';
import * as services_ecommerce_v1_orders_pb from '../../../../services/ecommerce/v1/orders_pb';


export class ListProductsRequest extends jspb.Message {
  getPageOptions(): common_messages_pb.PageOptions | undefined;
  setPageOptions(value?: common_messages_pb.PageOptions): ListProductsRequest;
  hasPageOptions(): boolean;
  clearPageOptions(): ListProductsRequest;

  getSortBy(): ListProductsRequest.SortBy;
  setSortBy(value: ListProductsRequest.SortBy): ListProductsRequest;

  getSearchTerm(): string;
  setSearchTerm(value: string): ListProductsRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ListProductsRequest;
  clearTagsList(): ListProductsRequest;
  addTags(value: string, index?: number): ListProductsRequest;

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
    sortBy: ListProductsRequest.SortBy,
    searchTerm: string,
    tagsList: Array<string>,
  }

  export enum SortBy { 
    NAME = 0,
    PRICE = 1,
    POPULARITY = 2,
    RATING = 3,
  }
}

export class ListProductsResponse extends jspb.Message {
  getProductsList(): Array<services_ecommerce_v1_products_pb.Product>;
  setProductsList(value: Array<services_ecommerce_v1_products_pb.Product>): ListProductsResponse;
  clearProductsList(): ListProductsResponse;
  addProducts(value?: services_ecommerce_v1_products_pb.Product, index?: number): services_ecommerce_v1_products_pb.Product;

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
    productsList: Array<services_ecommerce_v1_products_pb.Product.AsObject>,
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
  getDetail(): services_ecommerce_v1_products_pb.Product | undefined;
  setDetail(value?: services_ecommerce_v1_products_pb.Product): GetProductResponse;
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
    detail?: services_ecommerce_v1_products_pb.Product.AsObject,
  }
}

export class CreateProductRequest extends jspb.Message {
  getProduct(): services_ecommerce_v1_products_pb.Product | undefined;
  setProduct(value?: services_ecommerce_v1_products_pb.Product): CreateProductRequest;
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
    product?: services_ecommerce_v1_products_pb.Product.AsObject,
  }
}

export class CreateProductResponse extends jspb.Message {
  getProduct(): services_ecommerce_v1_products_pb.Product | undefined;
  setProduct(value?: services_ecommerce_v1_products_pb.Product): CreateProductResponse;
  hasProduct(): boolean;
  clearProduct(): CreateProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductResponse): CreateProductResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductResponse;
  static deserializeBinaryFromReader(message: CreateProductResponse, reader: jspb.BinaryReader): CreateProductResponse;
}

export namespace CreateProductResponse {
  export type AsObject = {
    product?: services_ecommerce_v1_products_pb.Product.AsObject,
  }
}

export class UpdateProductRequest extends jspb.Message {
  getProduct(): services_ecommerce_v1_products_pb.Product | undefined;
  setProduct(value?: services_ecommerce_v1_products_pb.Product): UpdateProductRequest;
  hasProduct(): boolean;
  clearProduct(): UpdateProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductRequest): UpdateProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductRequest;
  static deserializeBinaryFromReader(message: UpdateProductRequest, reader: jspb.BinaryReader): UpdateProductRequest;
}

export namespace UpdateProductRequest {
  export type AsObject = {
    product?: services_ecommerce_v1_products_pb.Product.AsObject,
  }
}

export class UpdateProductResponse extends jspb.Message {
  getProduct(): services_ecommerce_v1_products_pb.Product | undefined;
  setProduct(value?: services_ecommerce_v1_products_pb.Product): UpdateProductResponse;
  hasProduct(): boolean;
  clearProduct(): UpdateProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductResponse): UpdateProductResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductResponse;
  static deserializeBinaryFromReader(message: UpdateProductResponse, reader: jspb.BinaryReader): UpdateProductResponse;
}

export namespace UpdateProductResponse {
  export type AsObject = {
    product?: services_ecommerce_v1_products_pb.Product.AsObject,
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

export class ListOrdersRequest extends jspb.Message {
  getPageOptions(): common_messages_pb.PageOptions | undefined;
  setPageOptions(value?: common_messages_pb.PageOptions): ListOrdersRequest;
  hasPageOptions(): boolean;
  clearPageOptions(): ListOrdersRequest;

  getSearchTerm(): string;
  setSearchTerm(value: string): ListOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrdersRequest): ListOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrdersRequest;
  static deserializeBinaryFromReader(message: ListOrdersRequest, reader: jspb.BinaryReader): ListOrdersRequest;
}

export namespace ListOrdersRequest {
  export type AsObject = {
    pageOptions?: common_messages_pb.PageOptions.AsObject,
    searchTerm: string,
  }
}

export class ListOrdersResponse extends jspb.Message {
  getOrdersList(): Array<services_ecommerce_v1_orders_pb.Order>;
  setOrdersList(value: Array<services_ecommerce_v1_orders_pb.Order>): ListOrdersResponse;
  clearOrdersList(): ListOrdersResponse;
  addOrders(value?: services_ecommerce_v1_orders_pb.Order, index?: number): services_ecommerce_v1_orders_pb.Order;

  getTotalOrders(): number;
  setTotalOrders(value: number): ListOrdersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrdersResponse): ListOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrdersResponse;
  static deserializeBinaryFromReader(message: ListOrdersResponse, reader: jspb.BinaryReader): ListOrdersResponse;
}

export namespace ListOrdersResponse {
  export type AsObject = {
    ordersList: Array<services_ecommerce_v1_orders_pb.Order.AsObject>,
    totalOrders: number,
  }
}

export class GetOrdersRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): GetOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
  static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
  export type AsObject = {
    orderId: string,
  }
}

export class GetOrdersResponse extends jspb.Message {
  getDetail(): services_ecommerce_v1_orders_pb.Order | undefined;
  setDetail(value?: services_ecommerce_v1_orders_pb.Order): GetOrdersResponse;
  hasDetail(): boolean;
  clearDetail(): GetOrdersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersResponse): GetOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: GetOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersResponse;
  static deserializeBinaryFromReader(message: GetOrdersResponse, reader: jspb.BinaryReader): GetOrdersResponse;
}

export namespace GetOrdersResponse {
  export type AsObject = {
    detail?: services_ecommerce_v1_orders_pb.Order.AsObject,
  }
}

