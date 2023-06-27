import {useState, useEffect} from 'react' 
import { getGifs } from '../helpers/getGif'

export const  useFetchGifs = (category) => {
  const [images, setImages] = useState([]) 
  const [isLoading, setIsLoading] = useState(true)
  
  const getImages = async() => {
    const newImages = await getGifs( category )
    setImages( newImages ) 
    setIsLoading( false )
  }
    
  

 //El useEffect hace que no se ejecute mas veces
 useEffect(() => {
  
  getImages(  )

  }, [ ])
  
  
    return {
      images,
      isLoading 
    }
}
