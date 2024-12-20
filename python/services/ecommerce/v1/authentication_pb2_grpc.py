# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from services.ecommerce.v1 import authentication_pb2 as services_dot_ecommerce_dot_v1_dot_authentication__pb2

GRPC_GENERATED_VERSION = '1.68.1'
GRPC_VERSION = grpc.__version__
_version_not_supported = False

try:
    from grpc._utilities import first_version_is_lower
    _version_not_supported = first_version_is_lower(GRPC_VERSION, GRPC_GENERATED_VERSION)
except ImportError:
    _version_not_supported = True

if _version_not_supported:
    raise RuntimeError(
        f'The grpc package installed is at version {GRPC_VERSION},'
        + f' but the generated code in services/ecommerce/v1/authentication_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
    )


class AuthServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Register = channel.unary_unary(
                '/services.auth.AuthService/Register',
                request_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.RegisterRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.FromString,
                _registered_method=True)
        self.Login = channel.unary_unary(
                '/services.auth.AuthService/Login',
                request_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.FromString,
                _registered_method=True)
        self.RefreshToken = channel.unary_unary(
                '/services.auth.AuthService/RefreshToken',
                request_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.RefreshTokenRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.FromString,
                _registered_method=True)
        self.Logout = channel.unary_unary(
                '/services.auth.AuthService/Logout',
                request_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LogoutRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LogoutResponse.FromString,
                _registered_method=True)
        self.ForgotPassword = channel.unary_unary(
                '/services.auth.AuthService/ForgotPassword',
                request_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ForgotPasswordRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ForgotPasswordResponse.FromString,
                _registered_method=True)
        self.ResetPassword = channel.unary_unary(
                '/services.auth.AuthService/ResetPassword',
                request_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ResetPasswordRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ResetPasswordResponse.FromString,
                _registered_method=True)
        self.UpdateProfile = channel.unary_unary(
                '/services.auth.AuthService/UpdateProfile',
                request_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.UpdateProfileRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.UpdateProfileResponse.FromString,
                _registered_method=True)


class AuthServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Register(self, request, context):
        """Register - creates a new user account and returns a JWT token
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Login(self, request, context):
        """Login - returns a JWT token for the provided credentials
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RefreshToken(self, request, context):
        """RefreshToken - returns a new JWT token using a valid refresh token
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Logout(self, request, context):
        """Logout - optional method to invalidate a refresh token (revocation/blacklist)
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ForgotPassword(self, request, context):
        """Forgot Password - sends a reset link or token to the user
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ResetPassword(self, request, context):
        """Reset Password - updates the user's password using a valid token
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateProfile(self, request, context):
        """UpdateProfile - updates user profile information
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AuthServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Register': grpc.unary_unary_rpc_method_handler(
                    servicer.Register,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.RegisterRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.SerializeToString,
            ),
            'Login': grpc.unary_unary_rpc_method_handler(
                    servicer.Login,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.SerializeToString,
            ),
            'RefreshToken': grpc.unary_unary_rpc_method_handler(
                    servicer.RefreshToken,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.RefreshTokenRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.SerializeToString,
            ),
            'Logout': grpc.unary_unary_rpc_method_handler(
                    servicer.Logout,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LogoutRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.LogoutResponse.SerializeToString,
            ),
            'ForgotPassword': grpc.unary_unary_rpc_method_handler(
                    servicer.ForgotPassword,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ForgotPasswordRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ForgotPasswordResponse.SerializeToString,
            ),
            'ResetPassword': grpc.unary_unary_rpc_method_handler(
                    servicer.ResetPassword,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ResetPasswordRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.ResetPasswordResponse.SerializeToString,
            ),
            'UpdateProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateProfile,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.UpdateProfileRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_authentication__pb2.UpdateProfileResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'services.auth.AuthService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('services.auth.AuthService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class AuthService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Register(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.auth.AuthService/Register',
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.RegisterRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def Login(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.auth.AuthService/Login',
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def RefreshToken(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.auth.AuthService/RefreshToken',
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.RefreshTokenRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.LoginResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def Logout(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.auth.AuthService/Logout',
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.LogoutRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.LogoutResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ForgotPassword(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.auth.AuthService/ForgotPassword',
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.ForgotPasswordRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.ForgotPasswordResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ResetPassword(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.auth.AuthService/ResetPassword',
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.ResetPasswordRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.ResetPasswordResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def UpdateProfile(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/services.auth.AuthService/UpdateProfile',
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.UpdateProfileRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_authentication__pb2.UpdateProfileResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
