


export const fetchCategories = async (value:string,signal:AbortSignal) =>{
    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=90865bea14b1012286656881417ea75b";
    console.log(value);
    
    if (value === "Popular") {
      url = "https://api.themoviedb.org/3/movie/popular?api_key=90865bea14b1012286656881417ea75b";
    } else if (value === "Comming Soon") {
      url = "https://api.themoviedb.org/3/movie/upcoming?api_key=90865bea14b1012286656881417ea75b";
    } else if (value === "Top Rated") {
      url = "https://api.themoviedb.org/3/movie/top_rated?api_key=90865bea14b1012286656881417ea75b";
    }
    
    const response = await fetch(url, { signal });
   
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const {results} = await response.json()
    const newCategories = results.slice(7,15)
    return newCategories
}
export const fetchGenres = async () =>{
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=90865bea14b1012286656881417ea75b')

    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const {genres} = await response.json()
    return genres
}

export const fetchRecommened = async () =>{
  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=90865bea14b1012286656881417ea75b')

  if(!response.ok){
      throw new Error("Something went wrong")
  }
  const {results} = await response.json()
  return results
}

export const fetchVideoTopNews = async () =>{
  const response = await fetch('https://api.themoviedb.org/3/tv/1399/videos?api_key=90865bea14b1012286656881417ea75b')

  if(!response.ok){
      throw new Error("Something went wrong")
  }
  const {results} = await response.json()
  const newResults = results.slice(1,4)
  return newResults
}
export const fetchVideoId = async (id:string) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=90865bea14b1012286656881417ea75b`)

  if(!response.ok){
      throw new Error("Something went wrong")
  }
  const {results} = await response.json()
  return results
}

export const fetchMovieDetail = async (id:string) =>{
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=90865bea14b1012286656881417ea75b`)

  if(!response.ok){
      throw new Error("Something went wrong")
  }
  const data= await response.json()
  
  return data
}