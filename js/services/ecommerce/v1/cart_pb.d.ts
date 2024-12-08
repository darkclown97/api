import * as jspb from 'google-protobuf'

import * as common_messages_pb from '../../../common/messages_pb';
import * as services_ecommerce_v1_products_pb from '../../../services/ecommerce/v1/products_pb';


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

export class CartItem extends jspb.Message {
  getProducts(): services_ecommerce_v1_products_pb.Product | undefined;
  setProducts(value?: services_ecommerce_v1_products_pb.Product): CartItem;
  hasProducts(): boolean;
  clearProducts(): CartItem;

  getQuantity(): number;
  setQuantity(value: number): CartItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartItem.AsObject;
  static toObject(includeInstance: boolean, msg: CartItem): CartItem.AsObject;
  static serializeBinaryToWriter(message: CartItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartItem;
  static deserializeBinaryFromReader(message: CartItem, reader: jspb.BinaryReader): CartItem;
}

export namespace CartItem {
  export type AsObject = {
    products?: services_ecommerce_v1_products_pb.Product.AsObject,
    quantity: number,
  }
}

export class ViewCartResponse extends jspb.Message {
  getProductsList(): Array<CartItem>;
  setProductsList(value: Array<CartItem>): ViewCartResponse;
  clearProductsList(): ViewCartResponse;
  addProducts(value?: CartItem, index?: number): CartItem;

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
    productsList: Array<CartItem.AsObject>,
    totalCartProducts: number,
  }
}

export class CartInternal extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): CartInternal;
  hasMeta(): boolean;
  clearMeta(): CartInternal;

  getBuyerId(): string;
  setBuyerId(value: string): CartInternal;

  getProductsList(): Array<CartItem>;
  setProductsList(value: Array<CartItem>): CartInternal;
  clearProductsList(): CartInternal;
  addProducts(value?: CartItem, index?: number): CartItem;

  getTotalPrice(): number;
  setTotalPrice(value: number): CartInternal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartInternal.AsObject;
  static toObject(includeInstance: boolean, msg: CartInternal): CartInternal.AsObject;
  static serializeBinaryToWriter(message: CartInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartInternal;
  static deserializeBinaryFromReader(message: CartInternal, reader: jspb.BinaryReader): CartInternal;
}

export namespace CartInternal {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    buyerId: string,
    productsList: Array<CartItem.AsObject>,
    totalPrice: number,
  }
}

