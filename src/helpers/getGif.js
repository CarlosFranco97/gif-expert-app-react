export const getGifs = async( category  ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=q0NMxvF1586QXM6bPzeBE522DAGOjcGq&q=${category}&limit=10`
    const resp = await fetch( url )
    const { data } = await resp.json() //recordar que data es un arreglo
  
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    })
    
    )
    
    return gifs;
  }

