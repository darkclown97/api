import * as jspb from 'google-protobuf'

import * as common_user_pb from '../../../common/user_pb';
import * as common_messages_pb from '../../../common/messages_pb';


export class BuyerAddresses extends jspb.Message {
  getDropoffAddressesList(): Array<string>;
  setDropoffAddressesList(value: Array<string>): BuyerAddresses;
  clearDropoffAddressesList(): BuyerAddresses;
  addDropoffAddresses(value: string, index?: number): BuyerAddresses;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyerAddresses.AsObject;
  static toObject(includeInstance: boolean, msg: BuyerAddresses): BuyerAddresses.AsObject;
  static serializeBinaryToWriter(message: BuyerAddresses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyerAddresses;
  static deserializeBinaryFromReader(message: BuyerAddresses, reader: jspb.BinaryReader): BuyerAddresses;
}

export namespace BuyerAddresses {
  export type AsObject = {
    dropoffAddressesList: Array<string>,
  }
}

export class SellerAddresses extends jspb.Message {
  getPickupAddressesList(): Array<string>;
  setPickupAddressesList(value: Array<string>): SellerAddresses;
  clearPickupAddressesList(): SellerAddresses;
  addPickupAddresses(value: string, index?: number): SellerAddresses;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellerAddresses.AsObject;
  static toObject(includeInstance: boolean, msg: SellerAddresses): SellerAddresses.AsObject;
  static serializeBinaryToWriter(message: SellerAddresses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellerAddresses;
  static deserializeBinaryFromReader(message: SellerAddresses, reader: jspb.BinaryReader): SellerAddresses;
}

export namespace SellerAddresses {
  export type AsObject = {
    pickupAddressesList: Array<string>,
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPhone(): string;
  setPhone(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getLoginCredentialCase(): LoginRequest.LoginCredentialCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    phone: string,
    password: string,
  }

  export enum LoginCredentialCase { 
    LOGIN_CREDENTIAL_NOT_SET = 0,
    EMAIL = 1,
    PHONE = 2,
  }
}

export class AuthTokens extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthTokens;

  getRefreshToken(): string;
  setRefreshToken(value: string): AuthTokens;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthTokens.AsObject;
  static toObject(includeInstance: boolean, msg: AuthTokens): AuthTokens.AsObject;
  static serializeBinaryToWriter(message: AuthTokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthTokens;
  static deserializeBinaryFromReader(message: AuthTokens, reader: jspb.BinaryReader): AuthTokens;
}

export namespace AuthTokens {
  export type AsObject = {
    token: string,
    refreshToken: string,
  }
}

export class LoginResponse extends jspb.Message {
  getTokens(): AuthTokens | undefined;
  setTokens(value?: AuthTokens): LoginResponse;
  hasTokens(): boolean;
  clearTokens(): LoginResponse;

  getError(): string;
  setError(value: string): LoginResponse;

  getResultCase(): LoginResponse.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    tokens?: AuthTokens.AsObject,
    error: string,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    TOKENS = 1,
    ERROR = 2,
  }
}

export class RefreshTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
  static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
  export type AsObject = {
  }
}

export class LogoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
  }
}

export class LogoutResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LogoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class RegisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getPhone(): string;
  setPhone(value: string): RegisterRequest;

  getAddress(): string;
  setAddress(value: string): RegisterRequest;

  getSellerAddresses(): SellerAddresses | undefined;
  setSellerAddresses(value?: SellerAddresses): RegisterRequest;
  hasSellerAddresses(): boolean;
  clearSellerAddresses(): RegisterRequest;

  getBuyerAddresses(): BuyerAddresses | undefined;
  setBuyerAddresses(value?: BuyerAddresses): RegisterRequest;
  hasBuyerAddresses(): boolean;
  clearBuyerAddresses(): RegisterRequest;

  getAddressesCase(): RegisterRequest.AddressesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    sellerAddresses?: SellerAddresses.AsObject,
    buyerAddresses?: BuyerAddresses.AsObject,
  }

  export enum AddressesCase { 
    ADDRESSES_NOT_SET = 0,
    SELLER_ADDRESSES = 6,
    BUYER_ADDRESSES = 7,
  }
}

export class ForgotPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ForgotPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordRequest): ForgotPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordRequest;
  static deserializeBinaryFromReader(message: ForgotPasswordRequest, reader: jspb.BinaryReader): ForgotPasswordRequest;
}

export namespace ForgotPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class ForgotPasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ForgotPasswordResponse;

  getMessage(): string;
  setMessage(value: string): ForgotPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordResponse): ForgotPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordResponse;
  static deserializeBinaryFromReader(message: ForgotPasswordResponse, reader: jspb.BinaryReader): ForgotPasswordResponse;
}

export namespace ForgotPasswordResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getResetToken(): string;
  setResetToken(value: string): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    resetToken: string,
    newPassword: string,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ResetPasswordResponse;

  getMessage(): string;
  setMessage(value: string): ResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class UpdateProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateProfileRequest;

  getEmail(): string;
  setEmail(value: string): UpdateProfileRequest;

  getPhone(): string;
  setPhone(value: string): UpdateProfileRequest;

  getAddress(): string;
  setAddress(value: string): UpdateProfileRequest;

  getSellerAddresses(): SellerAddresses | undefined;
  setSellerAddresses(value?: SellerAddresses): UpdateProfileRequest;
  hasSellerAddresses(): boolean;
  clearSellerAddresses(): UpdateProfileRequest;

  getBuyerAddresses(): BuyerAddresses | undefined;
  setBuyerAddresses(value?: BuyerAddresses): UpdateProfileRequest;
  hasBuyerAddresses(): boolean;
  clearBuyerAddresses(): UpdateProfileRequest;

  getAddressesCase(): UpdateProfileRequest.AddressesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    name: string,
    email: string,
    phone: string,
    address: string,
    sellerAddresses?: SellerAddresses.AsObject,
    buyerAddresses?: BuyerAddresses.AsObject,
  }

  export enum AddressesCase { 
    ADDRESSES_NOT_SET = 0,
    SELLER_ADDRESSES = 5,
    BUYER_ADDRESSES = 6,
  }
}

export class UpdateProfileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateProfileResponse;

  getMessage(): string;
  setMessage(value: string): UpdateProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileResponse): UpdateProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileResponse;
  static deserializeBinaryFromReader(message: UpdateProfileResponse, reader: jspb.BinaryReader): UpdateProfileResponse;
}

export namespace UpdateProfileResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class BuyerInternal extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): BuyerInternal;
  hasMeta(): boolean;
  clearMeta(): BuyerInternal;

  getName(): string;
  setName(value: string): BuyerInternal;

  getEmail(): string;
  setEmail(value: string): BuyerInternal;

  getPassword(): string;
  setPassword(value: string): BuyerInternal;

  getPhone(): string;
  setPhone(value: string): BuyerInternal;

  getPrimaryAddress(): string;
  setPrimaryAddress(value: string): BuyerInternal;

  getDeliveryAddressesList(): Array<string>;
  setDeliveryAddressesList(value: Array<string>): BuyerInternal;
  clearDeliveryAddressesList(): BuyerInternal;
  addDeliveryAddresses(value: string, index?: number): BuyerInternal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyerInternal.AsObject;
  static toObject(includeInstance: boolean, msg: BuyerInternal): BuyerInternal.AsObject;
  static serializeBinaryToWriter(message: BuyerInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyerInternal;
  static deserializeBinaryFromReader(message: BuyerInternal, reader: jspb.BinaryReader): BuyerInternal;
}

export namespace BuyerInternal {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    name: string,
    email: string,
    password: string,
    phone: string,
    primaryAddress: string,
    deliveryAddressesList: Array<string>,
  }
}

export class SellerInternal extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): SellerInternal;
  hasMeta(): boolean;
  clearMeta(): SellerInternal;

  getName(): string;
  setName(value: string): SellerInternal;

  getEmail(): string;
  setEmail(value: string): SellerInternal;

  getPassword(): string;
  setPassword(value: string): SellerInternal;

  getPhone(): string;
  setPhone(value: string): SellerInternal;

  getPrimaryAddress(): string;
  setPrimaryAddress(value: string): SellerInternal;

  getPickupAddressesList(): Array<string>;
  setPickupAddressesList(value: Array<string>): SellerInternal;
  clearPickupAddressesList(): SellerInternal;
  addPickupAddresses(value: string, index?: number): SellerInternal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellerInternal.AsObject;
  static toObject(includeInstance: boolean, msg: SellerInternal): SellerInternal.AsObject;
  static serializeBinaryToWriter(message: SellerInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellerInternal;
  static deserializeBinaryFromReader(message: SellerInternal, reader: jspb.BinaryReader): SellerInternal;
}

export namespace SellerInternal {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    name: string,
    email: string,
    password: string,
    phone: string,
    primaryAddress: string,
    pickupAddressesList: Array<string>,
  }
}

export enum UserType { 
  UNKNOWN = 0,
  BUYER = 1,
  SELLER = 2,
}
