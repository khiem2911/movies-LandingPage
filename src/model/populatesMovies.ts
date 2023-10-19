
export type movies = {
    id: number;
    title: string;
    backdrop_path:string;
    poster_path:string
  };
  
  export type populatesData = {
    results: movies[];
  }

export default populatesData