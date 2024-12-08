import * as grpcWeb from 'grpc-web';

import * as services_ecommerce_v1_orders_pb from '../../../services/ecommerce/v1/orders_pb';


export class OrderServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createOrder(
    request: services_ecommerce_v1_orders_pb.CreateOrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_orders_pb.CreateOrderResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_orders_pb.CreateOrderResponse>;

  listBuyerOrders(
    request: services_ecommerce_v1_orders_pb.ListOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_orders_pb.ListOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_orders_pb.ListOrdersResponse>;

  listSellerOrders(
    request: services_ecommerce_v1_orders_pb.ListOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_orders_pb.ListOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_orders_pb.ListOrdersResponse>;

  getBuyerOrders(
    request: services_ecommerce_v1_orders_pb.GetOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_orders_pb.GetOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_orders_pb.GetOrdersResponse>;

  getSellerOrders(
    request: services_ecommerce_v1_orders_pb.GetOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_orders_pb.GetOrdersResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_orders_pb.GetOrdersResponse>;

  updateOrderPayment(
    request: services_ecommerce_v1_orders_pb.UpdateOrderPaymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_orders_pb.UpdateOrderPaymentResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_orders_pb.UpdateOrderPaymentResponse>;

  cancelOrder(
    request: services_ecommerce_v1_orders_pb.CancelOrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_orders_pb.CancelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_orders_pb.CancelOrderResponse>;

}

export class OrderServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createOrder(
    request: services_ecommerce_v1_orders_pb.CreateOrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_orders_pb.CreateOrderResponse>;

  listBuyerOrders(
    request: services_ecommerce_v1_orders_pb.ListOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_orders_pb.ListOrdersResponse>;

  listSellerOrders(
    request: services_ecommerce_v1_orders_pb.ListOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_orders_pb.ListOrdersResponse>;

  getBuyerOrders(
    request: services_ecommerce_v1_orders_pb.GetOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_orders_pb.GetOrdersResponse>;

  getSellerOrders(
    request: services_ecommerce_v1_orders_pb.GetOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_orders_pb.GetOrdersResponse>;

  updateOrderPayment(
    request: services_ecommerce_v1_orders_pb.UpdateOrderPaymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_orders_pb.UpdateOrderPaymentResponse>;

  cancelOrder(
    request: services_ecommerce_v1_orders_pb.CancelOrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_orders_pb.CancelOrderResponse>;

}

