import React from 'react';
import Form from './Form';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from '../notes/NoteList';

const Home = () => {
    useFirestoreConnect([{collection:'notes', orderBy:['createdAt', 'desc']}])
    const notes = useSelector((state) => state.firestore.ordered.notes);
    console.log('home', notes)
    return (
        <div>
            <div className="row center-align">
                <div className="column"><Form /></div>
                <div className="column"><NoteList notes={notes}/></div>
            </div>
        </div>
    )
}

export default Home;