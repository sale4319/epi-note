import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

const NoteDetail = ( props ) => {
    const id = props.match.params.id;
    useFirestoreConnect([{ collection:'notes', doc:id }]);
    const note = useSelector(
        ({ firestore: { data } }) => data.notes && data.notes[id]
    );

    const noteMarkup = isEmpty(note) ? (
        <div className="container section">
            <div className="card note z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Note with id <b className="red-text">{id}</b> does not exist...
                        </span>
                </div>
            </div>
         </div>
    ) : (
        <div className="container section">
            <div className="card note z-depth-0">
                <div className="card-content">
                    <span className="card-title">{note.title}</span>
                    <p className="truncate">{note.content}</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>{moment(note.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
    return noteMarkup;
}

export default NoteDetail;
