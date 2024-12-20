/**
 * @fileoverview gRPC-Web generated client stub for services.ecommerce.v1.products
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.12.4
// source: services/ecommerce/v1/products.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_messages_pb = require('../../../common/messages_pb.js')
const proto = {};
proto.services = {};
proto.services.ecommerce = {};
proto.services.ecommerce.v1 = {};
proto.services.ecommerce.v1.products = require('./products_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.ecommerce.v1.products.ProductServiceClient =
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
proto.services.ecommerce.v1.products.ProductServicePromiseClient =
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
 *   !proto.services.ecommerce.v1.products.ListProductsRequest,
 *   !proto.services.ecommerce.v1.products.ListProductsResponse>}
 */
const methodDescriptor_ProductService_ListProducts = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.products.ProductService/ListProducts',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.products.ListProductsRequest,
  proto.services.ecommerce.v1.products.ListProductsResponse,
  /**
   * @param {!proto.services.ecommerce.v1.products.ListProductsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.products.ListProductsResponse.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.products.ListProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.products.ListProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.products.ListProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.products.ProductServiceClient.prototype.listProducts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/ListProducts',
      request,
      metadata || {},
      methodDescriptor_ProductService_ListProducts,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.products.ListProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.products.ListProductsResponse>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.products.ProductServicePromiseClient.prototype.listProducts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/ListProducts',
      request,
      metadata || {},
      methodDescriptor_ProductService_ListProducts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.ecommerce.v1.products.GetProductRequest,
 *   !proto.services.ecommerce.v1.products.GetProductResponse>}
 */
const methodDescriptor_ProductService_GetProduct = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.products.ProductService/GetProduct',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.products.GetProductRequest,
  proto.services.ecommerce.v1.products.GetProductResponse,
  /**
   * @param {!proto.services.ecommerce.v1.products.GetProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.products.GetProductResponse.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.products.GetProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.products.GetProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.products.GetProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.products.ProductServiceClient.prototype.getProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/GetProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetProduct,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.products.GetProductRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.products.GetProductResponse>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.products.ProductServicePromiseClient.prototype.getProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/GetProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.ecommerce.v1.products.CreateProductRequest,
 *   !proto.services.ecommerce.v1.products.Product>}
 */
const methodDescriptor_ProductService_CreateProduct = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.products.ProductService/CreateProduct',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.products.CreateProductRequest,
  proto.services.ecommerce.v1.products.Product,
  /**
   * @param {!proto.services.ecommerce.v1.products.CreateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.products.Product.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.products.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.products.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.products.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.products.ProductServiceClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_CreateProduct,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.products.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.products.Product>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.products.ProductServicePromiseClient.prototype.createProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_CreateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.ecommerce.v1.products.Product,
 *   !proto.services.ecommerce.v1.products.Product>}
 */
const methodDescriptor_ProductService_UpdateProduct = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.products.ProductService/UpdateProduct',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.products.Product,
  proto.services.ecommerce.v1.products.Product,
  /**
   * @param {!proto.services.ecommerce.v1.products.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.products.Product.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.products.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.products.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.products.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.products.ProductServiceClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateProduct,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.products.Product} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.products.Product>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.products.ProductServicePromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.ecommerce.v1.products.DeleteProductRequest,
 *   !proto.services.ecommerce.v1.products.DeleteProductResponse>}
 */
const methodDescriptor_ProductService_DeleteProduct = new grpc.web.MethodDescriptor(
  '/services.ecommerce.v1.products.ProductService/DeleteProduct',
  grpc.web.MethodType.UNARY,
  proto.services.ecommerce.v1.products.DeleteProductRequest,
  proto.services.ecommerce.v1.products.DeleteProductResponse,
  /**
   * @param {!proto.services.ecommerce.v1.products.DeleteProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.ecommerce.v1.products.DeleteProductResponse.deserializeBinary
);


/**
 * @param {!proto.services.ecommerce.v1.products.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.ecommerce.v1.products.DeleteProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.ecommerce.v1.products.DeleteProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ecommerce.v1.products.ProductServiceClient.prototype.deleteProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_DeleteProduct,
      callback);
};


/**
 * @param {!proto.services.ecommerce.v1.products.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.ecommerce.v1.products.DeleteProductResponse>}
 *     Promise that resolves to the response
 */
proto.services.ecommerce.v1.products.ProductServicePromiseClient.prototype.deleteProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ecommerce.v1.products.ProductService/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_DeleteProduct);
};


module.exports = proto.services.ecommerce.v1.products;

