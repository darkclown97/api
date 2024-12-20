# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: services/ecommerce/v1/authentication.proto
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
    'services/ecommerce/v1/authentication.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from common import messages_pb2 as common_dot_messages__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n*services/ecommerce/v1/authentication.proto\x12\rservices.auth\x1a\x15\x63ommon/messages.proto\"+\n\x0e\x42uyerAddresses\x12\x19\n\x11\x64ropoff_addresses\x18\x01 \x03(\t\"+\n\x0fSellerAddresses\x12\x18\n\x10pickup_addresses\x18\x01 \x03(\t\"V\n\x0cLoginRequest\x12\x0f\n\x05\x65mail\x18\x01 \x01(\tH\x00\x12\x0f\n\x05phone\x18\x02 \x01(\tH\x00\x12\x10\n\x08password\x18\x03 \x01(\tB\x12\n\x10login_credential\"2\n\nAuthTokens\x12\r\n\x05token\x18\x01 \x01(\t\x12\x15\n\rrefresh_token\x18\x02 \x01(\t\"W\n\rLoginResponse\x12+\n\x06tokens\x18\x01 \x01(\x0b\x32\x19.services.auth.AuthTokensH\x00\x12\x0f\n\x05\x65rror\x18\x02 \x01(\tH\x00\x42\x08\n\x06result\"\x15\n\x13RefreshTokenRequest\"\x0f\n\rLogoutRequest\"!\n\x0eLogoutResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\"\xe3\x01\n\x0fRegisterRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x12\x10\n\x08password\x18\x03 \x01(\t\x12\r\n\x05phone\x18\x04 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x05 \x01(\t\x12:\n\x10seller_addresses\x18\x06 \x01(\x0b\x32\x1e.services.auth.SellerAddressesH\x00\x12\x38\n\x0f\x62uyer_addresses\x18\x07 \x01(\x0b\x32\x1d.services.auth.BuyerAddressesH\x00\x42\x0b\n\taddresses\"&\n\x15\x46orgotPasswordRequest\x12\r\n\x05\x65mail\x18\x01 \x01(\t\":\n\x16\x46orgotPasswordResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12\x0f\n\x07message\x18\x02 \x01(\t\"A\n\x14ResetPasswordRequest\x12\x13\n\x0breset_token\x18\x01 \x01(\t\x12\x14\n\x0cnew_password\x18\x02 \x01(\t\"9\n\x15ResetPasswordResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12\x0f\n\x07message\x18\x02 \x01(\t\"\xd6\x01\n\x14UpdateProfileRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x12\r\n\x05phone\x18\x03 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x04 \x01(\t\x12:\n\x10seller_addresses\x18\x05 \x01(\x0b\x32\x1e.services.auth.SellerAddressesH\x00\x12\x38\n\x0f\x62uyer_addresses\x18\x06 \x01(\x0b\x32\x1d.services.auth.BuyerAddressesH\x00\x42\x0b\n\taddresses\"9\n\x15UpdateProfileResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12\x0f\n\x07message\x18\x02 \x01(\t\"\xa7\x01\n\rBuyerInternal\x12#\n\x04meta\x18\x01 \x01(\x0b\x32\x15.common.messages.Meta\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\r\n\x05\x65mail\x18\x03 \x01(\t\x12\x10\n\x08password\x18\x04 \x01(\t\x12\r\n\x05phone\x18\x05 \x01(\t\x12\x17\n\x0fprimary_address\x18\x06 \x01(\t\x12\x1a\n\x12\x64\x65livery_addresses\x18\x07 \x03(\t\"\xa6\x01\n\x0eSellerInternal\x12#\n\x04meta\x18\x01 \x01(\x0b\x32\x15.common.messages.Meta\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\r\n\x05\x65mail\x18\x03 \x01(\t\x12\x10\n\x08password\x18\x04 \x01(\t\x12\r\n\x05phone\x18\x05 \x01(\t\x12\x17\n\x0fprimary_address\x18\x06 \x01(\t\x12\x18\n\x10pickup_addresses\x18\x07 \x03(\t*.\n\x08UserType\x12\x0b\n\x07UNKNOWN\x10\x00\x12\t\n\x05\x42UYER\x10\x01\x12\n\n\x06SELLER\x10\x02\x32\xcb\x04\n\x0b\x41uthService\x12H\n\x08Register\x12\x1e.services.auth.RegisterRequest\x1a\x1c.services.auth.LoginResponse\x12\x42\n\x05Login\x12\x1b.services.auth.LoginRequest\x1a\x1c.services.auth.LoginResponse\x12P\n\x0cRefreshToken\x12\".services.auth.RefreshTokenRequest\x1a\x1c.services.auth.LoginResponse\x12\x45\n\x06Logout\x12\x1c.services.auth.LogoutRequest\x1a\x1d.services.auth.LogoutResponse\x12]\n\x0e\x46orgotPassword\x12$.services.auth.ForgotPasswordRequest\x1a%.services.auth.ForgotPasswordResponse\x12Z\n\rResetPassword\x12#.services.auth.ResetPasswordRequest\x1a$.services.auth.ResetPasswordResponse\x12Z\n\rUpdateProfile\x12#.services.auth.UpdateProfileRequest\x1a$.services.auth.UpdateProfileResponseBAZ?github.com/darkclown97/api/services/ecommerce/v1/authenticationb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'services.ecommerce.v1.authentication_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z?github.com/darkclown97/api/services/ecommerce/v1/authentication'
  _globals['_USERTYPE']._serialized_start=1549
  _globals['_USERTYPE']._serialized_end=1595
  _globals['_BUYERADDRESSES']._serialized_start=84
  _globals['_BUYERADDRESSES']._serialized_end=127
  _globals['_SELLERADDRESSES']._serialized_start=129
  _globals['_SELLERADDRESSES']._serialized_end=172
  _globals['_LOGINREQUEST']._serialized_start=174
  _globals['_LOGINREQUEST']._serialized_end=260
  _globals['_AUTHTOKENS']._serialized_start=262
  _globals['_AUTHTOKENS']._serialized_end=312
  _globals['_LOGINRESPONSE']._serialized_start=314
  _globals['_LOGINRESPONSE']._serialized_end=401
  _globals['_REFRESHTOKENREQUEST']._serialized_start=403
  _globals['_REFRESHTOKENREQUEST']._serialized_end=424
  _globals['_LOGOUTREQUEST']._serialized_start=426
  _globals['_LOGOUTREQUEST']._serialized_end=441
  _globals['_LOGOUTRESPONSE']._serialized_start=443
  _globals['_LOGOUTRESPONSE']._serialized_end=476
  _globals['_REGISTERREQUEST']._serialized_start=479
  _globals['_REGISTERREQUEST']._serialized_end=706
  _globals['_FORGOTPASSWORDREQUEST']._serialized_start=708
  _globals['_FORGOTPASSWORDREQUEST']._serialized_end=746
  _globals['_FORGOTPASSWORDRESPONSE']._serialized_start=748
  _globals['_FORGOTPASSWORDRESPONSE']._serialized_end=806
  _globals['_RESETPASSWORDREQUEST']._serialized_start=808
  _globals['_RESETPASSWORDREQUEST']._serialized_end=873
  _globals['_RESETPASSWORDRESPONSE']._serialized_start=875
  _globals['_RESETPASSWORDRESPONSE']._serialized_end=932
  _globals['_UPDATEPROFILEREQUEST']._serialized_start=935
  _globals['_UPDATEPROFILEREQUEST']._serialized_end=1149
  _globals['_UPDATEPROFILERESPONSE']._serialized_start=1151
  _globals['_UPDATEPROFILERESPONSE']._serialized_end=1208
  _globals['_BUYERINTERNAL']._serialized_start=1211
  _globals['_BUYERINTERNAL']._serialized_end=1378
  _globals['_SELLERINTERNAL']._serialized_start=1381
  _globals['_SELLERINTERNAL']._serialized_end=1547
  _globals['_AUTHSERVICE']._serialized_start=1598
  _globals['_AUTHSERVICE']._serialized_end=2185
# @@protoc_insertion_point(module_scope)
