import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'

interface Props{
    activities: Activity[]
    selectedActivity: Activity | undefined
    selectActivity: (id:string)=>void
    cancelSelectAcitvity: ()=>void
    editMode: boolean
    openForm:(id:string)=>void
    closeForm: ()=>void
    createOrEdit:  (activity:Activity) => void 
    deleteActivity:(id:string)=>void
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectAcitvity, editMode, openForm, closeForm, createOrEdit,deleteActivity}:Props) {
  return (
    <Grid>
        <Grid.Column width={10}>
            <ActivityList activities={activities} selectActivity= {selectActivity} deleteActivity={deleteActivity}/>
        </Grid.Column>
        <Grid.Column width={6}>
            {selectedActivity && !editMode &&
            <ActivityDetails activity={selectedActivity}  cancelSelectAcitvity={cancelSelectAcitvity} openForm={openForm}/> 
            }
            {editMode && <ActivityForm activity={selectedActivity} closeForm={closeForm} createOrEdit={createOrEdit}/>}
        </Grid.Column>
    </Grid>
    )
}
