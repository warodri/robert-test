import { HTTP } from "../common/axios";

export default {

    async movies() {
        try {
            const result = await HTTP.get("movies.json");
            return result.data.data;
        } catch (e) {
            return e;
        }
    }

}