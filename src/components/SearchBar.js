import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(text);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
