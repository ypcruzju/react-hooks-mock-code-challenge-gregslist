import React, { useState }  from "react";


function ListingCard(props) {
 
console.log(props.description)

   // do a for each to creat each card 
   // create the star function

   const [isliked, setIsliked] = useState('')
  
   function starClick() {
     setIsliked(!isliked)
     console.log(isliked)
   }
 
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
       
          { isliked ? (
            <button onClick={starClick} className="emoji-button favorite active">★</button>
            ) : (
              <button Onclick={starClick}className="emoji-button favorite">☆</button>
              )}
              

      {/* <button onClick={starClick} className="emoji-button favorite active"> {isliked ? '☆' : '★' } </button>   */}


        <strong>{props.description}</strong>
        <span> · {"location"}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}
export default ListingCard;
