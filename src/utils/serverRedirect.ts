import { Redirect } from "next"

interface INextRedirectResponse {
    redirect: Redirect
}

export const serverRedirect = (
    destination: string,
    statusCode: 301 | 302 | 303 | 307 | 308
): INextRedirectResponse => ({
    redirect: {
        destination,
        statusCode
    }
})