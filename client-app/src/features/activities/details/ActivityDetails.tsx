import React from 'react'
import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'

interface Props{
    activity: Activity
    cancelSelectAcitvity: ()=>void
    openForm:(id:string)=>void
}


function ActivityDetails({activity, cancelSelectAcitvity, openForm}:Props) {
  return (
    <Card fluid>
    <Image src={`assets/categoryImages/${activity.category}.jpg`} />
    <CardContent>
      <CardHeader>{activity.title}</CardHeader>
      <CardMeta>
        <span className='date'>{activity.date?.toString()}</span>
      </CardMeta>
      <CardDescription>
        {activity.description}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <Button.Group widths='2'>
        <Button onClick={()=>openForm(activity.id)} basic color='blue' content='Edit' />
        <Button onClick={()=> cancelSelectAcitvity()} basic color='grey' content='Cancel' />
      </Button.Group>
    </CardContent>
  </Card>
  )
}

export default ActivityDetails