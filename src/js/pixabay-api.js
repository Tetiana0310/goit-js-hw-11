const URL = "https://pixabay.com/api/";
const API_KEY = "45170254-42a85dd1494e2c1786d1d6be2";


export function searchImgByQuery(query) {
    const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
 })
    return fetch(`${URL}?${params}`).then((response) => {
        if (!response.ok) {
        throw new Error (response.status)
        }
        return response.json()
})
}
