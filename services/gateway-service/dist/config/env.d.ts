import 'dotenv/config';
import { z } from '@chatapp/common';
declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    GATEWAY_PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    AUTH_SERVICE_URL: z.ZodString;
}, z.core.$strip>;
type EnvType = z.infer<typeof envSchema>;
export declare const env: EnvType;
export type Env = typeof env;
export {};
//# sourceMappingURL=env.d.ts.map