import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGiphs } from './app/tagReducer'

function App() {
  const dispatch = useDispatch();
  const [tags, editTagsInput] = useState('');
  const [tagsError, editTagsError] = useState('');
  // const giphs = useSelector(state => state.tags.giphs)

  const getGiphs = () => {
    
    
    if (tags) {
      dispatch(fetchGiphs(tags));
      editTagsInput('');
      editTagsError('');
    } else {
      editTagsError('заполните поле «тег»');
    }
  }

  const clear = () => {
    editTagsInput('');
    editTagsError('');
  }

  return (
    <div className="App">
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
      <Button variant="primary">Группировать</Button>
    </div>
  );
}

export default App;
