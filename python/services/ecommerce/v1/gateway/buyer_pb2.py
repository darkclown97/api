# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: services/ecommerce/v1/gateway/buyer.proto
# Protobuf Python Version: 5.28.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    1,
    '',
    'services/ecommerce/v1/gateway/buyer.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from common import messages_pb2 as common_dot_messages__pb2
from services.ecommerce.v1 import products_pb2 as services_dot_ecommerce_dot_v1_dot_products__pb2
from services.ecommerce.v1 import orders_pb2 as services_dot_ecommerce_dot_v1_dot_orders__pb2
from services.ecommerce.v1 import payments_pb2 as services_dot_ecommerce_dot_v1_dot_payments__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n)services/ecommerce/v1/gateway/buyer.proto\x12\x1dservices.ecommerce.v1.gateway\x1a\x15\x63ommon/messages.proto\x1a$services/ecommerce/v1/products.proto\x1a\"services/ecommerce/v1/orders.proto\x1a$services/ecommerce/v1/payments.proto\"\xb2\x01\n\x13ListProductsRequest\x12\x32\n\x0cpage_options\x18\x01 \x01(\x0b\x32\x1c.common.messages.PageOptions\x12>\n\x07sort_by\x18\x02 \x01(\x0e\x32-.services.ecommerce.v1.products.ProductSortBy\x12\x13\n\x0bsearch_term\x18\x03 \x01(\t\x12\x12\n\ncategories\x18\x04 \x03(\t\"`\n\x14ListProductsResponse\x12\x39\n\x08products\x18\x01 \x03(\x0b\x32\'.services.ecommerce.v1.products.Product\x12\r\n\x05total\x18\x02 \x01(\x05\"\'\n\x11GetProductRequest\x12\x12\n\nproduct_id\x18\x01 \x01(\t\"M\n\x12GetProductResponse\x12\x37\n\x06\x64\x65tail\x18\x01 \x01(\x0b\x32\'.services.ecommerce.v1.products.Product\"8\n\x10\x41\x64\x64ToCartRequest\x12\x12\n\nproduct_id\x18\x01 \x01(\t\x12\x10\n\x08quantity\x18\x02 \x01(\x05\"0\n\x11\x41\x64\x64ToCartResponse\x12\x1b\n\x13total_cart_products\x18\x01 \x01(\x05\"=\n\x15RemoveFromCartRequest\x12\x12\n\nproduct_id\x18\x01 \x01(\t\x12\x10\n\x08quantity\x18\x02 \x01(\x05\"5\n\x16RemoveFromCartResponse\x12\x1b\n\x13total_cart_products\x18\x01 \x01(\x05\"\x12\n\x10\x43learCartRequest\"\x13\n\x11\x43learCartResponse\"\x11\n\x0fViewCartRequest\"j\n\x10ViewCartResponse\x12\x39\n\x08products\x18\x01 \x03(\x0b\x32\'.services.ecommerce.v1.products.Product\x12\x1b\n\x13total_cart_products\x18\x02 \x01(\x05\"\x8d\x02\n\x12\x43reateOrderRequest\x12\x11\n\x07\x63\x61rt_id\x18\x01 \x01(\tH\x00\x12\x37\n\x04item\x18\x02 \x01(\x0b\x32\'.services.ecommerce.v1.orders.OrderItemH\x00\x12\x18\n\x10shipping_address\x18\x03 \x01(\t\x12\x17\n\x0f\x62illing_address\x18\x04 \x01(\t\x12 \n\x18same_as_shipping_address\x18\x05 \x01(\x08\x12\x45\n\x0epayment_method\x18\x06 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentMethodB\x0f\n\rorder_methods\"\xa9\x01\n\x13\x43reateOrderResponse\x12\x10\n\x08order_id\x18\x01 \x01(\t\x12\x39\n\x06status\x18\x02 \x01(\x0e\x32).services.ecommerce.v1.orders.OrderStatus\x12\x45\n\x0epayment_status\x18\x03 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentStatus\"\\\n\x11ListOrdersRequest\x12\x32\n\x0cpage_options\x18\x01 \x01(\x0b\x32\x1c.common.messages.PageOptions\x12\x13\n\x0bsearch_term\x18\x02 \x01(\t\"_\n\x12ListOrdersResponse\x12\x33\n\x06orders\x18\x01 \x03(\x0b\x32#.services.ecommerce.v1.orders.Order\x12\x14\n\x0ctotal_orders\x18\x02 \x01(\x05\"$\n\x10GetOrdersRequest\x12\x10\n\x08order_id\x18\x01 \x01(\t\"H\n\x11GetOrdersResponse\x12\x33\n\x06\x64\x65tail\x18\x01 \x01(\x0b\x32#.services.ecommerce.v1.orders.Order\"&\n\x12\x43\x61ncelOrderRequest\x12\x10\n\x08order_id\x18\x01 \x01(\t\"\x15\n\x13\x43\x61ncelOrderResponse2\x95\t\n\x0c\x42uyerGateway\x12w\n\x0cListProducts\x12\x32.services.ecommerce.v1.gateway.ListProductsRequest\x1a\x33.services.ecommerce.v1.gateway.ListProductsResponse\x12q\n\nGetProduct\x12\x30.services.ecommerce.v1.gateway.GetProductRequest\x1a\x31.services.ecommerce.v1.gateway.GetProductResponse\x12n\n\tAddToCart\x12/.services.ecommerce.v1.gateway.AddToCartRequest\x1a\x30.services.ecommerce.v1.gateway.AddToCartResponse\x12}\n\x0eRemoveFromCart\x12\x34.services.ecommerce.v1.gateway.RemoveFromCartRequest\x1a\x35.services.ecommerce.v1.gateway.RemoveFromCartResponse\x12n\n\tClearCart\x12/.services.ecommerce.v1.gateway.ClearCartRequest\x1a\x30.services.ecommerce.v1.gateway.ClearCartResponse\x12k\n\x08ViewCart\x12..services.ecommerce.v1.gateway.ViewCartRequest\x1a/.services.ecommerce.v1.gateway.ViewCartResponse\x12t\n\x0b\x43reateOrder\x12\x31.services.ecommerce.v1.gateway.CreateOrderRequest\x1a\x32.services.ecommerce.v1.gateway.CreateOrderResponse\x12q\n\nListOrders\x12\x30.services.ecommerce.v1.gateway.ListOrdersRequest\x1a\x31.services.ecommerce.v1.gateway.ListOrdersResponse\x12n\n\tGetOrders\x12/.services.ecommerce.v1.gateway.GetOrdersRequest\x1a\x30.services.ecommerce.v1.gateway.GetOrdersResponse\x12t\n\x0b\x43\x61ncelOrder\x12\x31.services.ecommerce.v1.gateway.CancelOrderRequest\x1a\x32.services.ecommerce.v1.gateway.CancelOrderResponseB:Z8github.com/darkclown97/api/services/ecommerce/v1/gatewayb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'services.ecommerce.v1.gateway.buyer_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z8github.com/darkclown97/api/services/ecommerce/v1/gateway'
  _globals['_LISTPRODUCTSREQUEST']._serialized_start=212
  _globals['_LISTPRODUCTSREQUEST']._serialized_end=390
  _globals['_LISTPRODUCTSRESPONSE']._serialized_start=392
  _globals['_LISTPRODUCTSRESPONSE']._serialized_end=488
  _globals['_GETPRODUCTREQUEST']._serialized_start=490
  _globals['_GETPRODUCTREQUEST']._serialized_end=529
  _globals['_GETPRODUCTRESPONSE']._serialized_start=531
  _globals['_GETPRODUCTRESPONSE']._serialized_end=608
  _globals['_ADDTOCARTREQUEST']._serialized_start=610
  _globals['_ADDTOCARTREQUEST']._serialized_end=666
  _globals['_ADDTOCARTRESPONSE']._serialized_start=668
  _globals['_ADDTOCARTRESPONSE']._serialized_end=716
  _globals['_REMOVEFROMCARTREQUEST']._serialized_start=718
  _globals['_REMOVEFROMCARTREQUEST']._serialized_end=779
  _globals['_REMOVEFROMCARTRESPONSE']._serialized_start=781
  _globals['_REMOVEFROMCARTRESPONSE']._serialized_end=834
  _globals['_CLEARCARTREQUEST']._serialized_start=836
  _globals['_CLEARCARTREQUEST']._serialized_end=854
  _globals['_CLEARCARTRESPONSE']._serialized_start=856
  _globals['_CLEARCARTRESPONSE']._serialized_end=875
  _globals['_VIEWCARTREQUEST']._serialized_start=877
  _globals['_VIEWCARTREQUEST']._serialized_end=894
  _globals['_VIEWCARTRESPONSE']._serialized_start=896
  _globals['_VIEWCARTRESPONSE']._serialized_end=1002
  _globals['_CREATEORDERREQUEST']._serialized_start=1005
  _globals['_CREATEORDERREQUEST']._serialized_end=1274
  _globals['_CREATEORDERRESPONSE']._serialized_start=1277
  _globals['_CREATEORDERRESPONSE']._serialized_end=1446
  _globals['_LISTORDERSREQUEST']._serialized_start=1448
  _globals['_LISTORDERSREQUEST']._serialized_end=1540
  _globals['_LISTORDERSRESPONSE']._serialized_start=1542
  _globals['_LISTORDERSRESPONSE']._serialized_end=1637
  _globals['_GETORDERSREQUEST']._serialized_start=1639
  _globals['_GETORDERSREQUEST']._serialized_end=1675
  _globals['_GETORDERSRESPONSE']._serialized_start=1677
  _globals['_GETORDERSRESPONSE']._serialized_end=1749
  _globals['_CANCELORDERREQUEST']._serialized_start=1751
  _globals['_CANCELORDERREQUEST']._serialized_end=1789
  _globals['_CANCELORDERRESPONSE']._serialized_start=1791
  _globals['_CANCELORDERRESPONSE']._serialized_end=1812
  _globals['_BUYERGATEWAY']._serialized_start=1815
  _globals['_BUYERGATEWAY']._serialized_end=2988
# @@protoc_insertion_point(module_scope)
