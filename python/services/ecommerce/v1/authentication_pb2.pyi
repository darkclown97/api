from common import messages_pb2 as _messages_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class UserType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    UNKNOWN: _ClassVar[UserType]
    BUYER: _ClassVar[UserType]
    SELLER: _ClassVar[UserType]
UNKNOWN: UserType
BUYER: UserType
SELLER: UserType

class BuyerAddresses(_message.Message):
    __slots__ = ("dropoff_addresses",)
    DROPOFF_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    dropoff_addresses: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, dropoff_addresses: _Optional[_Iterable[str]] = ...) -> None: ...

class SellerAddresses(_message.Message):
    __slots__ = ("pickup_addresses",)
    PICKUP_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    pickup_addresses: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, pickup_addresses: _Optional[_Iterable[str]] = ...) -> None: ...

class LoginRequest(_message.Message):
    __slots__ = ("email", "phone", "password")
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: str
    phone: str
    password: str
    def __init__(self, email: _Optional[str] = ..., phone: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class AuthTokens(_message.Message):
    __slots__ = ("token", "refresh_token")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    REFRESH_TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: str
    refresh_token: str
    def __init__(self, token: _Optional[str] = ..., refresh_token: _Optional[str] = ...) -> None: ...

class LoginResponse(_message.Message):
    __slots__ = ("tokens", "error")
    TOKENS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    tokens: AuthTokens
    error: str
    def __init__(self, tokens: _Optional[_Union[AuthTokens, _Mapping]] = ..., error: _Optional[str] = ...) -> None: ...

class RefreshTokenRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class LogoutRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class LogoutResponse(_message.Message):
    __slots__ = ("success",)
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class RegisterRequest(_message.Message):
    __slots__ = ("name", "email", "password", "phone", "address", "seller_addresses", "buyer_addresses")
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SELLER_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    BUYER_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    name: str
    email: str
    password: str
    phone: str
    address: str
    seller_addresses: SellerAddresses
    buyer_addresses: BuyerAddresses
    def __init__(self, name: _Optional[str] = ..., email: _Optional[str] = ..., password: _Optional[str] = ..., phone: _Optional[str] = ..., address: _Optional[str] = ..., seller_addresses: _Optional[_Union[SellerAddresses, _Mapping]] = ..., buyer_addresses: _Optional[_Union[BuyerAddresses, _Mapping]] = ...) -> None: ...

class ForgotPasswordRequest(_message.Message):
    __slots__ = ("email",)
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    email: str
    def __init__(self, email: _Optional[str] = ...) -> None: ...

class ForgotPasswordResponse(_message.Message):
    __slots__ = ("success", "message")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    def __init__(self, success: bool = ..., message: _Optional[str] = ...) -> None: ...

class ResetPasswordRequest(_message.Message):
    __slots__ = ("reset_token", "new_password")
    RESET_TOKEN_FIELD_NUMBER: _ClassVar[int]
    NEW_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    reset_token: str
    new_password: str
    def __init__(self, reset_token: _Optional[str] = ..., new_password: _Optional[str] = ...) -> None: ...

class ResetPasswordResponse(_message.Message):
    __slots__ = ("success", "message")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    def __init__(self, success: bool = ..., message: _Optional[str] = ...) -> None: ...

class UpdateProfileRequest(_message.Message):
    __slots__ = ("name", "email", "phone", "address", "seller_addresses", "buyer_addresses")
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SELLER_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    BUYER_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    name: str
    email: str
    phone: str
    address: str
    seller_addresses: SellerAddresses
    buyer_addresses: BuyerAddresses
    def __init__(self, name: _Optional[str] = ..., email: _Optional[str] = ..., phone: _Optional[str] = ..., address: _Optional[str] = ..., seller_addresses: _Optional[_Union[SellerAddresses, _Mapping]] = ..., buyer_addresses: _Optional[_Union[BuyerAddresses, _Mapping]] = ...) -> None: ...

class UpdateProfileResponse(_message.Message):
    __slots__ = ("success", "message")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    def __init__(self, success: bool = ..., message: _Optional[str] = ...) -> None: ...

class BuyerInternal(_message.Message):
    __slots__ = ("meta", "name", "email", "password", "phone", "primary_address", "delivery_addresses")
    META_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    DELIVERY_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    name: str
    email: str
    password: str
    phone: str
    primary_address: str
    delivery_addresses: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., password: _Optional[str] = ..., phone: _Optional[str] = ..., primary_address: _Optional[str] = ..., delivery_addresses: _Optional[_Iterable[str]] = ...) -> None: ...

class SellerInternal(_message.Message):
    __slots__ = ("meta", "name", "email", "password", "phone", "primary_address", "pickup_addresses")
    META_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PICKUP_ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    name: str
    email: str
    password: str
    phone: str
    primary_address: str
    pickup_addresses: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., name: _Optional[str] = ..., email: _Optional[str] = ..., password: _Optional[str] = ..., phone: _Optional[str] = ..., primary_address: _Optional[str] = ..., pickup_addresses: _Optional[_Iterable[str]] = ...) -> None: ...
