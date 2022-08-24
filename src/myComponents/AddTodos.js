import React, { useState } from 'react'

export const AddTodos = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Tradeid or Trade Message cannot be empty")
    }
    else {
      props.addTodo(title, desc)
    }
  }

  return (
    <div className="accordion" id="accordionTwo">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <h5>Add/Edit Trade and inject into Neuron</h5>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionTwo">
          <div className="accordion-body">
            <div className="container my-3">
             
              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Trade id: </label>
                  <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">Trade message: </label>
                  <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Trade</button>
              </form>
              <div className="blank"><br></br><hr></hr></div>
            </div>
          </div>
          <div>
          </div>
          <div className="blank"><br></br><hr></hr></div>
        </div>
      </div>
    </div>
  )
}