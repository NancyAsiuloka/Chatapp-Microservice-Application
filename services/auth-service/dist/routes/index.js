import { authRouter } from '@/routes/auth.routes';
export const registerRoutes = (app) => {
    // Health check endpoint for Docker/K8s
    app.get('/health', (_req, res) => {
        res.status(200).json({ status: 'ok', service: 'auth-service' });
    });
    app.use('/auth', authRouter);
};
//# sourceMappingURL=index.js.map