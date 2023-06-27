import {GifItem} from './GifItem' 
import { useFetchGifs } from '../hook/useFetchGifs'

export const GifGrid = ( { category } ) => {
  
  //el useFetchGifs está como un objeto {  }
  const { images, isLoading } = useFetchGifs(category)
  
  return (
     <>
     <h3>{ category }</h3>
      { 
        isLoading ? <h2>Cargando...</h2>
       : null    
      }
        <div className='card-grid'>
        
        { images.map( 
           ( image ) => 
           <GifItem 
           key={ Image.id } 
            {...image}
           />

           ) 
        }  
      </div>
        
     </>
  )
    
}
