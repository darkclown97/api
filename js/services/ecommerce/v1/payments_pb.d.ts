import * as jspb from 'google-protobuf'

import * as common_messages_pb from '../../../common/messages_pb';


export class Payment extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): Payment;
  hasMeta(): boolean;
  clearMeta(): Payment;

  getPaymentMethod(): PaymentMethod;
  setPaymentMethod(value: PaymentMethod): Payment;

  getStatus(): PaymentStatus;
  setStatus(value: PaymentStatus): Payment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    paymentMethod: PaymentMethod,
    status: PaymentStatus,
  }
}

export class InitiatePaymentRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): InitiatePaymentRequest;

  getAmount(): number;
  setAmount(value: number): InitiatePaymentRequest;

  getPaymentMethod(): PaymentMethod;
  setPaymentMethod(value: PaymentMethod): InitiatePaymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiatePaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiatePaymentRequest): InitiatePaymentRequest.AsObject;
  static serializeBinaryToWriter(message: InitiatePaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiatePaymentRequest;
  static deserializeBinaryFromReader(message: InitiatePaymentRequest, reader: jspb.BinaryReader): InitiatePaymentRequest;
}

export namespace InitiatePaymentRequest {
  export type AsObject = {
    orderId: string,
    amount: number,
    paymentMethod: PaymentMethod,
  }
}

export class InitiatePaymentResponse extends jspb.Message {
  getPaymentId(): string;
  setPaymentId(value: string): InitiatePaymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiatePaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiatePaymentResponse): InitiatePaymentResponse.AsObject;
  static serializeBinaryToWriter(message: InitiatePaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiatePaymentResponse;
  static deserializeBinaryFromReader(message: InitiatePaymentResponse, reader: jspb.BinaryReader): InitiatePaymentResponse;
}

export namespace InitiatePaymentResponse {
  export type AsObject = {
    paymentId: string,
  }
}

export class UpdatePaymentStatusRequest extends jspb.Message {
  getPaymentId(): string;
  setPaymentId(value: string): UpdatePaymentStatusRequest;

  getStatus(): PaymentStatus;
  setStatus(value: PaymentStatus): UpdatePaymentStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePaymentStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePaymentStatusRequest): UpdatePaymentStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePaymentStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePaymentStatusRequest;
  static deserializeBinaryFromReader(message: UpdatePaymentStatusRequest, reader: jspb.BinaryReader): UpdatePaymentStatusRequest;
}

export namespace UpdatePaymentStatusRequest {
  export type AsObject = {
    paymentId: string,
    status: PaymentStatus,
  }
}

export class UpdatePaymentStatusResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePaymentStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePaymentStatusResponse): UpdatePaymentStatusResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePaymentStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePaymentStatusResponse;
  static deserializeBinaryFromReader(message: UpdatePaymentStatusResponse, reader: jspb.BinaryReader): UpdatePaymentStatusResponse;
}

export namespace UpdatePaymentStatusResponse {
  export type AsObject = {
  }
}

export class InitiateRefundRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): InitiateRefundRequest;

  getProductId(): string;
  setProductId(value: string): InitiateRefundRequest;

  getSellerId(): string;
  setSellerId(value: string): InitiateRefundRequest;

  getQuantity(): number;
  setQuantity(value: number): InitiateRefundRequest;

  getAmount(): number;
  setAmount(value: number): InitiateRefundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateRefundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateRefundRequest): InitiateRefundRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateRefundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateRefundRequest;
  static deserializeBinaryFromReader(message: InitiateRefundRequest, reader: jspb.BinaryReader): InitiateRefundRequest;
}

export namespace InitiateRefundRequest {
  export type AsObject = {
    orderId: string,
    productId: string,
    sellerId: string,
    quantity: number,
    amount: number,
  }
}

export class InitiateRefundResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateRefundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateRefundResponse): InitiateRefundResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateRefundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateRefundResponse;
  static deserializeBinaryFromReader(message: InitiateRefundResponse, reader: jspb.BinaryReader): InitiateRefundResponse;
}

export namespace InitiateRefundResponse {
  export type AsObject = {
  }
}

export class PaymentInternal extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): PaymentInternal;
  hasMeta(): boolean;
  clearMeta(): PaymentInternal;

  getOrderId(): string;
  setOrderId(value: string): PaymentInternal;

  getProductId(): string;
  setProductId(value: string): PaymentInternal;

  getSellerId(): string;
  setSellerId(value: string): PaymentInternal;

  getQuantity(): number;
  setQuantity(value: number): PaymentInternal;

  getAmount(): number;
  setAmount(value: number): PaymentInternal;

  getPaymentMethod(): PaymentMethod;
  setPaymentMethod(value: PaymentMethod): PaymentInternal;

  getStatus(): PaymentStatus;
  setStatus(value: PaymentStatus): PaymentInternal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentInternal.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentInternal): PaymentInternal.AsObject;
  static serializeBinaryToWriter(message: PaymentInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentInternal;
  static deserializeBinaryFromReader(message: PaymentInternal, reader: jspb.BinaryReader): PaymentInternal;
}

export namespace PaymentInternal {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    orderId: string,
    productId: string,
    sellerId: string,
    quantity: number,
    amount: number,
    paymentMethod: PaymentMethod,
    status: PaymentStatus,
  }
}

export enum PaymentMethod { 
  UPI = 0,
  CREDIT_CARD = 1,
  DEBIT_CARD = 2,
  NET_BANKING = 3,
  PAY_ON_DELIVERY = 4,
}
export enum PaymentStatus { 
  PAYMENT_STATUS_INITIATED = 0,
  PAYMENT_STATUS_PENDING = 1,
  PAYMENT_STATUS_FULFILLED = 2,
  PAYMENT_STATUS_FAILED = 3,
  PAYMENT_STATUS_REFUND_INITIATED = 4,
  PAYMENT_STATUS_REFUND_PENDING = 5,
  PAYMENT_STATUS_REFUND_FULFILLED = 6,
}
