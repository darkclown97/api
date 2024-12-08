import * as jspb from 'google-protobuf'

import * as common_messages_pb from '../../../../common/messages_pb';
import * as services_ecommerce_v1_products_pb from '../../../../services/ecommerce/v1/products_pb';
import * as services_ecommerce_v1_orders_pb from '../../../../services/ecommerce/v1/orders_pb';
import * as services_ecommerce_v1_payments_pb from '../../../../services/ecommerce/v1/payments_pb';


export class ListProductsRequest extends jspb.Message {
  getPageOptions(): common_messages_pb.PageOptions | undefined;
  setPageOptions(value?: common_messages_pb.PageOptions): ListProductsRequest;
  hasPageOptions(): boolean;
  clearPageOptions(): ListProductsRequest;

  getSortBy(): services_ecommerce_v1_products_pb.ProductSortBy;
  setSortBy(value: services_ecommerce_v1_products_pb.ProductSortBy): ListProductsRequest;

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
    sortBy: services_ecommerce_v1_products_pb.ProductSortBy,
    searchTerm: string,
    categoriesList: Array<string>,
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

export class AddToCartRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): AddToCartRequest;

  getQuantity(): number;
  setQuantity(value: number): AddToCartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToCartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToCartRequest): AddToCartRequest.AsObject;
  static serializeBinaryToWriter(message: AddToCartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToCartRequest;
  static deserializeBinaryFromReader(message: AddToCartRequest, reader: jspb.BinaryReader): AddToCartRequest;
}

export namespace AddToCartRequest {
  export type AsObject = {
    productId: string,
    quantity: number,
  }
}

export class AddToCartResponse extends jspb.Message {
  getTotalCartProducts(): number;
  setTotalCartProducts(value: number): AddToCartResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToCartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddToCartResponse): AddToCartResponse.AsObject;
  static serializeBinaryToWriter(message: AddToCartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToCartResponse;
  static deserializeBinaryFromReader(message: AddToCartResponse, reader: jspb.BinaryReader): AddToCartResponse;
}

export namespace AddToCartResponse {
  export type AsObject = {
    totalCartProducts: number,
  }
}

export class RemoveFromCartRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): RemoveFromCartRequest;

  getQuantity(): number;
  setQuantity(value: number): RemoveFromCartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFromCartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFromCartRequest): RemoveFromCartRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveFromCartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFromCartRequest;
  static deserializeBinaryFromReader(message: RemoveFromCartRequest, reader: jspb.BinaryReader): RemoveFromCartRequest;
}

export namespace RemoveFromCartRequest {
  export type AsObject = {
    productId: string,
    quantity: number,
  }
}

export class RemoveFromCartResponse extends jspb.Message {
  getTotalCartProducts(): number;
  setTotalCartProducts(value: number): RemoveFromCartResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFromCartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFromCartResponse): RemoveFromCartResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveFromCartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFromCartResponse;
  static deserializeBinaryFromReader(message: RemoveFromCartResponse, reader: jspb.BinaryReader): RemoveFromCartResponse;
}

export namespace RemoveFromCartResponse {
  export type AsObject = {
    totalCartProducts: number,
  }
}

export class ClearCartRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearCartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearCartRequest): ClearCartRequest.AsObject;
  static serializeBinaryToWriter(message: ClearCartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearCartRequest;
  static deserializeBinaryFromReader(message: ClearCartRequest, reader: jspb.BinaryReader): ClearCartRequest;
}

export namespace ClearCartRequest {
  export type AsObject = {
  }
}

export class ClearCartResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearCartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearCartResponse): ClearCartResponse.AsObject;
  static serializeBinaryToWriter(message: ClearCartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearCartResponse;
  static deserializeBinaryFromReader(message: ClearCartResponse, reader: jspb.BinaryReader): ClearCartResponse;
}

export namespace ClearCartResponse {
  export type AsObject = {
  }
}

export class ViewCartRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewCartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewCartRequest): ViewCartRequest.AsObject;
  static serializeBinaryToWriter(message: ViewCartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewCartRequest;
  static deserializeBinaryFromReader(message: ViewCartRequest, reader: jspb.BinaryReader): ViewCartRequest;
}

export namespace ViewCartRequest {
  export type AsObject = {
  }
}

export class ViewCartResponse extends jspb.Message {
  getProductsList(): Array<services_ecommerce_v1_products_pb.Product>;
  setProductsList(value: Array<services_ecommerce_v1_products_pb.Product>): ViewCartResponse;
  clearProductsList(): ViewCartResponse;
  addProducts(value?: services_ecommerce_v1_products_pb.Product, index?: number): services_ecommerce_v1_products_pb.Product;

  getTotalCartProducts(): number;
  setTotalCartProducts(value: number): ViewCartResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewCartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ViewCartResponse): ViewCartResponse.AsObject;
  static serializeBinaryToWriter(message: ViewCartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewCartResponse;
  static deserializeBinaryFromReader(message: ViewCartResponse, reader: jspb.BinaryReader): ViewCartResponse;
}

export namespace ViewCartResponse {
  export type AsObject = {
    productsList: Array<services_ecommerce_v1_products_pb.Product.AsObject>,
    totalCartProducts: number,
  }
}

export class CreateOrderRequest extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): CreateOrderRequest;

  getItem(): services_ecommerce_v1_orders_pb.OrderItem | undefined;
  setItem(value?: services_ecommerce_v1_orders_pb.OrderItem): CreateOrderRequest;
  hasItem(): boolean;
  clearItem(): CreateOrderRequest;

  getShippingAddress(): string;
  setShippingAddress(value: string): CreateOrderRequest;

  getBillingAddress(): string;
  setBillingAddress(value: string): CreateOrderRequest;

  getSameAsShippingAddress(): boolean;
  setSameAsShippingAddress(value: boolean): CreateOrderRequest;

  getPaymentMethod(): services_ecommerce_v1_payments_pb.PaymentMethod;
  setPaymentMethod(value: services_ecommerce_v1_payments_pb.PaymentMethod): CreateOrderRequest;

  getOrderMethodsCase(): CreateOrderRequest.OrderMethodsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
  static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
  export type AsObject = {
    cartId: string,
    item?: services_ecommerce_v1_orders_pb.OrderItem.AsObject,
    shippingAddress: string,
    billingAddress: string,
    sameAsShippingAddress: boolean,
    paymentMethod: services_ecommerce_v1_payments_pb.PaymentMethod,
  }

  export enum OrderMethodsCase { 
    ORDER_METHODS_NOT_SET = 0,
    CART_ID = 1,
    ITEM = 2,
  }
}

export class CreateOrderResponse extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): CreateOrderResponse;

  getStatus(): services_ecommerce_v1_orders_pb.OrderStatus;
  setStatus(value: services_ecommerce_v1_orders_pb.OrderStatus): CreateOrderResponse;

  getPaymentStatus(): services_ecommerce_v1_payments_pb.PaymentStatus;
  setPaymentStatus(value: services_ecommerce_v1_payments_pb.PaymentStatus): CreateOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
  static serializeBinaryToWriter(message: CreateOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
  static deserializeBinaryFromReader(message: CreateOrderResponse, reader: jspb.BinaryReader): CreateOrderResponse;
}

export namespace CreateOrderResponse {
  export type AsObject = {
    orderId: string,
    status: services_ecommerce_v1_orders_pb.OrderStatus,
    paymentStatus: services_ecommerce_v1_payments_pb.PaymentStatus,
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

export class CancelOrderRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): CancelOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderRequest): CancelOrderRequest.AsObject;
  static serializeBinaryToWriter(message: CancelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderRequest;
  static deserializeBinaryFromReader(message: CancelOrderRequest, reader: jspb.BinaryReader): CancelOrderRequest;
}

export namespace CancelOrderRequest {
  export type AsObject = {
    orderId: string,
  }
}

export class CancelOrderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderResponse): CancelOrderResponse.AsObject;
  static serializeBinaryToWriter(message: CancelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderResponse;
  static deserializeBinaryFromReader(message: CancelOrderResponse, reader: jspb.BinaryReader): CancelOrderResponse;
}

export namespace CancelOrderResponse {
  export type AsObject = {
  }
}

