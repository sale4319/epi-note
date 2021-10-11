import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { deleteNote, toggleFavorite } from '../../store/actions/noteAction';

const Note = ({ note }) => {
    const dispatch = useDispatch();

    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }

    const toggleFavoriteHandler = () => {
        dispatch(toggleFavorite(note))
    }

    const heartMarkup = note.favorite ? 'favorite' : 'favorite_border';

    return (
        <div className="note white">
            <div className="right-align">
                <i 
                className="material-icons purple-text pointer"
                onClick={toggleFavoriteHandler}>
                    {heartMarkup}
                </i>
                <i 
                className="material-icons blue-text pointer" 
                onClick={deleteNoteHandler}>
                    delete
                </i>
            </div>
            <h5 className="black-text">{note.title}</h5>
            <p className="truncate">{note.content}</p>
            <p className="orange-text">{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align"><i className="material-icons green-text">edit</i></div>
        </div>
    )
}

export default Note;
