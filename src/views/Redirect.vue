<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
function makeid(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }
    return result;
}

const randomString = makeid(16);
localStorage.setItem("stateKey", randomString)
const params = new URLSearchParams({
    response_type: "token",
    client_id: "83b2c91c728240a09e84343dba44933e",
    scope: "streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state",
    redirect_uri: "http://localhost:5173/main-page",
    state: randomString,
}).toString();
const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?${params}`;
window.location.href = SPOTIFY_AUTH_URL;
</script>
