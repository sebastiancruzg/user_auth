
export const validationMiddleware = (schema) => (req, res, next) => {
  if (!['POST', 'PUT'].includes(req.method)) { return next() }
  const validation = schema.safeParse(req.body)
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors })
  }
  next()
}
