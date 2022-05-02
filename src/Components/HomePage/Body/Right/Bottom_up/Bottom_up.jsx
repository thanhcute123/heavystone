import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../Bottom_up/Bottom_up.css";

const Bottom_up = () => {
  return(
      <div className="bottom-up">
          <button className="button-up"><FontAwesomeIcon icon={faChevronUp}/></button>
      </div>
  )
}
export default Bottom_up;