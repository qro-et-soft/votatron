import React, {useState} from "react";
import firebase from "firebase";
import {useCollection} from "react-firebase-hooks/firestore";

const ProjectForm = () => {
  const [data, loading, error] = useCollection(
    firebase.firestore().collection('Project'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    firebase.firestore().collection('Project').add(
      {name: name, description: description, comments: comments })
      .then( async documentReference => {
        console.log('document reference ID', documentReference.id)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <label>Project Name</label>
      <input type="text" required onChange={(event => setName(event.target.value))}/>
      <br/>
      <label>Description</label>
      <textarea  onChange={(event => setDescription(event.target.value))}/>
      <br/>
      <label>Comments</label>
      <textarea onChange={(event => setComments(event.target.value))}/>
      <br/>
      <input type="submit" value="Submit project"/>
    </form>
  )
}


export default ProjectForm;
