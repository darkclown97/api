/**
 * @fileoverview gRPC-Web generated client stub for services.auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.12.4
// source: services/ecommerce/v1/authentication.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_user_pb = require('../../../common/user_pb.js')

var common_messages_pb = require('../../../common/messages_pb.js')
const proto = {};
proto.services = {};
proto.services.auth = require('./authentication_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.auth.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.auth.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.auth.RegisterRequest,
 *   !proto.services.auth.LoginResponse>}
 */
const methodDescriptor_AuthService_Register = new grpc.web.MethodDescriptor(
  '/services.auth.AuthService/Register',
  grpc.web.MethodType.UNARY,
  proto.services.auth.RegisterRequest,
  proto.services.auth.LoginResponse,
  /**
   * @param {!proto.services.auth.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.auth.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.services.auth.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.auth.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.auth.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.auth.AuthServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.auth.AuthService/Register',
      request,
      metadata || {},
      methodDescriptor_AuthService_Register,
      callback);
};


/**
 * @param {!proto.services.auth.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.auth.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.services.auth.AuthServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.auth.AuthService/Register',
      request,
      metadata || {},
      methodDescriptor_AuthService_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.auth.LoginRequest,
 *   !proto.services.auth.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/services.auth.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.services.auth.LoginRequest,
  proto.services.auth.LoginResponse,
  /**
   * @param {!proto.services.auth.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.auth.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.services.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.auth.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.auth.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.auth.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.auth.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.services.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.auth.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.services.auth.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.auth.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.auth.RefreshTokenRequest,
 *   !proto.services.auth.LoginResponse>}
 */
const methodDescriptor_AuthService_RefreshToken = new grpc.web.MethodDescriptor(
  '/services.auth.AuthService/RefreshToken',
  grpc.web.MethodType.UNARY,
  proto.services.auth.RefreshTokenRequest,
  proto.services.auth.LoginResponse,
  /**
   * @param {!proto.services.auth.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.auth.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.services.auth.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.auth.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.auth.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.auth.AuthServiceClient.prototype.refreshToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.auth.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken,
      callback);
};


/**
 * @param {!proto.services.auth.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.auth.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.services.auth.AuthServicePromiseClient.prototype.refreshToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.auth.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.auth.LogoutRequest,
 *   !proto.services.auth.LogoutResponse>}
 */
const methodDescriptor_AuthService_Logout = new grpc.web.MethodDescriptor(
  '/services.auth.AuthService/Logout',
  grpc.web.MethodType.UNARY,
  proto.services.auth.LogoutRequest,
  proto.services.auth.LogoutResponse,
  /**
   * @param {!proto.services.auth.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.auth.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.services.auth.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.auth.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.auth.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.auth.AuthServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.auth.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout,
      callback);
};


/**
 * @param {!proto.services.auth.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.auth.LogoutResponse>}
 *     Promise that resolves to the response
 */
proto.services.auth.AuthServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.auth.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.auth.ForgotPasswordRequest,
 *   !proto.services.auth.ForgotPasswordResponse>}
 */
const methodDescriptor_AuthService_ForgotPassword = new grpc.web.MethodDescriptor(
  '/services.auth.AuthService/ForgotPassword',
  grpc.web.MethodType.UNARY,
  proto.services.auth.ForgotPasswordRequest,
  proto.services.auth.ForgotPasswordResponse,
  /**
   * @param {!proto.services.auth.ForgotPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.auth.ForgotPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.services.auth.ForgotPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.auth.ForgotPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.auth.ForgotPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.auth.AuthServiceClient.prototype.forgotPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.auth.AuthService/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ForgotPassword,
      callback);
};


/**
 * @param {!proto.services.auth.ForgotPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.auth.ForgotPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.services.auth.AuthServicePromiseClient.prototype.forgotPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.auth.AuthService/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ForgotPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.auth.ResetPasswordRequest,
 *   !proto.services.auth.ResetPasswordResponse>}
 */
const methodDescriptor_AuthService_ResetPassword = new grpc.web.MethodDescriptor(
  '/services.auth.AuthService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.services.auth.ResetPasswordRequest,
  proto.services.auth.ResetPasswordResponse,
  /**
   * @param {!proto.services.auth.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.auth.ResetPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.services.auth.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.auth.ResetPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.auth.ResetPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.auth.AuthServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.auth.AuthService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ResetPassword,
      callback);
};


/**
 * @param {!proto.services.auth.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.auth.ResetPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.services.auth.AuthServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.auth.AuthService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.auth.UpdateProfileRequest,
 *   !proto.services.auth.UpdateProfileResponse>}
 */
const methodDescriptor_AuthService_UpdateProfile = new grpc.web.MethodDescriptor(
  '/services.auth.AuthService/UpdateProfile',
  grpc.web.MethodType.UNARY,
  proto.services.auth.UpdateProfileRequest,
  proto.services.auth.UpdateProfileResponse,
  /**
   * @param {!proto.services.auth.UpdateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.auth.UpdateProfileResponse.deserializeBinary
);


/**
 * @param {!proto.services.auth.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.auth.UpdateProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.auth.UpdateProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.auth.AuthServiceClient.prototype.updateProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.auth.AuthService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_AuthService_UpdateProfile,
      callback);
};


/**
 * @param {!proto.services.auth.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.auth.UpdateProfileResponse>}
 *     Promise that resolves to the response
 */
proto.services.auth.AuthServicePromiseClient.prototype.updateProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.auth.AuthService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_AuthService_UpdateProfile);
};


module.exports = proto.services.auth;
