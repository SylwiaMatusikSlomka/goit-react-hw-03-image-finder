import axios from 'axios';

const API_KEY = `35854690-4159d3cc03f107c66dd11036d`;
const API_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 12;

export const fetchPhotos = async (searchValue, currentPage) => {
  try {
    const objects = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: PER_PAGE,
      },
    });
    const images = objects.data;
    return images;
  } catch (error) {
    this.setState({ error });
  }
};
