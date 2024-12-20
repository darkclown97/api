// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.1
//   protoc               v3.12.4
// source: services/ecommerce/v1/gateway/seller.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PageOptions } from "../../../../common/messages";
import { Order } from "../orders";
import { Product } from "../products";

export const protobufPackage = "services.ecommerce.v1.gateway";

export interface ListProductsRequest {
  pageOptions?: PageOptions | undefined;
  sortBy: ListProductsRequest_SortBy;
  searchTerm: string;
  tags: string[];
}

export enum ListProductsRequest_SortBy {
  NAME = 0,
  PRICE = 1,
  POPULARITY = 2,
  RATING = 3,
  UNRECOGNIZED = -1,
}

export function listProductsRequest_SortByFromJSON(object: any): ListProductsRequest_SortBy {
  switch (object) {
    case 0:
    case "NAME":
      return ListProductsRequest_SortBy.NAME;
    case 1:
    case "PRICE":
      return ListProductsRequest_SortBy.PRICE;
    case 2:
    case "POPULARITY":
      return ListProductsRequest_SortBy.POPULARITY;
    case 3:
    case "RATING":
      return ListProductsRequest_SortBy.RATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListProductsRequest_SortBy.UNRECOGNIZED;
  }
}

export function listProductsRequest_SortByToJSON(object: ListProductsRequest_SortBy): string {
  switch (object) {
    case ListProductsRequest_SortBy.NAME:
      return "NAME";
    case ListProductsRequest_SortBy.PRICE:
      return "PRICE";
    case ListProductsRequest_SortBy.POPULARITY:
      return "POPULARITY";
    case ListProductsRequest_SortBy.RATING:
      return "RATING";
    case ListProductsRequest_SortBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListProductsResponse {
  products: Product[];
  total: number;
}

export interface GetProductRequest {
  productId: string;
}

export interface GetProductResponse {
  detail?: Product | undefined;
}

export interface CreateProductRequest {
  product?: Product | undefined;
}

export interface CreateProductResponse {
  product?: Product | undefined;
}

export interface UpdateProductRequest {
  product?: Product | undefined;
}

export interface UpdateProductResponse {
  product?: Product | undefined;
}

export interface DeleteProductRequest {
  productId: string;
}

export interface DeleteProductResponse {
}

export interface ListOrdersRequest {
  pageOptions?: PageOptions | undefined;
  searchTerm: string;
}

export interface ListOrdersResponse {
  /** List of orders */
  orders: Order[];
  /** Total number of orders matching the criteria */
  totalOrders: number;
}

export interface GetOrdersRequest {
  orderId: string;
}

export interface GetOrdersResponse {
  detail?: Order | undefined;
}

function createBaseListProductsRequest(): ListProductsRequest {
  return { pageOptions: undefined, sortBy: 0, searchTerm: "", tags: [] };
}

export const ListProductsRequest: MessageFns<ListProductsRequest> = {
  encode(message: ListProductsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pageOptions !== undefined) {
      PageOptions.encode(message.pageOptions, writer.uint32(10).fork()).join();
    }
    if (message.sortBy !== 0) {
      writer.uint32(16).int32(message.sortBy);
    }
    if (message.searchTerm !== "") {
      writer.uint32(26).string(message.searchTerm);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListProductsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.pageOptions = PageOptions.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.sortBy = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.searchTerm = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProductsRequest {
    return {
      pageOptions: isSet(object.pageOptions) ? PageOptions.fromJSON(object.pageOptions) : undefined,
      sortBy: isSet(object.sortBy) ? listProductsRequest_SortByFromJSON(object.sortBy) : 0,
      searchTerm: isSet(object.searchTerm) ? globalThis.String(object.searchTerm) : "",
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ListProductsRequest): unknown {
    const obj: any = {};
    if (message.pageOptions !== undefined) {
      obj.pageOptions = PageOptions.toJSON(message.pageOptions);
    }
    if (message.sortBy !== 0) {
      obj.sortBy = listProductsRequest_SortByToJSON(message.sortBy);
    }
    if (message.searchTerm !== "") {
      obj.searchTerm = message.searchTerm;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProductsRequest>, I>>(base?: I): ListProductsRequest {
    return ListProductsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProductsRequest>, I>>(object: I): ListProductsRequest {
    const message = createBaseListProductsRequest();
    message.pageOptions = (object.pageOptions !== undefined && object.pageOptions !== null)
      ? PageOptions.fromPartial(object.pageOptions)
      : undefined;
    message.sortBy = object.sortBy ?? 0;
    message.searchTerm = object.searchTerm ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseListProductsResponse(): ListProductsResponse {
  return { products: [], total: 0 };
}

export const ListProductsResponse: MessageFns<ListProductsResponse> = {
  encode(message: ListProductsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.total !== 0) {
      writer.uint32(16).int32(message.total);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListProductsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.total = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProductsResponse {
    return {
      products: globalThis.Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: ListProductsResponse): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => Product.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProductsResponse>, I>>(base?: I): ListProductsResponse {
    return ListProductsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProductsResponse>, I>>(object: I): ListProductsResponse {
    const message = createBaseListProductsResponse();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseGetProductRequest(): GetProductRequest {
  return { productId: "" };
}

export const GetProductRequest: MessageFns<GetProductRequest> = {
  encode(message: GetProductRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetProductRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.productId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProductRequest {
    return { productId: isSet(object.productId) ? globalThis.String(object.productId) : "" };
  },

  toJSON(message: GetProductRequest): unknown {
    const obj: any = {};
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductRequest>, I>>(base?: I): GetProductRequest {
    return GetProductRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProductRequest>, I>>(object: I): GetProductRequest {
    const message = createBaseGetProductRequest();
    message.productId = object.productId ?? "";
    return message;
  },
};

function createBaseGetProductResponse(): GetProductResponse {
  return { detail: undefined };
}

export const GetProductResponse: MessageFns<GetProductResponse> = {
  encode(message: GetProductResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.detail !== undefined) {
      Product.encode(message.detail, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetProductResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.detail = Product.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProductResponse {
    return { detail: isSet(object.detail) ? Product.fromJSON(object.detail) : undefined };
  },

  toJSON(message: GetProductResponse): unknown {
    const obj: any = {};
    if (message.detail !== undefined) {
      obj.detail = Product.toJSON(message.detail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductResponse>, I>>(base?: I): GetProductResponse {
    return GetProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProductResponse>, I>>(object: I): GetProductResponse {
    const message = createBaseGetProductResponse();
    message.detail = (object.detail !== undefined && object.detail !== null)
      ? Product.fromPartial(object.detail)
      : undefined;
    return message;
  },
};

function createBaseCreateProductRequest(): CreateProductRequest {
  return { product: undefined };
}

export const CreateProductRequest: MessageFns<CreateProductRequest> = {
  encode(message: CreateProductRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProductRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRequest {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: CreateProductRequest): unknown {
    const obj: any = {};
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductRequest>, I>>(base?: I): CreateProductRequest {
    return CreateProductRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductRequest>, I>>(object: I): CreateProductRequest {
    const message = createBaseCreateProductRequest();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseCreateProductResponse(): CreateProductResponse {
  return { product: undefined };
}

export const CreateProductResponse: MessageFns<CreateProductResponse> = {
  encode(message: CreateProductResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProductResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductResponse {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: CreateProductResponse): unknown {
    const obj: any = {};
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductResponse>, I>>(base?: I): CreateProductResponse {
    return CreateProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductResponse>, I>>(object: I): CreateProductResponse {
    const message = createBaseCreateProductResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseUpdateProductRequest(): UpdateProductRequest {
  return { product: undefined };
}

export const UpdateProductRequest: MessageFns<UpdateProductRequest> = {
  encode(message: UpdateProductRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateProductRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProductRequest {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: UpdateProductRequest): unknown {
    const obj: any = {};
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProductRequest>, I>>(base?: I): UpdateProductRequest {
    return UpdateProductRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProductRequest>, I>>(object: I): UpdateProductRequest {
    const message = createBaseUpdateProductRequest();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseUpdateProductResponse(): UpdateProductResponse {
  return { product: undefined };
}

export const UpdateProductResponse: MessageFns<UpdateProductResponse> = {
  encode(message: UpdateProductResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateProductResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProductResponse {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: UpdateProductResponse): unknown {
    const obj: any = {};
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProductResponse>, I>>(base?: I): UpdateProductResponse {
    return UpdateProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProductResponse>, I>>(object: I): UpdateProductResponse {
    const message = createBaseUpdateProductResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseDeleteProductRequest(): DeleteProductRequest {
  return { productId: "" };
}

export const DeleteProductRequest: MessageFns<DeleteProductRequest> = {
  encode(message: DeleteProductRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteProductRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.productId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProductRequest {
    return { productId: isSet(object.productId) ? globalThis.String(object.productId) : "" };
  },

  toJSON(message: DeleteProductRequest): unknown {
    const obj: any = {};
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProductRequest>, I>>(base?: I): DeleteProductRequest {
    return DeleteProductRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProductRequest>, I>>(object: I): DeleteProductRequest {
    const message = createBaseDeleteProductRequest();
    message.productId = object.productId ?? "";
    return message;
  },
};

function createBaseDeleteProductResponse(): DeleteProductResponse {
  return {};
}

export const DeleteProductResponse: MessageFns<DeleteProductResponse> = {
  encode(_: DeleteProductResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteProductResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DeleteProductResponse {
    return {};
  },

  toJSON(_: DeleteProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProductResponse>, I>>(base?: I): DeleteProductResponse {
    return DeleteProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteProductResponse>, I>>(_: I): DeleteProductResponse {
    const message = createBaseDeleteProductResponse();
    return message;
  },
};

function createBaseListOrdersRequest(): ListOrdersRequest {
  return { pageOptions: undefined, searchTerm: "" };
}

export const ListOrdersRequest: MessageFns<ListOrdersRequest> = {
  encode(message: ListOrdersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pageOptions !== undefined) {
      PageOptions.encode(message.pageOptions, writer.uint32(10).fork()).join();
    }
    if (message.searchTerm !== "") {
      writer.uint32(18).string(message.searchTerm);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.pageOptions = PageOptions.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.searchTerm = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOrdersRequest {
    return {
      pageOptions: isSet(object.pageOptions) ? PageOptions.fromJSON(object.pageOptions) : undefined,
      searchTerm: isSet(object.searchTerm) ? globalThis.String(object.searchTerm) : "",
    };
  },

  toJSON(message: ListOrdersRequest): unknown {
    const obj: any = {};
    if (message.pageOptions !== undefined) {
      obj.pageOptions = PageOptions.toJSON(message.pageOptions);
    }
    if (message.searchTerm !== "") {
      obj.searchTerm = message.searchTerm;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOrdersRequest>, I>>(base?: I): ListOrdersRequest {
    return ListOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrdersRequest>, I>>(object: I): ListOrdersRequest {
    const message = createBaseListOrdersRequest();
    message.pageOptions = (object.pageOptions !== undefined && object.pageOptions !== null)
      ? PageOptions.fromPartial(object.pageOptions)
      : undefined;
    message.searchTerm = object.searchTerm ?? "";
    return message;
  },
};

function createBaseListOrdersResponse(): ListOrdersResponse {
  return { orders: [], totalOrders: 0 };
}

export const ListOrdersResponse: MessageFns<ListOrdersResponse> = {
  encode(message: ListOrdersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.totalOrders !== 0) {
      writer.uint32(16).int32(message.totalOrders);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.totalOrders = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOrdersResponse {
    return {
      orders: globalThis.Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      totalOrders: isSet(object.totalOrders) ? globalThis.Number(object.totalOrders) : 0,
    };
  },

  toJSON(message: ListOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => Order.toJSON(e));
    }
    if (message.totalOrders !== 0) {
      obj.totalOrders = Math.round(message.totalOrders);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOrdersResponse>, I>>(base?: I): ListOrdersResponse {
    return ListOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrdersResponse>, I>>(object: I): ListOrdersResponse {
    const message = createBaseListOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.totalOrders = object.totalOrders ?? 0;
    return message;
  },
};

function createBaseGetOrdersRequest(): GetOrdersRequest {
  return { orderId: "" };
}

export const GetOrdersRequest: MessageFns<GetOrdersRequest> = {
  encode(message: GetOrdersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrdersRequest {
    return { orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "" };
  },

  toJSON(message: GetOrdersRequest): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrdersRequest>, I>>(base?: I): GetOrdersRequest {
    return GetOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrdersRequest>, I>>(object: I): GetOrdersRequest {
    const message = createBaseGetOrdersRequest();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseGetOrdersResponse(): GetOrdersResponse {
  return { detail: undefined };
}

export const GetOrdersResponse: MessageFns<GetOrdersResponse> = {
  encode(message: GetOrdersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.detail !== undefined) {
      Order.encode(message.detail, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.detail = Order.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrdersResponse {
    return { detail: isSet(object.detail) ? Order.fromJSON(object.detail) : undefined };
  },

  toJSON(message: GetOrdersResponse): unknown {
    const obj: any = {};
    if (message.detail !== undefined) {
      obj.detail = Order.toJSON(message.detail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrdersResponse>, I>>(base?: I): GetOrdersResponse {
    return GetOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrdersResponse>, I>>(object: I): GetOrdersResponse {
    const message = createBaseGetOrdersResponse();
    message.detail = (object.detail !== undefined && object.detail !== null)
      ? Order.fromPartial(object.detail)
      : undefined;
    return message;
  },
};

export interface SellerGateway {
  /** Product-related APIs */
  ListProducts(request: ListProductsRequest): Promise<ListProductsResponse>;
  GetProduct(request: GetProductRequest): Promise<GetProductResponse>;
  CreateProduct(request: CreateProductRequest): Promise<CreateProductResponse>;
  UpdateProduct(request: UpdateProductRequest): Promise<UpdateProductResponse>;
  DeleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse>;
  /** Order-related APIs */
  ListOrders(request: ListOrdersRequest): Promise<ListOrdersResponse>;
  GetOrders(request: GetOrdersRequest): Promise<GetOrdersResponse>;
}

export const SellerGatewayServiceName = "services.ecommerce.v1.gateway.SellerGateway";
export class SellerGatewayClientImpl implements SellerGateway {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SellerGatewayServiceName;
    this.rpc = rpc;
    this.ListProducts = this.ListProducts.bind(this);
    this.GetProduct = this.GetProduct.bind(this);
    this.CreateProduct = this.CreateProduct.bind(this);
    this.UpdateProduct = this.UpdateProduct.bind(this);
    this.DeleteProduct = this.DeleteProduct.bind(this);
    this.ListOrders = this.ListOrders.bind(this);
    this.GetOrders = this.GetOrders.bind(this);
  }
  ListProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    const data = ListProductsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListProducts", data);
    return promise.then((data) => ListProductsResponse.decode(new BinaryReader(data)));
  }

  GetProduct(request: GetProductRequest): Promise<GetProductResponse> {
    const data = GetProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProduct", data);
    return promise.then((data) => GetProductResponse.decode(new BinaryReader(data)));
  }

  CreateProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    const data = CreateProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateProduct", data);
    return promise.then((data) => CreateProductResponse.decode(new BinaryReader(data)));
  }

  UpdateProduct(request: UpdateProductRequest): Promise<UpdateProductResponse> {
    const data = UpdateProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateProduct", data);
    return promise.then((data) => UpdateProductResponse.decode(new BinaryReader(data)));
  }

  DeleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    const data = DeleteProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteProduct", data);
    return promise.then((data) => DeleteProductResponse.decode(new BinaryReader(data)));
  }

  ListOrders(request: ListOrdersRequest): Promise<ListOrdersResponse> {
    const data = ListOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListOrders", data);
    return promise.then((data) => ListOrdersResponse.decode(new BinaryReader(data)));
  }

  GetOrders(request: GetOrdersRequest): Promise<GetOrdersResponse> {
    const data = GetOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOrders", data);
    return promise.then((data) => GetOrdersResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
