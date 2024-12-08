/**
 * @fileoverview gRPC-Web generated client stub for services.ecommerce.v1.cart
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.12.4
// source: services/ecommerce/v1/cart.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_messages_pb = require('../../../common/messages_pb.js')

var services_ecommerce_v1_products_pb = require('../../../services/ecommerce/v1/products_pb.js')
const proto = {};
proto.services = {};
proto.services.ecommerce = {};
proto.services.ecommerce.v1 = {};
proto.services.ecommerce.v1.cart = require('./cart_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.ecommerce.v1.cart.CartServiceClient =
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
proto.services.ecommerce.v1.cart.CartServicePromiseClient =
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
 *   !proto.services.ecommerce.v1.cart.AddToCartRequest,
 *   !proto.services.ecommerce.v1.cart.AddToCartResponse>}
 */
const methodDescriptor_CartService_AddToCart = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.cart.CartService/AddToCart',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.cart.AddToCartRequest,
  proto.services.ecommerce.v1.cart.AddToCartResponse,
  /**
   * @param {!proto.services.ecommerce.v1.cart.AddToCartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.cart.AddToCartResponse.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.cart.AddToCartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.cart.AddToCartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.cart.AddToCartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.cart.CartServiceClient.prototype.addToCart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/AddToCart',
      request,
      metadata || {},
      methodDescriptor_CartService_AddToCart,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.cart.AddToCartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.cart.AddToCartResponse>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.cart.CartServicePromiseClient.prototype.addToCart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/AddToCart',
      request,
      metadata || {},
      methodDescriptor_CartService_AddToCart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.ecommerce.v1.cart.RemoveFromCartRequest,
 *   !proto.services.ecommerce.v1.cart.RemoveFromCartResponse>}
 */
const methodDescriptor_CartService_RemoveFromCart = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.cart.CartService/RemoveFromCart',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.cart.RemoveFromCartRequest,
  proto.services.ecommerce.v1.cart.RemoveFromCartResponse,
  /**
   * @param {!proto.services.ecommerce.v1.cart.RemoveFromCartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.cart.RemoveFromCartResponse.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.cart.RemoveFromCartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.cart.RemoveFromCartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.cart.RemoveFromCartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.cart.CartServiceClient.prototype.removeFromCart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/RemoveFromCart',
      request,
      metadata || {},
      methodDescriptor_CartService_RemoveFromCart,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.cart.RemoveFromCartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.cart.RemoveFromCartResponse>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.cart.CartServicePromiseClient.prototype.removeFromCart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/RemoveFromCart',
      request,
      metadata || {},
      methodDescriptor_CartService_RemoveFromCart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.ecommerce.v1.cart.ClearCartRequest,
 *   !proto.services.ecommerce.v1.cart.ClearCartResponse>}
 */
const methodDescriptor_CartService_ClearCart = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.cart.CartService/ClearCart',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.cart.ClearCartRequest,
  proto.services.ecommerce.v1.cart.ClearCartResponse,
  /**
   * @param {!proto.services.ecommerce.v1.cart.ClearCartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.cart.ClearCartResponse.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.cart.ClearCartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.cart.ClearCartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.cart.ClearCartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.cart.CartServiceClient.prototype.clearCart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/ClearCart',
      request,
      metadata || {},
      methodDescriptor_CartService_ClearCart,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.cart.ClearCartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.cart.ClearCartResponse>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.cart.CartServicePromiseClient.prototype.clearCart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/ClearCart',
      request,
      metadata || {},
      methodDescriptor_CartService_ClearCart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.ecommerce.v1.cart.ViewCartRequest,
 *   !proto.services.ecommerce.v1.cart.ViewCartResponse>}
 */
const methodDescriptor_CartService_ViewCart = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.cart.CartService/ViewCart',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.cart.ViewCartRequest,
  proto.services.ecommerce.v1.cart.ViewCartResponse,
  /**
   * @param {!proto.services.ecommerce.v1.cart.ViewCartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.cart.ViewCartResponse.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.cart.ViewCartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.cart.ViewCartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.cart.ViewCartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.cart.CartServiceClient.prototype.viewCart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/ViewCart',
      request,
      metadata || {},
      methodDescriptor_CartService_ViewCart,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.cart.ViewCartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.cart.ViewCartResponse>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.cart.CartServicePromiseClient.prototype.viewCart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.cart.CartService/ViewCart',
      request,
      metadata || {},
      methodDescriptor_CartService_ViewCart);
};


module.exports = proto.services.ecommerce.v1.cart;
