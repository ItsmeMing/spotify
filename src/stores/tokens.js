import {defineStore} from "pinia";

export const useTokensStore = defineStore("tokens", {
    state: () => {
        return {
            tokens: {
                ggAccessToken: "",
                spotifyAccesssToken: "",
            },
        };
    },
    getters: {
        getData: (state) => state.tokens,
    },
    actions: {
        addToken(tokenName, token) {
            this.tokens[tokenName] = token;
        },
    },
});
