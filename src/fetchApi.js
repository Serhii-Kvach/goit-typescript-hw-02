import axios from "axios";

export const fetchGallery = async (userQuery, currentPage) => {
  const KEY = "ba_HBPOnOMUBO5sUwa7YhaLIqIClsGbs1JcvuIP7NLw";

  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: KEY,
      query: userQuery,
      orientation: "landscape",
      per_page: 9,
      page: currentPage,
    },
  });
  return response;
};
