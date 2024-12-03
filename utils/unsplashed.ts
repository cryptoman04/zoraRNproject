let UNSPLASH_ACCESS_KEY = "ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ";
let UNSPLASH_SEARCH_URL = "https://api.unsplash.com/search/photos";

export interface UnsplashedUser {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string;
    twitter_username: string;
    portfolio_url: string;
    profile_image: {
        small: string;
        medium: string;
        large: string;
    };
}

export interface UnsplashedResult {
    id: string;
    created_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    likes: number;
    liked_by_user: boolean;
    description: string;
    user: UnsplashedUser;
    current_user_collections: [];
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
    };
}

export interface UnsplashedSearchResponse {
    total: number;
    total_pages: number;
    results: UnsplashedResult[];
}

export const searchUnsplashed = async (searchTerm: string, page: number) => {
    const resp = await fetch(
        `${UNSPLASH_SEARCH_URL}?query=${searchTerm}&page=${page}`,
        {
            headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        }
    );

    const imageResp = (await resp.json()) as UnsplashedSearchResponse;
    return imageResp;
};
