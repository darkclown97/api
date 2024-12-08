from common import messages_pb2 as _messages_pb2
from services.ecommerce.v1 import products_pb2 as _products_pb2
from services.ecommerce.v1 import orders_pb2 as _orders_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListProductsRequest(_message.Message):
    __slots__ = ("page_options", "sort_by", "search_term", "tags")
    class SortBy(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        NAME: _ClassVar[ListProductsRequest.SortBy]
        PRICE: _ClassVar[ListProductsRequest.SortBy]
        POPULARITY: _ClassVar[ListProductsRequest.SortBy]
        RATING: _ClassVar[ListProductsRequest.SortBy]
    NAME: ListProductsRequest.SortBy
    PRICE: ListProductsRequest.SortBy
    POPULARITY: ListProductsRequest.SortBy
    RATING: ListProductsRequest.SortBy
    PAGE_OPTIONS_FIELD_NUMBER: _ClassVar[int]
    SORT_BY_FIELD_NUMBER: _ClassVar[int]
    SEARCH_TERM_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    page_options: _messages_pb2.PageOptions
    sort_by: ListProductsRequest.SortBy
    search_term: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, page_options: _Optional[_Union[_messages_pb2.PageOptions, _Mapping]] = ..., sort_by: _Optional[_Union[ListProductsRequest.SortBy, str]] = ..., search_term: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

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

class CreateProductRequest(_message.Message):
    __slots__ = ("product",)
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    product: _products_pb2.Product
    def __init__(self, product: _Optional[_Union[_products_pb2.Product, _Mapping]] = ...) -> None: ...

class CreateProductResponse(_message.Message):
    __slots__ = ("product",)
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    product: _products_pb2.Product
    def __init__(self, product: _Optional[_Union[_products_pb2.Product, _Mapping]] = ...) -> None: ...

class UpdateProductRequest(_message.Message):
    __slots__ = ("product",)
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    product: _products_pb2.Product
    def __init__(self, product: _Optional[_Union[_products_pb2.Product, _Mapping]] = ...) -> None: ...

class UpdateProductResponse(_message.Message):
    __slots__ = ("product",)
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    product: _products_pb2.Product
    def __init__(self, product: _Optional[_Union[_products_pb2.Product, _Mapping]] = ...) -> None: ...

class DeleteProductRequest(_message.Message):
    __slots__ = ("product_id",)
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    def __init__(self, product_id: _Optional[str] = ...) -> None: ...

class DeleteProductResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

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
