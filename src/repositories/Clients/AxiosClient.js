import axios from "axios";

const baseDomain = "https://api.spotify.com/v1/";
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
});
