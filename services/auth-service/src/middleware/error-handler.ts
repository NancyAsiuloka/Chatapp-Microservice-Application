import { HttpError} from "@chatapp/common";
import type { ErrorRequestHandler} from "express";
import { logger } from "@/utils/logger";

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    logger.error({ err }, "Unhandled error occured");
    const error = err instanceof HttpError ? err : undefined;

    
}