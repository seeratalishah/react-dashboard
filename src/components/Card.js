import React from 'react'

function Card(props) {

    
  return (
    <div className="card">
    <div className="card-header">
      <span className={props.className}></span>
      <h2>{props.title}</h2>
    </div>
    <div className="card-body">
      <p>
        {props.desc}
      </p>
    </div>
    <div className="card-footer">
        {
            props.pills.map((pill, index)=>{
               return <span key={index} className='pill' > {pill} </span>
            })
        }
       
       {/* <span className='pill' >{props.pills[1]}  </span>
       <span className='pill' > {props.pill[2]}  </span> */}
    </div>
</div>
  )
}

export default Card