import * as jspb from 'google-protobuf'

import * as common_messages_pb from '../../../common/messages_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as services_ecommerce_v1_payments_pb from '../../../services/ecommerce/v1/payments_pb';
import * as services_ecommerce_v1_products_pb from '../../../services/ecommerce/v1/products_pb';


export class OrderItem extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): OrderItem;

  getName(): string;
  setName(value: string): OrderItem;

  getQuantity(): number;
  setQuantity(value: number): OrderItem;

  getPrice(): number;
  setPrice(value: number): OrderItem;

  getSeller(): services_ecommerce_v1_products_pb.Seller | undefined;
  setSeller(value?: services_ecommerce_v1_products_pb.Seller): OrderItem;
  hasSeller(): boolean;
  clearSeller(): OrderItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrderItem): OrderItem.AsObject;
  static serializeBinaryToWriter(message: OrderItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderItem;
  static deserializeBinaryFromReader(message: OrderItem, reader: jspb.BinaryReader): OrderItem;
}

export namespace OrderItem {
  export type AsObject = {
    productId: string,
    name: string,
    quantity: number,
    price: number,
    seller?: services_ecommerce_v1_products_pb.Seller.AsObject,
  }
}

export class CreateOrderRequest extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): CreateOrderRequest;

  getItem(): OrderItem | undefined;
  setItem(value?: OrderItem): CreateOrderRequest;
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
    item?: OrderItem.AsObject,
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

  getStatus(): OrderStatus;
  setStatus(value: OrderStatus): CreateOrderResponse;

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
    status: OrderStatus,
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
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): ListOrdersResponse;
  clearOrdersList(): ListOrdersResponse;
  addOrders(value?: Order, index?: number): Order;

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
    ordersList: Array<Order.AsObject>,
    totalOrders: number,
  }
}

export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): Order;

  getItemsList(): Array<OrderItem>;
  setItemsList(value: Array<OrderItem>): Order;
  clearItemsList(): Order;
  addItems(value?: OrderItem, index?: number): OrderItem;

  getShippingAddress(): string;
  setShippingAddress(value: string): Order;

  getBillingAddress(): string;
  setBillingAddress(value: string): Order;

  getSameAsShippingAddress(): boolean;
  setSameAsShippingAddress(value: boolean): Order;

  getStatus(): OrderStatus;
  setStatus(value: OrderStatus): Order;

  getTotalPrice(): number;
  setTotalPrice(value: number): Order;

  getPaymentMethod(): services_ecommerce_v1_payments_pb.PaymentMethod;
  setPaymentMethod(value: services_ecommerce_v1_payments_pb.PaymentMethod): Order;

  getPaymentStatus(): services_ecommerce_v1_payments_pb.PaymentStatus;
  setPaymentStatus(value: services_ecommerce_v1_payments_pb.PaymentStatus): Order;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Order;

  getDeliveredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeliveredAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasDeliveredAt(): boolean;
  clearDeliveredAt(): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    orderId: string,
    itemsList: Array<OrderItem.AsObject>,
    shippingAddress: string,
    billingAddress: string,
    sameAsShippingAddress: boolean,
    status: OrderStatus,
    totalPrice: number,
    paymentMethod: services_ecommerce_v1_payments_pb.PaymentMethod,
    paymentStatus: services_ecommerce_v1_payments_pb.PaymentStatus,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deliveredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
  getDetail(): Order | undefined;
  setDetail(value?: Order): GetOrdersResponse;
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
    detail?: Order.AsObject,
  }
}

export class UpdateOrderPaymentRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): UpdateOrderPaymentRequest;

  getPaymentId(): string;
  setPaymentId(value: string): UpdateOrderPaymentRequest;

  getPaymentStatus(): services_ecommerce_v1_payments_pb.PaymentStatus;
  setPaymentStatus(value: services_ecommerce_v1_payments_pb.PaymentStatus): UpdateOrderPaymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrderPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrderPaymentRequest): UpdateOrderPaymentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOrderPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrderPaymentRequest;
  static deserializeBinaryFromReader(message: UpdateOrderPaymentRequest, reader: jspb.BinaryReader): UpdateOrderPaymentRequest;
}

export namespace UpdateOrderPaymentRequest {
  export type AsObject = {
    orderId: string,
    paymentId: string,
    paymentStatus: services_ecommerce_v1_payments_pb.PaymentStatus,
  }
}

export class UpdateOrderPaymentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrderPaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrderPaymentResponse): UpdateOrderPaymentResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateOrderPaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrderPaymentResponse;
  static deserializeBinaryFromReader(message: UpdateOrderPaymentResponse, reader: jspb.BinaryReader): UpdateOrderPaymentResponse;
}

export namespace UpdateOrderPaymentResponse {
  export type AsObject = {
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

export class OrderInternal extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): OrderInternal;
  hasMeta(): boolean;
  clearMeta(): OrderInternal;

  getBuyerId(): string;
  setBuyerId(value: string): OrderInternal;

  getItemsList(): Array<OrderItem>;
  setItemsList(value: Array<OrderItem>): OrderInternal;
  clearItemsList(): OrderInternal;
  addItems(value?: OrderItem, index?: number): OrderItem;

  getShippingAddress(): string;
  setShippingAddress(value: string): OrderInternal;

  getBillingAddress(): string;
  setBillingAddress(value: string): OrderInternal;

  getSameAsShippingAddress(): boolean;
  setSameAsShippingAddress(value: boolean): OrderInternal;

  getTotalPrice(): number;
  setTotalPrice(value: number): OrderInternal;

  getOrderStatus(): OrderStatus;
  setOrderStatus(value: OrderStatus): OrderInternal;

  getPaymentList(): Array<services_ecommerce_v1_payments_pb.Payment>;
  setPaymentList(value: Array<services_ecommerce_v1_payments_pb.Payment>): OrderInternal;
  clearPaymentList(): OrderInternal;
  addPayment(value?: services_ecommerce_v1_payments_pb.Payment, index?: number): services_ecommerce_v1_payments_pb.Payment;

  getDeliveredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeliveredAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderInternal;
  hasDeliveredAt(): boolean;
  clearDeliveredAt(): OrderInternal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderInternal.AsObject;
  static toObject(includeInstance: boolean, msg: OrderInternal): OrderInternal.AsObject;
  static serializeBinaryToWriter(message: OrderInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderInternal;
  static deserializeBinaryFromReader(message: OrderInternal, reader: jspb.BinaryReader): OrderInternal;
}

export namespace OrderInternal {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    buyerId: string,
    itemsList: Array<OrderItem.AsObject>,
    shippingAddress: string,
    billingAddress: string,
    sameAsShippingAddress: boolean,
    totalPrice: number,
    orderStatus: OrderStatus,
    paymentList: Array<services_ecommerce_v1_payments_pb.Payment.AsObject>,
    deliveredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum OrderStatus { 
  ORDER_STATUS_CREATED = 0,
  ORDER_STATUS_CANCELED = 1,
  ORDER_STATUS_CONFIRMED = 2,
  ORDER_STATUS_PACKED = 3,
  ORDER_STATUS_SHIPPED = 4,
  ORDER_STATUS_DELIVERED = 5,
  ORDER_STATUS_COMPLETED = 6,
}
