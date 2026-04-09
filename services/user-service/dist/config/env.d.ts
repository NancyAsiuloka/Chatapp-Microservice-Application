import 'dotenv/config';
import { z } from '@chatapp/common';
declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    USER_SERVICE_PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    USER_DB_URL: z.ZodString;
    RABBITMQ_URL: z.ZodOptional<z.ZodString>;
    INTERNAL_API_TOKEN: z.ZodString;
}, z.core.$strip>;
type EnvType = z.infer<typeof envSchema>;
export declare const env: EnvType;
export type Env = typeof env;
export {};
//# sourceMappingURL=env.d.ts.map