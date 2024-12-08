# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from services.ecommerce.v1 import payments_pb2 as services_dot_ecommerce_dot_v1_dot_payments__pb2

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
        + f' but the generated code in services/ecommerce/v1/payments_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
    )


class PaymentServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.InitiatePayment = channel.unary_unary(
                '/services.ecommerce.v1.payments.PaymentService/InitiatePayment',
                request_serializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiatePaymentRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiatePaymentResponse.FromString,
                _registered_method=True)
        self.UpdatePaymentStatus = channel.unary_unary(
                '/services.ecommerce.v1.payments.PaymentService/UpdatePaymentStatus',
                request_serializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.UpdatePaymentStatusRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.UpdatePaymentStatusResponse.FromString,
                _registered_method=True)
        self.InitiateRefund = channel.unary_unary(
                '/services.ecommerce.v1.payments.PaymentService/InitiateRefund',
                request_serializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiateRefundRequest.SerializeToString,
                response_deserializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiateRefundResponse.FromString,
                _registered_method=True)


class PaymentServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def InitiatePayment(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdatePaymentStatus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def InitiateRefund(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PaymentServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'InitiatePayment': grpc.unary_unary_rpc_method_handler(
                    servicer.InitiatePayment,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiatePaymentRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiatePaymentResponse.SerializeToString,
            ),
            'UpdatePaymentStatus': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdatePaymentStatus,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.UpdatePaymentStatusRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.UpdatePaymentStatusResponse.SerializeToString,
            ),
            'InitiateRefund': grpc.unary_unary_rpc_method_handler(
                    servicer.InitiateRefund,
                    request_deserializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiateRefundRequest.FromString,
                    response_serializer=services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiateRefundResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'services.ecommerce.v1.payments.PaymentService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('services.ecommerce.v1.payments.PaymentService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class PaymentService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def InitiatePayment(request,
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
            '/services.ecommerce.v1.payments.PaymentService/InitiatePayment',
            services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiatePaymentRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiatePaymentResponse.FromString,
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
    def UpdatePaymentStatus(request,
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
            '/services.ecommerce.v1.payments.PaymentService/UpdatePaymentStatus',
            services_dot_ecommerce_dot_v1_dot_payments__pb2.UpdatePaymentStatusRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_payments__pb2.UpdatePaymentStatusResponse.FromString,
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
    def InitiateRefund(request,
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
            '/services.ecommerce.v1.payments.PaymentService/InitiateRefund',
            services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiateRefundRequest.SerializeToString,
            services_dot_ecommerce_dot_v1_dot_payments__pb2.InitiateRefundResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)