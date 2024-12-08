import * as grpcWeb from 'grpc-web';

import * as services_ecommerce_v1_cart_pb from '../../../services/ecommerce/v1/cart_pb';


export class CartServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addToCart(
    request: services_ecommerce_v1_cart_pb.AddToCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_cart_pb.AddToCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_cart_pb.AddToCartResponse>;

  removeFromCart(
    request: services_ecommerce_v1_cart_pb.RemoveFromCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_cart_pb.RemoveFromCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_cart_pb.RemoveFromCartResponse>;

  clearCart(
    request: services_ecommerce_v1_cart_pb.ClearCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_cart_pb.ClearCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_cart_pb.ClearCartResponse>;

  viewCart(
    request: services_ecommerce_v1_cart_pb.ViewCartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_cart_pb.ViewCartResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_cart_pb.ViewCartResponse>;

}

export class CartServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addToCart(
    request: services_ecommerce_v1_cart_pb.AddToCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_cart_pb.AddToCartResponse>;

  removeFromCart(
    request: services_ecommerce_v1_cart_pb.RemoveFromCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_cart_pb.RemoveFromCartResponse>;

  clearCart(
    request: services_ecommerce_v1_cart_pb.ClearCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_cart_pb.ClearCartResponse>;

  viewCart(
    request: services_ecommerce_v1_cart_pb.ViewCartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_cart_pb.ViewCartResponse>;

}

