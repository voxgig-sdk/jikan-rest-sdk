import { Context } from './Context';
declare class JikanRestError extends Error {
    isJikanRestError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { JikanRestError };
