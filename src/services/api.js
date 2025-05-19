// d474d20a8cfc72bef970e3cb406dd008
const apiKey = 'd474d20a8cfc72bef970e3cb406dd008';
const apiUrl = 'https://api.themoviedb.org/3'

// search movies function
export const searchMovies = async (query) => {
    const response = await fetch(`${apiUrl}/search/movies?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
    const searchedData = await response.json()
    return searchedData.results
}

// popular movies fetch function
export const getPopularMovies = async () => {
    const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`)
    const data = await response.json()
    return data?.results
}

// 50287207-6c6df02c32bb418c76cf35ac5
// https://pixabay.com/api/videos/?key=50287207-6c6df02c32bb418c76cf35ac5

// Tv-series
// https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY
export const getPopularTvSeries = async () => {
    const response = await fetch(`${apiUrl}/tv/popular?api_key=${apiKey}`)
    const data = await response?.json()
    return data?.results
}

// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&page=1
export const getMovies = async () => {
    const response = await fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&page=2`)
    const data = await response?.json()
    return data?.results
}