import axios from 'axios';

const SearchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID LijF_aRjdTRHiysAeXNmvSdO2RR4hjLgd60zC_8nFtQ'
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
};

export default SearchImages;
