import setRateLimit from "express-rate-limit";

const rateLimitMiddleware = setRateLimit({
  windowMs: 60 * 1000,
  max: 12,
  message: "You have exceeded your 12 requests per minute limit.",
  headers: true,
});

export default rateLimitMiddleware;
