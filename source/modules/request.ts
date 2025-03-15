export const backend_root = (
    process.env.NODE_ENV === "production" ? "https://homepage-backend.onrender.com" : process.env.NODE_ENV === "development"? "http://localhost:3000" :""
) 

const options: any = (method, payload) => ({
    method: method,
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload) });

export const request = (path, method, data=null, callback) => {
    let _options = options(method, data)
    if (method === "GET") delete _options.body
    fetch(backend_root + path, _options)
        .then(response => response.json())
        .then(decoded => callback(decoded))
}