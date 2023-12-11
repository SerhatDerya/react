import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID BWV_1JueAqIIIzP7P39qCvY16Ufco1SY6gV2kj2_ZT4'
        },
        params: {
            query: term
        }
    });


    return response.data.results;
}

export default searchImages;