from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SortOrder(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SORT_ORDER_ASC: _ClassVar[SortOrder]
    SORT_ORDER_DESC: _ClassVar[SortOrder]
SORT_ORDER_ASC: SortOrder
SORT_ORDER_DESC: SortOrder

class PageOptions(_message.Message):
    __slots__ = ("page", "limit", "sort_order")
    PAGE_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    SORT_ORDER_FIELD_NUMBER: _ClassVar[int]
    page: int
    limit: int
    sort_order: SortOrder
    def __init__(self, page: _Optional[int] = ..., limit: _Optional[int] = ..., sort_order: _Optional[_Union[SortOrder, str]] = ...) -> None: ...

class ListOptions(_message.Message):
    __slots__ = ("limit", "offset", "sort_order")
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    SORT_ORDER_FIELD_NUMBER: _ClassVar[int]
    limit: int
    offset: int
    sort_order: SortOrder
    def __init__(self, limit: _Optional[int] = ..., offset: _Optional[int] = ..., sort_order: _Optional[_Union[SortOrder, str]] = ...) -> None: ...

class Meta(_message.Message):
    __slots__ = ("id", "created_at", "updated_at", "deleted_at", "is_deleted")
    ID_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    IS_DELETED_FIELD_NUMBER: _ClassVar[int]
    id: str
    created_at: _timestamp_pb2.Timestamp
    updated_at: _timestamp_pb2.Timestamp
    deleted_at: _timestamp_pb2.Timestamp
    is_deleted: bool
    def __init__(self, id: _Optional[str] = ..., created_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., updated_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., deleted_at: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., is_deleted: bool = ...) -> None: ...
