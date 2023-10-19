import classes from './InfoMovies.module.css'
import React from 'react';
import infoMovies from '../model/infoMoves';
import categoriesGeneric from '../model/categoriesGeneric';
import { fetchGenres } from '../http/moveis';
import { useQuery } from '@tanstack/react-query';

const InfoMovies:React.FC<infoMovies> = (props) => {


  const { data } = useQuery<categoriesGeneric[]>({
    queryKey: ["categories", "categories_generic"],
    queryFn: () => fetchGenres(),
    enabled: props.genericsMovies !== undefined,
  });

  

  const maxLength = 20

  let truncatedLength;


  if(props.title){
    if(props.title.length>maxLength)
    {
     truncatedLength = props.title.substring(0,props.title.length-10)+"..."
    }else
    {
    truncatedLength = props.title
    }
  }

  return (
    <div className={classes.listGeneric}>
      <span><h3>{truncatedLength}</h3></span>
    </div>
  );
};
export default InfoMovies;
