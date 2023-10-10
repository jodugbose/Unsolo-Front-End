import jwt_decode from "jwt-decode";
 

export const decodeJwt = (token) => {
    const decoded = jwt_decode(token);
    
    /* prints:
    * { iss: "self",
    *   exp: 1393286893,
    *   iat: 1393268893  
    *   roles: "USER"
    *   sub: email
    * }
    */
    // decode header by passing in options (useful for when you need `kid` to verify a JWT):
    const decodedHeader = jwt_decode(token, { header: true });
    console.log("decodedHeader", decoded)

    return decoded

/* prints:
 * { typ: "JWT",
 *   alg: "HS256" }
 */
}

export const isTokenValid = (token) => {
    if(token === '') return false
    const decoded = jwt_decode(token);

    if(Date.now() >= decoded.exp * 1000) {
        console.log("Token expired!")
        return false
    }
    return true

}