import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import useInput from '../../customhook/useInput';
import { updateNote } from '../../store/actions/noteAction';

const EditForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const note = useSelector(state => state.note);

    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [content, bindContent, resetContent] = useInput(note.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote({id: note.id, title, content}))
        resetTitle();
        resetContent();
        history.push('/');
    }

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Edit Note</h5>
                <div className="input-field">
                    <input id="note_title" type="text" className="validate" {...bindTitle}/>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}/>
                </div>
                <button className="btn blue">Update</button>
            </form>
        </div>
    )
}

export default EditForm;