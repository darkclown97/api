# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: services/ecommerce/v1/payments.proto
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
    'services/ecommerce/v1/payments.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from common import messages_pb2 as common_dot_messages__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n$services/ecommerce/v1/payments.proto\x12\x1eservices.ecommerce.v1.payments\x1a\x15\x63ommon/messages.proto\"\xb4\x01\n\x07Payment\x12#\n\x04meta\x18\x01 \x01(\x0b\x32\x15.common.messages.Meta\x12\x45\n\x0epayment_method\x18\x03 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentMethod\x12=\n\x06status\x18\x02 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentStatus\"\x81\x01\n\x16InitiatePaymentRequest\x12\x10\n\x08order_id\x18\x01 \x01(\t\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x01\x12\x45\n\x0epayment_method\x18\x03 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentMethod\"-\n\x17InitiatePaymentResponse\x12\x12\n\npayment_id\x18\x01 \x01(\t\"o\n\x1aUpdatePaymentStatusRequest\x12\x12\n\npayment_id\x18\x01 \x01(\t\x12=\n\x06status\x18\x02 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentStatus\"\x1d\n\x1bUpdatePaymentStatusResponse\"r\n\x15InitiateRefundRequest\x12\x10\n\x08order_id\x18\x01 \x01(\t\x12\x12\n\nproduct_id\x18\x02 \x01(\t\x12\x11\n\tseller_id\x18\x03 \x01(\t\x12\x10\n\x08quantity\x18\x04 \x01(\x05\x12\x0e\n\x06\x61mount\x18\x05 \x01(\x01\"\x18\n\x16InitiateRefundResponse\"\x97\x02\n\x0fPaymentInternal\x12#\n\x04meta\x18\x01 \x01(\x0b\x32\x15.common.messages.Meta\x12\x10\n\x08order_id\x18\x02 \x01(\t\x12\x12\n\nproduct_id\x18\x03 \x01(\t\x12\x11\n\tseller_id\x18\x04 \x01(\t\x12\x10\n\x08quantity\x18\x05 \x01(\x05\x12\x0e\n\x06\x61mount\x18\x06 \x01(\x01\x12\x45\n\x0epayment_method\x18\x07 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentMethod\x12=\n\x06status\x18\x08 \x01(\x0e\x32-.services.ecommerce.v1.payments.PaymentStatus*_\n\rPaymentMethod\x12\x07\n\x03UPI\x10\x00\x12\x0f\n\x0b\x43REDIT_CARD\x10\x01\x12\x0e\n\nDEBIT_CARD\x10\x02\x12\x0f\n\x0bNET_BANKING\x10\x03\x12\x13\n\x0fPAY_ON_DELIVERY\x10\x04*\xef\x01\n\rPaymentStatus\x12\x1c\n\x18PAYMENT_STATUS_INITIATED\x10\x00\x12\x1a\n\x16PAYMENT_STATUS_PENDING\x10\x01\x12\x1c\n\x18PAYMENT_STATUS_FULFILLED\x10\x02\x12\x19\n\x15PAYMENT_STATUS_FAILED\x10\x03\x12#\n\x1fPAYMENT_STATUS_REFUND_INITIATED\x10\x04\x12!\n\x1dPAYMENT_STATUS_REFUND_PENDING\x10\x05\x12#\n\x1fPAYMENT_STATUS_REFUND_FULFILLED\x10\x06\x32\xa7\x03\n\x0ePaymentService\x12\x82\x01\n\x0fInitiatePayment\x12\x36.services.ecommerce.v1.payments.InitiatePaymentRequest\x1a\x37.services.ecommerce.v1.payments.InitiatePaymentResponse\x12\x8e\x01\n\x13UpdatePaymentStatus\x12:.services.ecommerce.v1.payments.UpdatePaymentStatusRequest\x1a;.services.ecommerce.v1.payments.UpdatePaymentStatusResponse\x12\x7f\n\x0eInitiateRefund\x12\x35.services.ecommerce.v1.payments.InitiateRefundRequest\x1a\x36.services.ecommerce.v1.payments.InitiateRefundResponseB;Z9github.com/darkclown97/api/services/ecommerce/v1/paymentsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'services.ecommerce.v1.payments_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z9github.com/darkclown97/api/services/ecommerce/v1/payments'
  _globals['_PAYMENTMETHOD']._serialized_start=1025
  _globals['_PAYMENTMETHOD']._serialized_end=1120
  _globals['_PAYMENTSTATUS']._serialized_start=1123
  _globals['_PAYMENTSTATUS']._serialized_end=1362
  _globals['_PAYMENT']._serialized_start=96
  _globals['_PAYMENT']._serialized_end=276
  _globals['_INITIATEPAYMENTREQUEST']._serialized_start=279
  _globals['_INITIATEPAYMENTREQUEST']._serialized_end=408
  _globals['_INITIATEPAYMENTRESPONSE']._serialized_start=410
  _globals['_INITIATEPAYMENTRESPONSE']._serialized_end=455
  _globals['_UPDATEPAYMENTSTATUSREQUEST']._serialized_start=457
  _globals['_UPDATEPAYMENTSTATUSREQUEST']._serialized_end=568
  _globals['_UPDATEPAYMENTSTATUSRESPONSE']._serialized_start=570
  _globals['_UPDATEPAYMENTSTATUSRESPONSE']._serialized_end=599
  _globals['_INITIATEREFUNDREQUEST']._serialized_start=601
  _globals['_INITIATEREFUNDREQUEST']._serialized_end=715
  _globals['_INITIATEREFUNDRESPONSE']._serialized_start=717
  _globals['_INITIATEREFUNDRESPONSE']._serialized_end=741
  _globals['_PAYMENTINTERNAL']._serialized_start=744
  _globals['_PAYMENTINTERNAL']._serialized_end=1023
  _globals['_PAYMENTSERVICE']._serialized_start=1365
  _globals['_PAYMENTSERVICE']._serialized_end=1788
# @@protoc_insertion_point(module_scope)
