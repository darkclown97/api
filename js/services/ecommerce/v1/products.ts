// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               v3.12.4
// source: services/ecommerce/v1/products.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Meta, PageOptions } from "../../../common/messages";

export const protobufPackage = "services.ecommerce.v1.products";

export enum ProductSortBy {
  PRODUCT_SORTBY_NAME = 0,
  PRODUCT_SORTBY_PRICE = 1,
  PRODUCT_SORTBY_POPULARITY = 2,
  PRODUCT_SORTBY_RATING = 3,
  UNRECOGNIZED = -1,
}

export function productSortByFromJSON(object: any): ProductSortBy {
  switch (object) {
    case 0:
    case "PRODUCT_SORTBY_NAME":
      return ProductSortBy.PRODUCT_SORTBY_NAME;
    case 1:
    case "PRODUCT_SORTBY_PRICE":
      return ProductSortBy.PRODUCT_SORTBY_PRICE;
    case 2:
    case "PRODUCT_SORTBY_POPULARITY":
      return ProductSortBy.PRODUCT_SORTBY_POPULARITY;
    case 3:
    case "PRODUCT_SORTBY_RATING":
      return ProductSortBy.PRODUCT_SORTBY_RATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProductSortBy.UNRECOGNIZED;
  }
}

export function productSortByToJSON(object: ProductSortBy): string {
  switch (object) {
    case ProductSortBy.PRODUCT_SORTBY_NAME:
      return "PRODUCT_SORTBY_NAME";
    case ProductSortBy.PRODUCT_SORTBY_PRICE:
      return "PRODUCT_SORTBY_PRICE";
    case ProductSortBy.PRODUCT_SORTBY_POPULARITY:
      return "PRODUCT_SORTBY_POPULARITY";
    case ProductSortBy.PRODUCT_SORTBY_RATING:
      return "PRODUCT_SORTBY_RATING";
    case ProductSortBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListProductsRequest {
  pageOptions?: PageOptions | undefined;
  sortBy: ProductSortBy;
  searchTerm: string;
  categories: string[];
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

export interface Product {
  id: string;
  name: string;
  description: string;
  brief: string;
  price: number;
  inStock: boolean;
  imageUrl: string[];
  seller?: Seller | undefined;
  starRating: number;
  ratingCount: number;
}

export interface Seller {
  sellerId: string;
  name: string;
}

export interface CreateProductRequest {
  product?: Product | undefined;
}

export interface DeleteProductRequest {
  productId: string;
}

export interface DeleteProductResponse {
}

/** Only for internal use */
export interface ProductInternal {
  meta?: Meta | undefined;
  name: string;
  description: string;
  seller?: Seller | undefined;
  brief: string;
  price: number;
  inStock: boolean;
  imageUrl: string[];
  starRating: number;
  ratingCount: number;
}

function createBaseListProductsRequest(): ListProductsRequest {
  return { pageOptions: undefined, sortBy: 0, searchTerm: "", categories: [] };
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
    for (const v of message.categories) {
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

          message.categories.push(reader.string());
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
      sortBy: isSet(object.sortBy) ? productSortByFromJSON(object.sortBy) : 0,
      searchTerm: isSet(object.searchTerm) ? globalThis.String(object.searchTerm) : "",
      categories: globalThis.Array.isArray(object?.categories)
        ? object.categories.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ListProductsRequest): unknown {
    const obj: any = {};
    if (message.pageOptions !== undefined) {
      obj.pageOptions = PageOptions.toJSON(message.pageOptions);
    }
    if (message.sortBy !== 0) {
      obj.sortBy = productSortByToJSON(message.sortBy);
    }
    if (message.searchTerm !== "") {
      obj.searchTerm = message.searchTerm;
    }
    if (message.categories?.length) {
      obj.categories = message.categories;
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
    message.categories = object.categories?.map((e) => e) || [];
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

function createBaseProduct(): Product {
  return {
    id: "",
    name: "",
    description: "",
    brief: "",
    price: 0,
    inStock: false,
    imageUrl: [],
    seller: undefined,
    starRating: 0,
    ratingCount: 0,
  };
}

export const Product: MessageFns<Product> = {
  encode(message: Product, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.brief !== "") {
      writer.uint32(34).string(message.brief);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    if (message.inStock !== false) {
      writer.uint32(48).bool(message.inStock);
    }
    for (const v of message.imageUrl) {
      writer.uint32(58).string(v!);
    }
    if (message.seller !== undefined) {
      Seller.encode(message.seller, writer.uint32(66).fork()).join();
    }
    if (message.starRating !== 0) {
      writer.uint32(73).double(message.starRating);
    }
    if (message.ratingCount !== 0) {
      writer.uint32(80).int32(message.ratingCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Product {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.brief = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 41) {
            break;
          }

          message.price = reader.double();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.inStock = reader.bool();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.imageUrl.push(reader.string());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.seller = Seller.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 73) {
            break;
          }

          message.starRating = reader.double();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.ratingCount = reader.int32();
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

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      brief: isSet(object.brief) ? globalThis.String(object.brief) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      inStock: isSet(object.inStock) ? globalThis.Boolean(object.inStock) : false,
      imageUrl: globalThis.Array.isArray(object?.imageUrl) ? object.imageUrl.map((e: any) => globalThis.String(e)) : [],
      seller: isSet(object.seller) ? Seller.fromJSON(object.seller) : undefined,
      starRating: isSet(object.starRating) ? globalThis.Number(object.starRating) : 0,
      ratingCount: isSet(object.ratingCount) ? globalThis.Number(object.ratingCount) : 0,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.brief !== "") {
      obj.brief = message.brief;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.inStock !== false) {
      obj.inStock = message.inStock;
    }
    if (message.imageUrl?.length) {
      obj.imageUrl = message.imageUrl;
    }
    if (message.seller !== undefined) {
      obj.seller = Seller.toJSON(message.seller);
    }
    if (message.starRating !== 0) {
      obj.starRating = message.starRating;
    }
    if (message.ratingCount !== 0) {
      obj.ratingCount = Math.round(message.ratingCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Product>, I>>(base?: I): Product {
    return Product.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.brief = object.brief ?? "";
    message.price = object.price ?? 0;
    message.inStock = object.inStock ?? false;
    message.imageUrl = object.imageUrl?.map((e) => e) || [];
    message.seller = (object.seller !== undefined && object.seller !== null)
      ? Seller.fromPartial(object.seller)
      : undefined;
    message.starRating = object.starRating ?? 0;
    message.ratingCount = object.ratingCount ?? 0;
    return message;
  },
};

function createBaseSeller(): Seller {
  return { sellerId: "", name: "" };
}

export const Seller: MessageFns<Seller> = {
  encode(message: Seller, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sellerId !== "") {
      writer.uint32(10).string(message.sellerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Seller {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeller();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sellerId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): Seller {
    return {
      sellerId: isSet(object.sellerId) ? globalThis.String(object.sellerId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Seller): unknown {
    const obj: any = {};
    if (message.sellerId !== "") {
      obj.sellerId = message.sellerId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Seller>, I>>(base?: I): Seller {
    return Seller.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Seller>, I>>(object: I): Seller {
    const message = createBaseSeller();
    message.sellerId = object.sellerId ?? "";
    message.name = object.name ?? "";
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

function createBaseProductInternal(): ProductInternal {
  return {
    meta: undefined,
    name: "",
    description: "",
    seller: undefined,
    brief: "",
    price: 0,
    inStock: false,
    imageUrl: [],
    starRating: 0,
    ratingCount: 0,
  };
}

export const ProductInternal: MessageFns<ProductInternal> = {
  encode(message: ProductInternal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(10).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.seller !== undefined) {
      Seller.encode(message.seller, writer.uint32(34).fork()).join();
    }
    if (message.brief !== "") {
      writer.uint32(42).string(message.brief);
    }
    if (message.price !== 0) {
      writer.uint32(49).double(message.price);
    }
    if (message.inStock !== false) {
      writer.uint32(56).bool(message.inStock);
    }
    for (const v of message.imageUrl) {
      writer.uint32(66).string(v!);
    }
    if (message.starRating !== 0) {
      writer.uint32(73).double(message.starRating);
    }
    if (message.ratingCount !== 0) {
      writer.uint32(80).int32(message.ratingCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProductInternal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductInternal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.seller = Seller.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.brief = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 49) {
            break;
          }

          message.price = reader.double();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.inStock = reader.bool();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.imageUrl.push(reader.string());
          continue;
        }
        case 9: {
          if (tag !== 73) {
            break;
          }

          message.starRating = reader.double();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.ratingCount = reader.int32();
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

  fromJSON(object: any): ProductInternal {
    return {
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      seller: isSet(object.seller) ? Seller.fromJSON(object.seller) : undefined,
      brief: isSet(object.brief) ? globalThis.String(object.brief) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      inStock: isSet(object.inStock) ? globalThis.Boolean(object.inStock) : false,
      imageUrl: globalThis.Array.isArray(object?.imageUrl) ? object.imageUrl.map((e: any) => globalThis.String(e)) : [],
      starRating: isSet(object.starRating) ? globalThis.Number(object.starRating) : 0,
      ratingCount: isSet(object.ratingCount) ? globalThis.Number(object.ratingCount) : 0,
    };
  },

  toJSON(message: ProductInternal): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = Meta.toJSON(message.meta);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.seller !== undefined) {
      obj.seller = Seller.toJSON(message.seller);
    }
    if (message.brief !== "") {
      obj.brief = message.brief;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.inStock !== false) {
      obj.inStock = message.inStock;
    }
    if (message.imageUrl?.length) {
      obj.imageUrl = message.imageUrl;
    }
    if (message.starRating !== 0) {
      obj.starRating = message.starRating;
    }
    if (message.ratingCount !== 0) {
      obj.ratingCount = Math.round(message.ratingCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProductInternal>, I>>(base?: I): ProductInternal {
    return ProductInternal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProductInternal>, I>>(object: I): ProductInternal {
    const message = createBaseProductInternal();
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.seller = (object.seller !== undefined && object.seller !== null)
      ? Seller.fromPartial(object.seller)
      : undefined;
    message.brief = object.brief ?? "";
    message.price = object.price ?? 0;
    message.inStock = object.inStock ?? false;
    message.imageUrl = object.imageUrl?.map((e) => e) || [];
    message.starRating = object.starRating ?? 0;
    message.ratingCount = object.ratingCount ?? 0;
    return message;
  },
};

export interface ProductService {
  ListProducts(request: ListProductsRequest): Promise<ListProductsResponse>;
  GetProduct(request: GetProductRequest): Promise<GetProductResponse>;
  CreateProduct(request: CreateProductRequest): Promise<Product>;
  UpdateProduct(request: Product): Promise<Product>;
  DeleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse>;
}

export const ProductServiceServiceName = "services.ecommerce.v1.products.ProductService";
export class ProductServiceClientImpl implements ProductService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProductServiceServiceName;
    this.rpc = rpc;
    this.ListProducts = this.ListProducts.bind(this);
    this.GetProduct = this.GetProduct.bind(this);
    this.CreateProduct = this.CreateProduct.bind(this);
    this.UpdateProduct = this.UpdateProduct.bind(this);
    this.DeleteProduct = this.DeleteProduct.bind(this);
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

  CreateProduct(request: CreateProductRequest): Promise<Product> {
    const data = CreateProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateProduct", data);
    return promise.then((data) => Product.decode(new BinaryReader(data)));
  }

  UpdateProduct(request: Product): Promise<Product> {
    const data = Product.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateProduct", data);
    return promise.then((data) => Product.decode(new BinaryReader(data)));
  }

  DeleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    const data = DeleteProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteProduct", data);
    return promise.then((data) => DeleteProductResponse.decode(new BinaryReader(data)));
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
