import * as grpcWeb from 'grpc-web';

import * as services_ecommerce_v1_gateway_seller_pb from '../../../../services/ecommerce/v1/gateway/seller_pb';


export class SellerGatewayClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProducts(
    request: services_ecommerce_v1_gateway_seller_pb.ListProductsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_seller_pb.ListProductsResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_seller_pb.ListProductsResponse>;

  getProduct(
    request: services_ecommerce_v1_gateway_seller_pb.GetProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_seller_pb.GetProductResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_seller_pb.GetProductResponse>;

  createProduct(
    request: services_ecommerce_v1_gateway_seller_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_seller_pb.CreateProductResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_seller_pb.CreateProductResponse>;

  updateProduct(
    request: services_ecommerce_v1_gateway_seller_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_seller_pb.UpdateProductResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_seller_pb.UpdateProductResponse>;

  deleteProduct(
    request: services_ecommerce_v1_gateway_seller_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_seller_pb.DeleteProductResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_seller_pb.DeleteProductResponse>;

  listOrders(
    request: services_ecommerce_v1_gateway_seller_pb.ListOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_seller_pb.ListOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_seller_pb.ListOrdersResponse>;

  getOrders(
    request: services_ecommerce_v1_gateway_seller_pb.GetOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_seller_pb.GetOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_seller_pb.GetOrdersResponse>;

}

export class SellerGatewayPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProducts(
    request: services_ecommerce_v1_gateway_seller_pb.ListProductsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_seller_pb.ListProductsResponse>;

  getProduct(
    request: services_ecommerce_v1_gateway_seller_pb.GetProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_seller_pb.GetProductResponse>;

  createProduct(
    request: services_ecommerce_v1_gateway_seller_pb.CreateProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_seller_pb.CreateProductResponse>;

  updateProduct(
    request: services_ecommerce_v1_gateway_seller_pb.UpdateProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_seller_pb.UpdateProductResponse>;

  deleteProduct(
    request: services_ecommerce_v1_gateway_seller_pb.DeleteProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_seller_pb.DeleteProductResponse>;

  listOrders(
    request: services_ecommerce_v1_gateway_seller_pb.ListOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_seller_pb.ListOrdersResponse>;

  getOrders(
    request: services_ecommerce_v1_gateway_seller_pb.GetOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_seller_pb.GetOrdersResponse>;

}

