import * as grpcWeb from 'grpc-web';

import * as services_ecommerce_v1_payments_pb from '../../../services/ecommerce/v1/payments_pb';


export class PaymentServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  initiatePayment(
    request: services_ecommerce_v1_payments_pb.InitiatePaymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_payments_pb.InitiatePaymentResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_payments_pb.InitiatePaymentResponse>;

  updatePaymentStatus(
    request: services_ecommerce_v1_payments_pb.UpdatePaymentStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_payments_pb.UpdatePaymentStatusResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_payments_pb.UpdatePaymentStatusResponse>;

  initiateRefund(
    request: services_ecommerce_v1_payments_pb.InitiateRefundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_payments_pb.InitiateRefundResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_payments_pb.InitiateRefundResponse>;

}

export class PaymentServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  initiatePayment(
    request: services_ecommerce_v1_payments_pb.InitiatePaymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_payments_pb.InitiatePaymentResponse>;

  updatePaymentStatus(
    request: services_ecommerce_v1_payments_pb.UpdatePaymentStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_payments_pb.UpdatePaymentStatusResponse>;

  initiateRefund(
    request: services_ecommerce_v1_payments_pb.InitiateRefundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_payments_pb.InitiateRefundResponse>;

}

