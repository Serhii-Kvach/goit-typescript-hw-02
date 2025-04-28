import axios from "axios";

export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  likes: number;
  user: {
    name: string;
    location: string;
    profile_image: {
      small: string;
    };
  };
};

export type APIResponse = {
  results: Image[];
  total: number;
  total_pages: number;
};

export const fetchGallery = async (
  userQuery: string,
  currentPage: number
): Promise<APIResponse> => {
  const KEY = "ba_HBPOnOMUBO5sUwa7YhaLIqIClsGbs1JcvuIP7NLw";

  const response = await axios.get<APIResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        client_id: KEY,
        query: userQuery,
        orientation: "landscape",
        per_page: 9,
        page: currentPage,
      },
    }
  );
  return response.data;
};
