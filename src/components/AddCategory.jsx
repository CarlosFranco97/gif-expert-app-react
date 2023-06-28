//Importante mantener segmentada por secciones mi app
import { useState } from 'react'
export const AddCategory = ({ handleAddCategories }) => {
    
    const [ inputValue, setInputValue ] = useState('')
    const onInputChanged = ({ target }) => {
        // console.log(target.value)
          
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault()  
       if(inputValue.trim().length <= 1) return;
        handleAddCategories( inputValue.trim() )
        setInputValue('')
        // console.log(setInputValue) //lo que envio para actualizar la informacion en el padre
    }
    
    return (
     <>
     
    <form onSubmit={onSubmit}>
        <input
       type='text'
       placeholder="Buscar gifs"
       value={ inputValue }  
       onChange={ onInputChanged }
       />
    
      </form>
      
        </>
    )
    }




    



