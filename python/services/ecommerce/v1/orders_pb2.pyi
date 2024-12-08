from common import messages_pb2 as _messages_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from services.ecommerce.v1 import payments_pb2 as _payments_pb2
from services.ecommerce.v1 import products_pb2 as _products_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ORDER_STATUS_CREATED: _ClassVar[OrderStatus]
    ORDER_STATUS_CANCELED: _ClassVar[OrderStatus]
    ORDER_STATUS_CONFIRMED: _ClassVar[OrderStatus]
    ORDER_STATUS_PACKED: _ClassVar[OrderStatus]
    ORDER_STATUS_SHIPPED: _ClassVar[OrderStatus]
    ORDER_STATUS_DELIVERED: _ClassVar[OrderStatus]
    ORDER_STATUS_COMPLETED: _ClassVar[OrderStatus]
ORDER_STATUS_CREATED: OrderStatus
ORDER_STATUS_CANCELED: OrderStatus
ORDER_STATUS_CONFIRMED: OrderStatus
ORDER_STATUS_PACKED: OrderStatus
ORDER_STATUS_SHIPPED: OrderStatus
ORDER_STATUS_DELIVERED: OrderStatus
ORDER_STATUS_COMPLETED: OrderStatus

class OrderItem(_message.Message):
    __slots__ = ("product_id", "name", "quantity", "price", "seller")
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    SELLER_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    name: str
    quantity: int
    price: float
    seller: _products_pb2.Seller
    def __init__(self, product_id: _Optional[str] = ..., name: _Optional[str] = ..., quantity: _Optional[int] = ..., price: _Optional[float] = ..., seller: _Optional[_Union[_products_pb2.Seller, _Mapping]] = ...) -> None: ...

class CreateOrderRequest(_message.Message):
    __slots__ = ("cart_id", "item", "shipping_address", "billing_address", "same_as_shipping_address", "payment_method")
    CART_ID_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BILLING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SAME_AS_SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    cart_id: str
    item: OrderItem
    shipping_address: str
    billing_address: str
    same_as_shipping_address: bool
    payment_method: _payments_pb2.PaymentMethod
    def __init__(self, cart_id: _Optional[str] = ..., item: _Optional[_Union[OrderItem, _Mapping]] = ..., shipping_address: _Optional[str] = ..., billing_address: _Optional[str] = ..., same_as_shipping_address: bool = ..., payment_method: _Optional[_Union[_payments_pb2.PaymentMethod, str]] = ...) -> None: ...

class CreateOrderResponse(_message.Message):
    __slots__ = ("order_id", "status", "payment_status")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_STATUS_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    status: OrderStatus
    payment_status: _payments_pb2.PaymentStatus
    def __init__(self, order_id: _Optional[str] = ..., status: _Optional[_Union[OrderStatus, str]] = ..., payment_status: _Optional[_Union[_payments_pb2.PaymentStatus, str]] = ...) -> None: ...

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
    orders: _containers.RepeatedCompositeFieldContainer[Order]
    total_orders: int
    def __init__(self, orders: _Optional[_Iterable[_Union[Order, _Mapping]]] = ..., total_orders: _Optional[int] = ...) -> None: ...

class Order(_message.Message):
    __slots__ = ("order_id", "items", "shipping_address", "billing_address", "same_as_shipping_address", "status", "total_price", "payment_method", "payment_status", "created_at", "delivered_at")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BILLING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SAME_AS_SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_PRICE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELIVERED_AT_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    items: _containers.RepeatedCompositeFieldContainer[OrderItem]
    shipping_address: str
    billing_address: str
    same_as_shipping_address: bool
    status: OrderStatus
    total_price: int
    payment_method: _payments_pb2.PaymentMethod
    payment_status: _payments_pb2.PaymentStatus
    created_at: _timestamp_pb2.Timestamp
    delivered_at: _timestamp_pb2.Timestamp
    def __init__(self, order_id: _Optional[str] = ..., items: _Optional[_Iterable[_Union[OrderItem, _Mapping]]] = ..., shipping_address: _Optional[str] = ..., billing_address: _Optional[str] = ..., same_as_shipping_address: bool = ..., status: _Optional[_Union[OrderStatus, str]] = ..., total_price: _Optional[int] = ..., payment_method: _Optional[_Union[_payments_pb2.PaymentMethod, str]] = ..., payment_status: _Optional[_Union[_payments_pb2.PaymentStatus, str]] = ..., created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., delivered_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class GetOrdersRequest(_message.Message):
    __slots__ = ("order_id",)
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    def __init__(self, order_id: _Optional[str] = ...) -> None: ...

class GetOrdersResponse(_message.Message):
    __slots__ = ("detail",)
    DETAIL_FIELD_NUMBER: _ClassVar[int]
    detail: Order
    def __init__(self, detail: _Optional[_Union[Order, _Mapping]] = ...) -> None: ...

class UpdateOrderPaymentRequest(_message.Message):
    __slots__ = ("order_id", "payment_id", "payment_status")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_STATUS_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    payment_id: str
    payment_status: _payments_pb2.PaymentStatus
    def __init__(self, order_id: _Optional[str] = ..., payment_id: _Optional[str] = ..., payment_status: _Optional[_Union[_payments_pb2.PaymentStatus, str]] = ...) -> None: ...

class UpdateOrderPaymentResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CancelOrderRequest(_message.Message):
    __slots__ = ("order_id",)
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    def __init__(self, order_id: _Optional[str] = ...) -> None: ...

class CancelOrderResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class OrderInternal(_message.Message):
    __slots__ = ("meta", "buyer_id", "items", "shipping_address", "billing_address", "same_as_shipping_address", "total_price", "order_status", "payment", "delivered_at")
    META_FIELD_NUMBER: _ClassVar[int]
    BUYER_ID_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BILLING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SAME_AS_SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_PRICE_FIELD_NUMBER: _ClassVar[int]
    ORDER_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_FIELD_NUMBER: _ClassVar[int]
    DELIVERED_AT_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    buyer_id: str
    items: _containers.RepeatedCompositeFieldContainer[OrderItem]
    shipping_address: str
    billing_address: str
    same_as_shipping_address: bool
    total_price: int
    order_status: OrderStatus
    payment: _containers.RepeatedCompositeFieldContainer[_payments_pb2.Payment]
    delivered_at: _timestamp_pb2.Timestamp
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., buyer_id: _Optional[str] = ..., items: _Optional[_Iterable[_Union[OrderItem, _Mapping]]] = ..., shipping_address: _Optional[str] = ..., billing_address: _Optional[str] = ..., same_as_shipping_address: bool = ..., total_price: _Optional[int] = ..., order_status: _Optional[_Union[OrderStatus, str]] = ..., payment: _Optional[_Iterable[_Union[_payments_pb2.Payment, _Mapping]]] = ..., delivered_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...
