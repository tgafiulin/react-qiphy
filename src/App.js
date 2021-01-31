import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGiphs, clearGiphs } from './app/giphsReducer'
import GiphItem from './comnponents/GiphItem'

function App() {
  const dispatch = useDispatch();
  const [tags, editTagsInput] = useState('');
  const [tagsError, editTagsError] = useState('');
  const [group, toggleGroup] = useState(false);
  const giphsGroup = useSelector((state) => state.giphs.groupGiphs)

  const getGiphs = () => {   
    if (tags) {
      dispatch(fetchGiphs(tags));
      editTagsError('');
    } else {
      editTagsError('заполните поле «тег»');
    }
  }

  const clear = () => {
    dispatch(clearGiphs());
    editTagsInput('');
    editTagsError('');
  }

  const group = () => {
    toggleGroup(true);
  }

  return (
    <div className="App">
      <div className="search-block">
        <div className="input-block">
          <input 
            type="text"
            value={tags}
            onChange={(e) => editTagsInput(e.target.value)}
            placeholder="введите тег"
            className="form-control"
          />
          <span>{tagsError}</span>
        </div>
        
        <Button variant="success" onClick={getGiphs}>Загрузить</Button>
        <Button variant="danger" onClick={clear}>Очистить</Button>
        <Button variant="primary" onClick={group}>Группировать</Button>
      </div>
      <div className="result-block">
        {Object.keys(giphsGroup).map(giphsTag => (
          giphsGroup[giphsTag].map((gif) => {
            return <GiphItem url={gif} tag={giphsTag} />
          })
        ))}
      </div>
    </div>
  );
}

export default App;
