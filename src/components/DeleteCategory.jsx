
export const DeleteCategory = ({handleDeleteCategories, category}) => {
  
    const Delete = () => {
        handleDeleteCategories(category)
    }
    return (
        <button onClick={ Delete } className="button"> Vaciar Gifs{category}</button>
    )
}