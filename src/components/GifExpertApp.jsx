import {useState} from 'react'
import { AddCategory } from './AddCategory'
import {GifGrid} from './GifGrid' 
import {DeleteCategory} from './DeleteCategory'


export const GifExpertApp = () => {
 
    const [ categories, setCategories ] = useState( [ 'One Punch' ] )  
   
    const handleAddCategories = ( newCategory) => {
      let categoriesLower = categories.map( category => category.toLowerCase() )
      if( categoriesLower.includes( newCategory.toLowerCase() ) ) return; 
      setCategories( [newCategory, ...categories ] )
    }

    const handleDeleteCategories = ( id ) => {
      
      const newCategory = categories.filter(
        category => category.id !== id
      ); 
     setCategories(newCategory)
     }
      
    
 
    
  return (
        <>
      <h1> GifExpertApp </h1>
      <AddCategory handleAddCategories = { handleAddCategories } /> 
      <ol > 
       <DeleteCategory handleDeleteCategories= {handleDeleteCategories}/>
         <p> <em> Resultados: </em> </p> 
         { categories.map(category =>
        <GifGrid category={category}  key={ category }/>)
      } 
  
      </ol> 
      </> 
    )
  }


