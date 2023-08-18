import React,{useState, useEffect} from 'react'
import './App.css';
import Ticket from './components/Ticket';
import axios from 'axios';
import Kanban from './components/Kanban';


function App() {
  const [tickets, setTickets]= useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("user");



  useEffect(() => {
    fetch_tickets();
  }, []);
  const fetch_tickets  = async ()=>{
    try {
      const data = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setTickets(data.data.tickets);
      setUsers(data.data.users);
      console.log("tickets fetched", data.data.tickets);
      console.log(data.data.users);
    } catch (error) {
      console.log("Error fetching tickets: ", error.message)
    }
  };

  return (
     
    <div className="App">
      
      
      <select value={grouping}
      onChange={(e) => setGrouping(e.target.value)}>
      <option value="status">Status</option>
      <option value="user">User</option>
      <option value="priority">Priority</option>
      </select>

      <Kanban users={users} tickets={tickets} grouping={grouping}/>

    </div>
  );
}

export default App;
