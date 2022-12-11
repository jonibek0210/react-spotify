import { createContext } from "react";

const spotify = createContext({
   CLIENT_ID: "4b568a92c1b3476d90b9b2d48dd3ef82",
   REDIRECT_URI: "http://localhost:3000",
   AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
   RESPONSE_TYPE: "token"
})

export default spotify