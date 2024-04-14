import { apolloClient } from "../../graphql";
import type { GetAnimePage } from "./__generated__/GetAnimePage";
import { GET_ANIME_PAGE } from "./queries";

class AnimeService {

    async getAnimePage(page: Number, perPage: 15): Promise<GetAnimePage["Page"]> {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await apolloClient.query({
                query: GET_ANIME_PAGE,
                variables: { page, perPage }
            });

            if ( !response || !response.data ) {
                throw new Error("Cannot get anime list");
            }

            // console.log("DATA:", response.data);

            return response.data.Page;

        } catch (error) {
            throw error;
        }
    }
}

export default new AnimeService();
