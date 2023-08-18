import React from 'react';
import './Ticket.css';

function Ticket({ticket,users}){
    let str= ticket?.title
    const truncateString =(str, num) => {
      if(str?.length > num){
        return str.slice(0,num)+"...";
      }
      else{
        return str;
      }
    }
   
  return (
    <div className="ticket">
     <h3 key={ticket.id} className="ticket-id" >{ticket.id}</h3>
     <p className="title">{truncateString(ticket.title, 40)}</p>
     <div className="option">
        <i className={`priority-icon`}></i>
        <button className="req">
            <i className="circle"></i>
            Feature Request
        </button>
     </div>
      

    </div>
  );
}

export default Ticket