export const BASE_URL = "http://testurl.bitfinx.com"

export function generateUrl(params: Record<string, string | number>) {
    const url = new URL(BASE_URL)
    Object.entries(params).forEach(([key, value]:[key:string, value: string | number]) => {
        if(value){
            url.searchParams.append(key, value.toString())
        }
    })
    return url.href
}