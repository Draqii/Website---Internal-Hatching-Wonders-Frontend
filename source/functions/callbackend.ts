import JSEncrypt from "jsencrypt";

const pub_key = `-----BEGIN PUBLIC KEY-----
        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzLj2qKNzbagpDU1Gmfea
        sJb7xZoUirrTk8kx8yb1umD/tlx6upJCrksAKPfaAyesSqNjSIdrJXE6/vVXm4js
        dz+v0mNbwGDj2ZD8SW8CrBLSRoUuHsOCBbt639uFr3a7nWScZw2xupvAiaWeAi/m
        mGFJDyJKJ/mW8V+Uuf960aPWgt3l5HQqUDwbNUza4RcGsbWrLzQfc6fs7fSLx2Zv
        6YdT1FMVyt0tuwhiUe6SKI17OebI+qwaTkFRwmRbcVNRr9Vkc6AHdEUuvxf371Ai
        rXarmbO4wcGVzigSZzbyU/JE+Vden/0d28XuGhNgeS4Q2uh5A1xAnUaygDHuENuI
        nwIDAQAB
        -----END PUBLIC KEY-----`

const encrypt = (data) => {
    const jsencrypt = new JSEncrypt();
    jsencrypt.setPublicKey(pub_key);
    return jsencrypt.encrypt(JSON.stringify(data))
}

export const callBackend = (
    route: string,
    isLocalFrontend: boolean,
    shouldEncrypt: boolean,
    method: "GET" | "POST" | "PUT" | "DELETE", 
    callback: Function,
    decoding: "json" | "text",
    data?: any,
    ) => {
    if(shouldEncrypt) data = encrypt(data)
    const origin = process.env.NODE_ENV !== "production" ? "http://localhost:3001/" : "https://homepage-backend.onrender.com/"
    const url = origin + route;
    const request: any = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({data: data}) // body data type must match "Content-Type" header
    };
    if (method === "GET") delete request.body
    
    fetch(url, request)
        .then(response => decoding === "json" ? response.json() : decoding === "text" ? response.text() : null)
        .then(decoded => callback(decoded))
}