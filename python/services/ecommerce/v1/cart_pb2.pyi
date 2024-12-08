from common import messages_pb2 as _messages_pb2
from services.ecommerce.v1 import products_pb2 as _products_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

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

class CartItem(_message.Message):
    __slots__ = ("products", "quantity")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    products: _products_pb2.Product
    quantity: int
    def __init__(self, products: _Optional[_Union[_products_pb2.Product, _Mapping]] = ..., quantity: _Optional[int] = ...) -> None: ...

class ViewCartResponse(_message.Message):
    __slots__ = ("products", "total_cart_products")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_CART_PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[CartItem]
    total_cart_products: int
    def __init__(self, products: _Optional[_Iterable[_Union[CartItem, _Mapping]]] = ..., total_cart_products: _Optional[int] = ...) -> None: ...

class CartInternal(_message.Message):
    __slots__ = ("meta", "buyer_id", "products", "total_price")
    META_FIELD_NUMBER: _ClassVar[int]
    BUYER_ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_PRICE_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    buyer_id: str
    products: _containers.RepeatedCompositeFieldContainer[CartItem]
    total_price: int
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., buyer_id: _Optional[str] = ..., products: _Optional[_Iterable[_Union[CartItem, _Mapping]]] = ..., total_price: _Optional[int] = ...) -> None: ...
