import categoriesGeneric from "./categoriesGeneric";




interface data {
  data: {
    id: number;
    backdrop_path: string;
    genres: {
      id: number;
      name: string;
    }[];
    release_date: string;
    tagline: string;
    title: string;
    poster_path: string;
    original_language: string;
    overview: string;
    vote_average:number,
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];

  };
  generic: categoriesGeneric[];
  videos : {
    key:string
  }[]
}

export default data;
