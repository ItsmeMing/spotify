import Client from "./Clients/AxiosClient";

export default {
    getUsersPlaylist() {
        return Client.get("me/playlists");
    },
    getUsersInfo() {
        return Client.get("me")
    }
    // MANY OTHER ENDPOINT RELATED STUFFS
};
