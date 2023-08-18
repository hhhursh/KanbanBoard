import React from 'react';
import Ticket from './Ticket';
import './Kanban.css';

function Kanban({tickets, users, grouping}){
    const groupedTickets = {};
    tickets.forEach((ticket) => {
        const groupKey = grouping === "user" ? ticket.userId : ticket[grouping];
        if (!groupedTickets[groupKey]) {
          groupedTickets[groupKey] = [];
        }
        groupedTickets[groupKey].push(ticket);
      });
  return (
    <div className="kanban">
     {Object.keys(groupedTickets).map((groupKey) => (
        <div key={groupKey} className="key">
          <h2 className="kanban-head">
            <div className="column" style={{ display: "flex", alignItems: "center" }}>
              {grouping === "user" ? (
                <div className="kanban-head-name">
                  <div className={`kanban-head-name-symbol`}>
                    {users.find((user) => user.id === groupKey)?.name[0]}
                  </div>
                  {users.find((user) => user.id === groupKey)?.name}
                  {users.find((user) => user.id === groupKey)?.available ? (
                    <span className="kanban-user-avail-true" />
                  ) : (
                    <span className="kanban-user-avail-false" />
                  )}
                </div>
              ) : (
                groupKey
              )}
              <span className="ticket-len">
                ({groupedTickets[groupKey].length})
              </span>
            </div>
            <div>
            </div>
          </h2>
          {groupedTickets[groupKey].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
     </div>
  );
}

export default Kanban



