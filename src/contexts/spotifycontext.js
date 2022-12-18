import { createContext } from "react";

const spotify = createContext({
   CLIENT_ID: "45891db33d6d48f18319373c8fa19f53",
   REDIRECT_URI: "http://localhost:3000",
   AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
   RESPONSE_TYPE: "token"
})

export default spotify