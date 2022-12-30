<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {onMounted} from "vue";
import queryString from "query-string";
import {Buffer} from "buffer";
import axios from "axios";

const CLIENT_ID = "83b2c91c728240a09e84343dba44933e";
const CLIENT_SECRET = "2081e386102f48be991c54f4fba8df71";

onMounted(async () => {
    const url = window.location.search;
    const AUTHORIZATION_CODE = new URLSearchParams(url).get("code");
    const query_string = queryString.stringify({
        grant_type: "authorization_code",
        code: AUTHORIZATION_CODE,
        redirect_uri: "http://localhost:5173/main-page",
    });
    const BASE_64_STRING = Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`,
        "base64",
    );
    console.log(BASE_64_STRING);
    try {
        const data = await axios({
            url: "https://accounts.spotify.com/api/token",
            method: "POST",
            data: query_string,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${BASE_64_STRING}`,
            },
        });
        console.log(data);
    } catch (e) {
        console.log(e.message);
    }
});
</script>
