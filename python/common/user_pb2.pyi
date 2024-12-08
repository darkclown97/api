from common import messages_pb2 as _messages_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DcUser(_message.Message):
    __slots__ = ("meta", "name", "email")
    META_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    name: str
    email: str
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., name: _Optional[str] = ..., email: _Optional[str] = ...) -> None: ...
