from common import messages_pb2 as _messages_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductSortBy(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PRODUCT_SORTBY_NAME: _ClassVar[ProductSortBy]
    PRODUCT_SORTBY_PRICE: _ClassVar[ProductSortBy]
    PRODUCT_SORTBY_POPULARITY: _ClassVar[ProductSortBy]
    PRODUCT_SORTBY_RATING: _ClassVar[ProductSortBy]
PRODUCT_SORTBY_NAME: ProductSortBy
PRODUCT_SORTBY_PRICE: ProductSortBy
PRODUCT_SORTBY_POPULARITY: ProductSortBy
PRODUCT_SORTBY_RATING: ProductSortBy

class ListProductsRequest(_message.Message):
    __slots__ = ("page_options", "sort_by", "search_term", "categories")
    PAGE_OPTIONS_FIELD_NUMBER: _ClassVar[int]
    SORT_BY_FIELD_NUMBER: _ClassVar[int]
    SEARCH_TERM_FIELD_NUMBER: _ClassVar[int]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    page_options: _messages_pb2.PageOptions
    sort_by: ProductSortBy
    search_term: str
    categories: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, page_options: _Optional[_Union[_messages_pb2.PageOptions, _Mapping]] = ..., sort_by: _Optional[_Union[ProductSortBy, str]] = ..., search_term: _Optional[str] = ..., categories: _Optional[_Iterable[str]] = ...) -> None: ...

class ListProductsResponse(_message.Message):
    __slots__ = ("products", "total")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[Product]
    total: int
    def __init__(self, products: _Optional[_Iterable[_Union[Product, _Mapping]]] = ..., total: _Optional[int] = ...) -> None: ...

class GetProductRequest(_message.Message):
    __slots__ = ("product_id",)
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    def __init__(self, product_id: _Optional[str] = ...) -> None: ...

class GetProductResponse(_message.Message):
    __slots__ = ("detail",)
    DETAIL_FIELD_NUMBER: _ClassVar[int]
    detail: Product
    def __init__(self, detail: _Optional[_Union[Product, _Mapping]] = ...) -> None: ...

class Product(_message.Message):
    __slots__ = ("id", "name", "description", "brief", "price", "in_stock", "image_url", "seller", "star_rating", "rating_count")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    BRIEF_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    IN_STOCK_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URL_FIELD_NUMBER: _ClassVar[int]
    SELLER_FIELD_NUMBER: _ClassVar[int]
    STAR_RATING_FIELD_NUMBER: _ClassVar[int]
    RATING_COUNT_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    description: str
    brief: str
    price: float
    in_stock: bool
    image_url: _containers.RepeatedScalarFieldContainer[str]
    seller: Seller
    star_rating: float
    rating_count: int
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., brief: _Optional[str] = ..., price: _Optional[float] = ..., in_stock: bool = ..., image_url: _Optional[_Iterable[str]] = ..., seller: _Optional[_Union[Seller, _Mapping]] = ..., star_rating: _Optional[float] = ..., rating_count: _Optional[int] = ...) -> None: ...

class Seller(_message.Message):
    __slots__ = ("seller_id", "name")
    SELLER_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    seller_id: str
    name: str
    def __init__(self, seller_id: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class CreateProductRequest(_message.Message):
    __slots__ = ("product",)
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    product: Product
    def __init__(self, product: _Optional[_Union[Product, _Mapping]] = ...) -> None: ...

class DeleteProductRequest(_message.Message):
    __slots__ = ("product_id",)
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    def __init__(self, product_id: _Optional[str] = ...) -> None: ...

class DeleteProductResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ProductInternal(_message.Message):
    __slots__ = ("meta", "name", "description", "seller", "brief", "price", "in_stock", "image_url", "star_rating", "rating_count")
    META_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SELLER_FIELD_NUMBER: _ClassVar[int]
    BRIEF_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    IN_STOCK_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URL_FIELD_NUMBER: _ClassVar[int]
    STAR_RATING_FIELD_NUMBER: _ClassVar[int]
    RATING_COUNT_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    name: str
    description: str
    seller: Seller
    brief: str
    price: float
    in_stock: bool
    image_url: _containers.RepeatedScalarFieldContainer[str]
    star_rating: float
    rating_count: int
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., seller: _Optional[_Union[Seller, _Mapping]] = ..., brief: _Optional[str] = ..., price: _Optional[float] = ..., in_stock: bool = ..., image_url: _Optional[_Iterable[str]] = ..., star_rating: _Optional[float] = ..., rating_count: _Optional[int] = ...) -> None: ...
