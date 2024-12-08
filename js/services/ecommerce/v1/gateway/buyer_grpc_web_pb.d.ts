import * as grpcWeb from 'grpc-web';

import * as services_ecommerce_v1_gateway_buyer_pb from '../../../../services/ecommerce/v1/gateway/buyer_pb';


export class BuyerGatewayClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProducts(
    request: services_ecommerce_v1_gateway_buyer_pb.ListProductsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.ListProductsResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.ListProductsResponse>;

  getProduct(
    request: services_ecommerce_v1_gateway_buyer_pb.GetProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.GetProductResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.GetProductResponse>;

  addToCart(
    request: services_ecommerce_v1_gateway_buyer_pb.AddToCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.AddToCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.AddToCartResponse>;

  removeFromCart(
    request: services_ecommerce_v1_gateway_buyer_pb.RemoveFromCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.RemoveFromCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.RemoveFromCartResponse>;

  clearCart(
    request: services_ecommerce_v1_gateway_buyer_pb.ClearCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.ClearCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.ClearCartResponse>;

  viewCart(
    request: services_ecommerce_v1_gateway_buyer_pb.ViewCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.ViewCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.ViewCartResponse>;

  createOrder(
    request: services_ecommerce_v1_gateway_buyer_pb.CreateOrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.CreateOrderResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.CreateOrderResponse>;

  listOrders(
    request: services_ecommerce_v1_gateway_buyer_pb.ListOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.ListOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.ListOrdersResponse>;

  getOrders(
    request: services_ecommerce_v1_gateway_buyer_pb.GetOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.GetOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.GetOrdersResponse>;

  cancelOrder(
    request: services_ecommerce_v1_gateway_buyer_pb.CancelOrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_gateway_buyer_pb.CancelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_gateway_buyer_pb.CancelOrderResponse>;

}

export class BuyerGatewayPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProducts(
    request: services_ecommerce_v1_gateway_buyer_pb.ListProductsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.ListProductsResponse>;

  getProduct(
    request: services_ecommerce_v1_gateway_buyer_pb.GetProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.GetProductResponse>;

  addToCart(
    request: services_ecommerce_v1_gateway_buyer_pb.AddToCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.AddToCartResponse>;

  removeFromCart(
    request: services_ecommerce_v1_gateway_buyer_pb.RemoveFromCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.RemoveFromCartResponse>;

  clearCart(
    request: services_ecommerce_v1_gateway_buyer_pb.ClearCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.ClearCartResponse>;

  viewCart(
    request: services_ecommerce_v1_gateway_buyer_pb.ViewCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.ViewCartResponse>;

  createOrder(
    request: services_ecommerce_v1_gateway_buyer_pb.CreateOrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.CreateOrderResponse>;

  listOrders(
    request: services_ecommerce_v1_gateway_buyer_pb.ListOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.ListOrdersResponse>;

  getOrders(
    request: services_ecommerce_v1_gateway_buyer_pb.GetOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.GetOrdersResponse>;

  cancelOrder(
    request: services_ecommerce_v1_gateway_buyer_pb.CancelOrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_gateway_buyer_pb.CancelOrderResponse>;

}

