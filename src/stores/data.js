import Repository from "../repositories/RepositoryFactory";
import {defineStore} from "pinia";

const DataRepository = Repository.get("data");
const UserRepository = Repository.get("user");

export const useDataStore = defineStore("data", {
    state: () => ({
        random_songs: [],
        artists_info: undefined,
        artists_albums: undefined,
        artists_top_tracks: undefined,
        users_playlists: undefined,
        users_info: undefined,
    }),

    getters: {
        getRandomSongs: (state) => state.random_songs,
        getArtistsInfo: (state) => state.artists_info,
        getArtistsAlbums: (state) => state.artists_albums,
        getArtistsTopTracks: (state) => state.artists_top_tracks,
        getUsersPlaylists: (state) => state.users_playlists,
        getUsersInfo: (state) => state.users_info,
    },
    actions: {
        async addRandomSongs() {
            try {
                const data = await DataRepository.getRandomSongs();
                const songs = data.data.tracks.items;
                this.random_songs = songs;
            } catch (e) {
                console.log(e.message);
            }
        },
        async modifyArtist(id) {
            try {
                const info = await DataRepository.getArtistsInfo(id);
                const albums = await DataRepository.getArtistsAlbums(id);
                const top_tracks = await DataRepository.getArtistsTopTracks(id);
                this.artists_info = info.data;
                this.artists_albums = albums.data;
                this.artists_top_tracks = top_tracks.data;
            } catch (e) {
                console.log(e.message);
            }
        },
        async addUsersPlaylists() {
            try {
                const playlists = await UserRepository.getUsersPlaylist();
                this.users_playlists = playlists.data.items;
            } catch (e) {
                console.log(e.message);
            }
        },
        async addUsersInfo() {
            try {
                const info = await UserRepository.getUsersInfo();
                this.users_info = info.data;
            } catch (e) {
                console.log(e.message);
            }
        },
    },
});
