from common import messages_pb2 as _messages_pb2
from services.ecommerce.v1 import products_pb2 as _products_pb2
from services.ecommerce.v1 import orders_pb2 as _orders_pb2
from services.ecommerce.v1 import payments_pb2 as _payments_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListProductsRequest(_message.Message):
    __slots__ = ("page_options", "sort_by", "search_term", "categories")
    PAGE_OPTIONS_FIELD_NUMBER: _ClassVar[int]
    SORT_BY_FIELD_NUMBER: _ClassVar[int]
    SEARCH_TERM_FIELD_NUMBER: _ClassVar[int]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    page_options: _messages_pb2.PageOptions
    sort_by: _products_pb2.ProductSortBy
    search_term: str
    categories: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, page_options: _Optional[_Union[_messages_pb2.PageOptions, _Mapping]] = ..., sort_by: _Optional[_Union[_products_pb2.ProductSortBy, str]] = ..., search_term: _Optional[str] = ..., categories: _Optional[_Iterable[str]] = ...) -> None: ...

class ListProductsResponse(_message.Message):
    __slots__ = ("products", "total")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[_products_pb2.Product]
    total: int
    def __init__(self, products: _Optional[_Iterable[_Union[_products_pb2.Product, _Mapping]]] = ..., total: _Optional[int] = ...) -> None: ...

class GetProductRequest(_message.Message):
    __slots__ = ("product_id",)
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    def __init__(self, product_id: _Optional[str] = ...) -> None: ...

class GetProductResponse(_message.Message):
    __slots__ = ("detail",)
    DETAIL_FIELD_NUMBER: _ClassVar[int]
    detail: _products_pb2.Product
    def __init__(self, detail: _Optional[_Union[_products_pb2.Product, _Mapping]] = ...) -> None: ...

class AddToCartRequest(_message.Message):
    __slots__ = ("product_id", "quantity")
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    quantity: int
    def __init__(self, product_id: _Optional[str] = ..., quantity: _Optional[int] = ...) -> None: ...

class AddToCartResponse(_message.Message):
    __slots__ = ("total_cart_products",)
    TOTAL_CART_PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    total_cart_products: int
    def __init__(self, total_cart_products: _Optional[int] = ...) -> None: ...

class RemoveFromCartRequest(_message.Message):
    __slots__ = ("product_id", "quantity")
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    quantity: int
    def __init__(self, product_id: _Optional[str] = ..., quantity: _Optional[int] = ...) -> None: ...

class RemoveFromCartResponse(_message.Message):
    __slots__ = ("total_cart_products",)
    TOTAL_CART_PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    total_cart_products: int
    def __init__(self, total_cart_products: _Optional[int] = ...) -> None: ...

class ClearCartRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ClearCartResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ViewCartRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ViewCartResponse(_message.Message):
    __slots__ = ("products", "total_cart_products")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_CART_PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[_products_pb2.Product]
    total_cart_products: int
    def __init__(self, products: _Optional[_Iterable[_Union[_products_pb2.Product, _Mapping]]] = ..., total_cart_products: _Optional[int] = ...) -> None: ...

class CreateOrderRequest(_message.Message):
    __slots__ = ("cart_id", "item", "shipping_address", "billing_address", "same_as_shipping_address", "payment_method")
    CART_ID_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BILLING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SAME_AS_SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    cart_id: str
    item: _orders_pb2.OrderItem
    shipping_address: str
    billing_address: str
    same_as_shipping_address: bool
    payment_method: _payments_pb2.PaymentMethod
    def __init__(self, cart_id: _Optional[str] = ..., item: _Optional[_Union[_orders_pb2.OrderItem, _Mapping]] = ..., shipping_address: _Optional[str] = ..., billing_address: _Optional[str] = ..., same_as_shipping_address: bool = ..., payment_method: _Optional[_Union[_payments_pb2.PaymentMethod, str]] = ...) -> None: ...

class CreateOrderResponse(_message.Message):
    __slots__ = ("order_id", "status", "payment_status")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_STATUS_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    status: _orders_pb2.OrderStatus
    payment_status: _payments_pb2.PaymentStatus
    def __init__(self, order_id: _Optional[str] = ..., status: _Optional[_Union[_orders_pb2.OrderStatus, str]] = ..., payment_status: _Optional[_Union[_payments_pb2.PaymentStatus, str]] = ...) -> None: ...

class ListOrdersRequest(_message.Message):
    __slots__ = ("page_options", "search_term")
    PAGE_OPTIONS_FIELD_NUMBER: _ClassVar[int]
    SEARCH_TERM_FIELD_NUMBER: _ClassVar[int]
    page_options: _messages_pb2.PageOptions
    search_term: str
    def __init__(self, page_options: _Optional[_Union[_messages_pb2.PageOptions, _Mapping]] = ..., search_term: _Optional[str] = ...) -> None: ...

class ListOrdersResponse(_message.Message):
    __slots__ = ("orders", "total_orders")
    ORDERS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_ORDERS_FIELD_NUMBER: _ClassVar[int]
    orders: _containers.RepeatedCompositeFieldContainer[_orders_pb2.Order]
    total_orders: int
    def __init__(self, orders: _Optional[_Iterable[_Union[_orders_pb2.Order, _Mapping]]] = ..., total_orders: _Optional[int] = ...) -> None: ...

class GetOrdersRequest(_message.Message):
    __slots__ = ("order_id",)
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    def __init__(self, order_id: _Optional[str] = ...) -> None: ...

class GetOrdersResponse(_message.Message):
    __slots__ = ("detail",)
    DETAIL_FIELD_NUMBER: _ClassVar[int]
    detail: _orders_pb2.Order
    def __init__(self, detail: _Optional[_Union[_orders_pb2.Order, _Mapping]] = ...) -> None: ...

class CancelOrderRequest(_message.Message):
    __slots__ = ("order_id",)
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    def __init__(self, order_id: _Optional[str] = ...) -> None: ...

class CancelOrderResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
