import { ReasonPhrases, StatusCodes } from "http-status-codes"

export const HttpResponseConfig = {
    200: {
        messagCode: StatusCodes.OK,
        messageText: ReasonPhrases.OK
    },
    201: {
        messagCode: StatusCodes.CREATED,
        messageText: ReasonPhrases.CREATED
    },
    202: {
        messagCode: StatusCodes.ACCEPTED,
        messageText: ReasonPhrases.ACCEPTED
    },
    203: {
        messagCode: StatusCodes.NON_AUTHORITATIVE_INFORMATION,
        messageText: ReasonPhrases.NON_AUTHORITATIVE_INFORMATION
    },
    204: {
        messagCode: StatusCodes.NO_CONTENT,
        messageText: ReasonPhrases.NO_CONTENT
    },
    205: {
        messagCode: StatusCodes.RESET_CONTENT,
        messageText: ReasonPhrases.RESET_CONTENT
    },
    206: {
        messagCode: StatusCodes.PARTIAL_CONTENT,
        messageText: ReasonPhrases.PARTIAL_CONTENT
    },
    207: {
        messagCode: StatusCodes.MULTI_STATUS,
        messageText: ReasonPhrases.MULTI_STATUS
    },
    300: {
        messagCode: StatusCodes.MULTIPLE_CHOICES,
        messageText: ReasonPhrases.MULTIPLE_CHOICES
    },
    301: {
        messagCode: StatusCodes.MOVED_PERMANENTLY,
        messageText: ReasonPhrases.MOVED_PERMANENTLY
    },
    302: {
        messagCode: StatusCodes.MOVED_TEMPORARILY,
        messageText: ReasonPhrases.MOVED_TEMPORARILY
    },
    303: {
        messagCode: StatusCodes.SEE_OTHER,
        messageText: ReasonPhrases.SEE_OTHER
    },
    304: {
        messagCode: StatusCodes.NOT_MODIFIED,
        messageText: ReasonPhrases.NOT_MODIFIED
    },
    400: {
        messagCode: StatusCodes.BAD_REQUEST,
        messageText: ReasonPhrases.BAD_REQUEST
    },
    401: {
        messagCode: StatusCodes.UNAUTHORIZED,
        messageText: ReasonPhrases.UNAUTHORIZED
    },
    403: {
        messagCode: StatusCodes.FORBIDDEN,
        messageText: ReasonPhrases.FORBIDDEN
    },
    404: {
        messagCode: StatusCodes.NOT_FOUND,
        messageText: ReasonPhrases.NOT_FOUND
    },
    408: {
        messagCode: StatusCodes.REQUEST_TIMEOUT,
        messageText: ReasonPhrases.REQUEST_TIMEOUT
    },
    409: {
        messagCode: StatusCodes.CONFLICT,
        messageText: ReasonPhrases.CONFLICT
    },
    502: {
        messagCode: StatusCodes.BAD_GATEWAY,
        messageText: ReasonPhrases.BAD_GATEWAY
    },
    503: {
        messagCode: StatusCodes.SERVICE_UNAVAILABLE,
        messageText: ReasonPhrases.SERVICE_UNAVAILABLE
    },
    504: {
        messagCode: StatusCodes.GATEWAY_TIMEOUT,
        messageText: ReasonPhrases.GATEWAY_TIMEOUT
    },
}