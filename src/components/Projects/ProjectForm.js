import React, {useState} from "react";
import firebase from "firebase";
import {useCollection} from "react-firebase-hooks/firestore";
import useDropdown from './useDropdown.jsx';

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
    
    const Status_List = ["New", "In Progress", "Test", "Canceled", "Implemented"];
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 4 && description.length >= 4 ){
      firebase.firestore().collection('Project').add(
        {name: name, description: description, comments: comments, status: status })
      .then( async documentReference => {
        console.log('document reference ID', documentReference.id);
      })
      .catch(error => {
        console.log(error.message)
      })
    }
  
  return (
    <form onSubmit={onSubmit} className="form">
      <label>Project Name </label>
      <input type="text" required onChange={(event => setName(event.target.value))} minlength="4" maxlength="30" size="30"/>
      <br/>
      <label>Description </label>
      <textarea  onChange={(event => setDescription(event.target.value))} minlength="4" maxlength="50" size="50"/>
      <br/>
      <label>Comments </label>
      <textarea onChange={(event => setComments(event.target.value))}/>
      <br/>

        const Component = () => {
          const [status, statusDropdown ] = useDropdown(" Status List ", " ", Status_List);
            
              return (
              <statusDropdown onChange={(event => setStatus(event.target.value))}/>    
              )
        }

      <br/>
      <input type="submit" value="Submit project"/>
    </form>
  )
}

export default ProjectForm;
