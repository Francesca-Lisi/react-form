const articles = []


import { useState } from "react";
const Form = () => {

  const [articlesList, setArticlesList] = useState(articles);
  const [newListItem, setNewListItem] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    // creo un clone e della todoList e aggiungo il nuovo elemento
    setArticlesList([newListItem, ...articlesList])
  }




  return (
    <>
      <div className='container my-5'>
        <h2 className='my-4'>I miei Articoli</h2>
        <form action="#" onSubmit={handlerSubmit}>
          <div className='input-group mb-3'>
            <input
              type="text"
              placeholder='Inserire nome Articolo'
              className='form-control'
              value={newListItem}
              onChange={(e) => setNewListItem(e.target.value)}
            />
            <button
              className='btn btn-outline-dark'
              type='submit'
            >Invia</button>
          </div>
        </form>

        <div className='card p-3'>
          <ul className="list-group list-group">
            {articlesList.map((article, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <h5 className="fw-bold">{article}</h5>
                  {/* <span>Altre info</span> */}
                </div>
                <div className='align-items-center'>
                  <i class="fa-solid fa-trash-can m-2"></i>
                </div>
              </li>
            ))}

          </ul>
        </div>






      </div>
    </>
  )
}

export default Form