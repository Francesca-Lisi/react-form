import React from 'react'

const App = () => {
  return (
    <div className='container my-5'>
      <h2 className='my-4'>I miei Articoli</h2>
      <form action="#">
        <div className='input-group mb-3'>
          <input
            type="text"
            placeholder='Inserire nome Articolo'
            className='form-control'
          />
          <button
            className='btn btn-outline-dark'
            type='submit'
          >Invia</button>
        </div>
      </form>

      <div className='card p-3'>
        <ul className="list-group list-group">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <h5 className="fw-bold">Titolo</h5>
              {/* <span>Altre info</span> */}
            </div>
            <div className='align-items-center'>
              <i class="fa-solid fa-trash-can m-2"></i>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default App