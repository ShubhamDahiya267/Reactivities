import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Activity } from "../models/Activity"
import axios, { Axios } from "axios"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import { Container } from "semantic-ui-react"
import {v4 as uuid} from 'uuid';

function App() {

  const  [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode]=useState(false);


  useEffect( () => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data)
      });
    
  } , [] )

  function handleSelectActity(id:string){
    setSelectedActivity(activities.find(x=>x.id===id));
    setEditMode(false);
  }

  function handleCancelSelectedValue(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id ?:string){
    id ? handleSelectActity(id) : handleCancelSelectedValue();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateorEditActivity(activity : Activity){
    activity.id ?
     setActivities([ ...activities.filter(x=> x.id !== activity.id), activity])
     : setActivities([...activities,{...activity, id:uuid()}]);
    
     setEditMode(false);
     setSelectedActivity(activity);
  }

  function handleDeleteActivity(id:string){
    setActivities([...activities.filter(x=>x.id!==id)]);
  }

  return (
    <>
      <Navbar openForm={handleFormOpen}/>
      <Container style={{marginTop:'7em'}}>
        <ActivityDashboard activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActity}
        cancelSelectAcitvity={handleCancelSelectedValue}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateorEditActivity}
        deleteActivity={handleDeleteActivity}/>
      </Container>
      
    </>
  )
}

export default App
