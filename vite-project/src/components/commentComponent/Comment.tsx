import React, { useState } from 'react';
import './Comment.css'

interface PersonalNoteProps {
  initialValue?: string;
}

const Comment: React.FC<PersonalNoteProps> = ({ initialValue = '' }) => {
  const [note, setNote] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  return (
    <div className="comment-container">
      <label htmlFor="personalNote" className="label">הערות אישיות</label>
      <textarea
        id="personalNote"
        className="comment-textarea"
        value={note}
        onChange={handleChange}
      />
    </div>
  );
};

export default Comment;
