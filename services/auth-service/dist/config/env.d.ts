import 'dotenv/config';
import { z } from '@chatapp/common';
declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    AUTH_SERVICE_PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    AUTH_DB_URL: z.ZodString;
    JWT_SECRET: z.ZodString;
    JWT_EXPIRES_IN: z.ZodDefault<z.ZodString>;
    JWT_REFRESH_SECRET: z.ZodString;
    JWT_REFRESH_EXPIRES_IN: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
type EnvType = z.infer<typeof envSchema>;
export declare const env: EnvType;
export type Env = typeof env;
export {};
//# sourceMappingURL=env.d.ts.map