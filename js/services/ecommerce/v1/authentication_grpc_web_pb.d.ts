import * as grpcWeb from 'grpc-web';

import * as services_ecommerce_v1_authentication_pb from '../../../services/ecommerce/v1/authentication_pb';


export class AuthServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: services_ecommerce_v1_authentication_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_authentication_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_authentication_pb.LoginResponse>;

  login(
    request: services_ecommerce_v1_authentication_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_authentication_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_authentication_pb.LoginResponse>;

  refreshToken(
    request: services_ecommerce_v1_authentication_pb.RefreshTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_authentication_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_authentication_pb.LoginResponse>;

  logout(
    request: services_ecommerce_v1_authentication_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_authentication_pb.LogoutResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_authentication_pb.LogoutResponse>;

  forgotPassword(
    request: services_ecommerce_v1_authentication_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_authentication_pb.ForgotPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_authentication_pb.ForgotPasswordResponse>;

  resetPassword(
    request: services_ecommerce_v1_authentication_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_authentication_pb.ResetPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_authentication_pb.ResetPasswordResponse>;

  updateProfile(
    request: services_ecommerce_v1_authentication_pb.UpdateProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: services_ecommerce_v1_authentication_pb.UpdateProfileResponse) => void
  ): grpcWeb.ClientReadableStream<services_ecommerce_v1_authentication_pb.UpdateProfileResponse>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: services_ecommerce_v1_authentication_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_authentication_pb.LoginResponse>;

  login(
    request: services_ecommerce_v1_authentication_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_authentication_pb.LoginResponse>;

  refreshToken(
    request: services_ecommerce_v1_authentication_pb.RefreshTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_authentication_pb.LoginResponse>;

  logout(
    request: services_ecommerce_v1_authentication_pb.LogoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_authentication_pb.LogoutResponse>;

  forgotPassword(
    request: services_ecommerce_v1_authentication_pb.ForgotPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_authentication_pb.ForgotPasswordResponse>;

  resetPassword(
    request: services_ecommerce_v1_authentication_pb.ResetPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_authentication_pb.ResetPasswordResponse>;

  updateProfile(
    request: services_ecommerce_v1_authentication_pb.UpdateProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<services_ecommerce_v1_authentication_pb.UpdateProfileResponse>;

}

