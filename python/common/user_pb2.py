# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: common/user.proto
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
    'common/user.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from common import messages_pb2 as common_dot_messages__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11\x63ommon/user.proto\x12\x0c\x63ommon.users\x1a\x15\x63ommon/messages.proto\"J\n\x06\x44\x63User\x12#\n\x04meta\x18\x01 \x01(\x0b\x32\x15.common.messages.Meta\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\r\n\x05\x65mail\x18\x03 \x01(\tB#Z!github.com/darkclown97/api/commonb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'common.user_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z!github.com/darkclown97/api/common'
  _globals['_DCUSER']._serialized_start=58
  _globals['_DCUSER']._serialized_end=132
# @@protoc_insertion_point(module_scope)
