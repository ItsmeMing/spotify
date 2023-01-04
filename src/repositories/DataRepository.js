import Client from "./Clients/AxiosClient";

const getRandomCharacter = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
};

export default {
    getRandomSongs() {
        return Client.get("search", {
            params: {
                q: getRandomCharacter(),
                type: "track",
                market: "VN",
                limit: 10,
                offset: Math.floor(Math.random() * (1000 - 0 + 1) + 0),
            },
        });
    },
    getArtistsInfo(id) {
        return Client.get(`artists/${id}`);
    },
    getArtistsAlbums(id) {
        return Client.get(`artists/${id}/albums`, {
            params: {
                include_groups: "album",
            },
        });
    },
    getArtistsTopTracks(id) {
        return Client.get(`artists/${id}/top-tracks`, {
            params: {market: "VN"},
        });
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
};
