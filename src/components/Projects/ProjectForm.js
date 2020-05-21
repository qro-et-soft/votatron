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
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    if (name.length >= 4 && description.length >= 4 ){
      e.preventDefault();
    firebase.firestore().collection('Project').add(
      {name: name, description: description, comments: comments, status: status })
      .then( async documentReference => {
        console.log('document reference ID', documentReference.id);
      })
      .catch(error => {
        console.log(error.message)
      })
    }
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <label>Project Name: </label>
      <input type="text" required onChange={(event => setName(event.target.value))} minlength="4" maxlength="30" size="30"/>
        <br/>
        <label>Description: </label>
        <textarea  onChange={(event => setDescription(event.target.value))} minlength="4" maxlength="50" size="50"/>
        <br/>
      <label>Comments: </label>
      <textarea onChange={(event => setComments(event.target.value))}/>
      <br/>
      <label>Status: </label>
       <select selected value={"New"}
          onChange={(event => setStatus(event.target.value))}>
            <option value={"New"}>New</option>
            <option value={"In Progress"}>In Progress</option>
            <option value={"Test"}>Test</option>
            <option value={"Implemented"}>Implemented</option>
            <option value={"Canceled"}>Canceled</option>
        </select>
        <br/>
      <input type="submit" value="Submit project"/>
    </form>
  )
}

export default ProjectForm;