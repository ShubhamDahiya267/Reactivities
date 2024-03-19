import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'

interface Props{
    activity: Activity | undefined
    closeForm: ()=>void
    createOrEdit:  (activity:Activity) => void 
}
function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}:Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActvity] = useState(initialState);

    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChange(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setActvity({...activity,[name]: value});
    }


  return (
    <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder='Title' value={activity.title}  name="title" onChange={handleInputChange}/>
            <Form.TextArea placeholder='Description' value={activity.description}  name="description" onChange={handleInputChange}/>
            <Form.Input placeholder='Category' value={activity.category}  name="category" onChange={handleInputChange}/>
            <Form.Input placeholder='Date' value={activity.date}  name="date" onChange={handleInputChange}/>
            <Form.Input placeholder='City' value={activity.city}  name="city" onChange={handleInputChange}/>
            <Form.Input placeholder='Venue' value={activity.venue}  name="venue" onChange={handleInputChange}/>
            <Button floated='right' content='Submit' positive type='submit'/>
            <Button onClick={()=>closeForm()} floated='right' content='Cancel' type='button'/>
        </Form>
    </Segment>
  )
}

export default ActivityForm