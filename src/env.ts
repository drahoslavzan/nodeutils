import dotenv from 'dotenv';

dotenv.config({ path: '.dev.env' });
dotenv.config();

export function getEnv(name: string): string {
    let v = process.env[name];
    if (!v) {
        throw new Error(`missing env variable: ${name}`);
    }
    return v;
}

export function getIntEnv(name: string): number {
    return parseInt(getEnv(name));
}

export const isProduction = process.env.NODE_ENV === 'production';