import React from "react";

let counter=0;

export default function TodoItems({ todo, onDelete , onInject}) {

  let hash = "#";
  ///let accordion = "accordion";
  let collapse = "collapse";
  ///let heading = "heading";

  return (
    
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={hash+collapse.todo.title}
            aria-expanded="true"
            aria-controls={collapse.todo.title}>
            TradeId: {todo.title}
          </button>
        </h2>
        {counter!==0 ?
        <div
          id={collapse.todo.title}
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Trade Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                defaultValue={todo.desc}
              ></textarea>
            </div>
          </div>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => {
                onDelete(todo);
              }}
            >
              {" "}
              Delete{" "}
            </button>
            {"    "}
            <button
              className="btn btn-success"
              onClick={() => {
                onInject(todo);
              }}
            >
              {" "}
              Inject{" "}
            </button>
            {"    "}
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" disabled/>
                <label className="form-check-label" htmlFor="inlineRadio1">DEV (disabled)</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" disabled/>
              <label className="form-check-label" htmlFor="inlineRadio2">QA (disabled)</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label" htmlFor="inlineRadio3">UAT</label>
            </div>
              </div>
              <div className="blank"><br></br><hr></hr></div>
            </div>
            :<div></div>}
      </div>
    </div>
  );
}
