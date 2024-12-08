from common import messages_pb2 as _messages_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PaymentMethod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    UPI: _ClassVar[PaymentMethod]
    CREDIT_CARD: _ClassVar[PaymentMethod]
    DEBIT_CARD: _ClassVar[PaymentMethod]
    NET_BANKING: _ClassVar[PaymentMethod]
    PAY_ON_DELIVERY: _ClassVar[PaymentMethod]

class PaymentStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PAYMENT_STATUS_INITIATED: _ClassVar[PaymentStatus]
    PAYMENT_STATUS_PENDING: _ClassVar[PaymentStatus]
    PAYMENT_STATUS_FULFILLED: _ClassVar[PaymentStatus]
    PAYMENT_STATUS_FAILED: _ClassVar[PaymentStatus]
    PAYMENT_STATUS_REFUND_INITIATED: _ClassVar[PaymentStatus]
    PAYMENT_STATUS_REFUND_PENDING: _ClassVar[PaymentStatus]
    PAYMENT_STATUS_REFUND_FULFILLED: _ClassVar[PaymentStatus]
UPI: PaymentMethod
CREDIT_CARD: PaymentMethod
DEBIT_CARD: PaymentMethod
NET_BANKING: PaymentMethod
PAY_ON_DELIVERY: PaymentMethod
PAYMENT_STATUS_INITIATED: PaymentStatus
PAYMENT_STATUS_PENDING: PaymentStatus
PAYMENT_STATUS_FULFILLED: PaymentStatus
PAYMENT_STATUS_FAILED: PaymentStatus
PAYMENT_STATUS_REFUND_INITIATED: PaymentStatus
PAYMENT_STATUS_REFUND_PENDING: PaymentStatus
PAYMENT_STATUS_REFUND_FULFILLED: PaymentStatus

class Payment(_message.Message):
    __slots__ = ("meta", "payment_method", "status")
    META_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    payment_method: PaymentMethod
    status: PaymentStatus
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., payment_method: _Optional[_Union[PaymentMethod, str]] = ..., status: _Optional[_Union[PaymentStatus, str]] = ...) -> None: ...

class InitiatePaymentRequest(_message.Message):
    __slots__ = ("order_id", "amount", "payment_method")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    amount: float
    payment_method: PaymentMethod
    def __init__(self, order_id: _Optional[str] = ..., amount: _Optional[float] = ..., payment_method: _Optional[_Union[PaymentMethod, str]] = ...) -> None: ...

class InitiatePaymentResponse(_message.Message):
    __slots__ = ("payment_id",)
    PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    payment_id: str
    def __init__(self, payment_id: _Optional[str] = ...) -> None: ...

class UpdatePaymentStatusRequest(_message.Message):
    __slots__ = ("payment_id", "status")
    PAYMENT_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    payment_id: str
    status: PaymentStatus
    def __init__(self, payment_id: _Optional[str] = ..., status: _Optional[_Union[PaymentStatus, str]] = ...) -> None: ...

class UpdatePaymentStatusResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class InitiateRefundRequest(_message.Message):
    __slots__ = ("order_id", "product_id", "seller_id", "quantity", "amount")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    SELLER_ID_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    product_id: str
    seller_id: str
    quantity: int
    amount: float
    def __init__(self, order_id: _Optional[str] = ..., product_id: _Optional[str] = ..., seller_id: _Optional[str] = ..., quantity: _Optional[int] = ..., amount: _Optional[float] = ...) -> None: ...

class InitiateRefundResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PaymentInternal(_message.Message):
    __slots__ = ("meta", "order_id", "product_id", "seller_id", "quantity", "amount", "payment_method", "status")
    META_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    SELLER_ID_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    meta: _messages_pb2.Meta
    order_id: str
    product_id: str
    seller_id: str
    quantity: int
    amount: float
    payment_method: PaymentMethod
    status: PaymentStatus
    def __init__(self, meta: _Optional[_Union[_messages_pb2.Meta, _Mapping]] = ..., order_id: _Optional[str] = ..., product_id: _Optional[str] = ..., seller_id: _Optional[str] = ..., quantity: _Optional[int] = ..., amount: _Optional[float] = ..., payment_method: _Optional[_Union[PaymentMethod, str]] = ..., status: _Optional[_Union[PaymentStatus, str]] = ...) -> None: ...
