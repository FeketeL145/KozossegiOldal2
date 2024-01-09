import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Newpost = () => {
  const [postData, setPostData] = useState({
    Id: '',
    Title: '',
    Author: '',
    Category: '',
    Content: '',
    Image: '',
    CreatedTime: new Date(),
  });

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setPostData({ ...postData, Category: selectedCategory });

      const response = await fetch('http://localhost:7051/api/Post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Post successfully submitted!');
      } else {
        console.error('Error submitting post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e, fieldName) => {
    setPostData({ ...postData, [fieldName]: e.target.value });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='postcard card form-group row col-xs-12 col-md-6 col-xl-4 mt-5 p-2 text-center'>
        <div className="input-group mt-3 mb-3">
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Author"
            value={postData.Author}
            onChange={(e) => handleChange(e, 'Author')}
          />
        </div>
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Title"
          value={postData.Title}
          onChange={(e) => handleChange(e, 'Title')}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Content"
          value={postData.Content}
          onChange={(e) => handleChange(e, 'Content')}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="ImageURL"
          value={postData.Image}
          onChange={(e) => handleChange(e, 'Image')}
        />
        <div className="input-group mb-3">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle mt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedCategory || 'Category'}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Sport')}>Sport</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Animal')}>Animal</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Nature')}>Nature</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Portrait')}>Portrait</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('B@W')}>B@W</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Art')}>Art</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Travel')}>Travel</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Macro')}>Macro</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Food')}>Food</a></li>
            </ul>
          </div>
        </div>
        <input
          type="submit"
          value="Beküldés"
          className="btn btn-primary d-inline mb-2"
        />
        <NavLink to={`/`}>
          <button className="d-inline btn btn-secondary">Vissza</button>
        </NavLink>
      </div>
    </form>
  );
};

export default Newpost;