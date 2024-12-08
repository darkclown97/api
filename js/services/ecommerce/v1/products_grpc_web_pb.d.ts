import * as grpcWeb from 'grpc-web';

import * as services_ecommerce_v1_products_pb from '../../../services/ecommerce/v1/products_pb';


export class ProductServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProducts(
    request: services_ecommerce_v1_products_pb.ListProductsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_products_pb.ListProductsResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_products_pb.ListProductsResponse>;

  getProduct(
    request: services_ecommerce_v1_products_pb.GetProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_products_pb.GetProductResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_products_pb.GetProductResponse>;

  createProduct(
    request: services_ecommerce_v1_products_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_products_pb.Product) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_products_pb.Product>;

  updateProduct(
    request: services_ecommerce_v1_products_pb.Product,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_products_pb.Product) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_products_pb.Product>;

  deleteProduct(
    request: services_ecommerce_v1_products_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_products_pb.DeleteProductResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_products_pb.DeleteProductResponse>;

}

export class ProductServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProducts(
    request: services_ecommerce_v1_products_pb.ListProductsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_products_pb.ListProductsResponse>;

  getProduct(
    request: services_ecommerce_v1_products_pb.GetProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_products_pb.GetProductResponse>;

  createProduct(
    request: services_ecommerce_v1_products_pb.CreateProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_products_pb.Product>;

  updateProduct(
    request: services_ecommerce_v1_products_pb.Product,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_products_pb.Product>;

  deleteProduct(
    request: services_ecommerce_v1_products_pb.DeleteProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_products_pb.DeleteProductResponse>;

}

