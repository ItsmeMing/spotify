import axios from "axios";

const baseDomain = "https://api.spotify.com/v1/";
const baseURL = `${baseDomain}`;

const access_token = () => {
    if ((Date.now() - localStorage.getItem("access_token")) / 1000 < 3600)
        return localStorage.getItem("access_token");
    else return new URLSearchParams(window.location.search).get("access_token");
};

export default axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${access_token()}`,
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
