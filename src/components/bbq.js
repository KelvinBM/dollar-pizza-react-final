import React from 'react';
import bbq from './images/bbq.jpg';
function Bbq() {
  return(
    <div className="Bbq col-4">
      <div className="card">
        <img src={ bbq } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">BBQ Chicken</h5>
          <p className="card-text">Perhaps the most popular slice we offer. BBQ Chicken over a delicious dollar pizza. What more could one want in life?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  )
}

export default Bbq;
