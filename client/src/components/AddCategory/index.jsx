import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from '../../utils/mutations';
import { QUERY_CATEGORIES } from '../../utils/queries';

function AddCategory() {
  const [categoryName, setCategoryName] = useState('');
  const [addCategory, { error }] = useMutation(ADD_CATEGORY, {
    update(cache, { data: { addCategory } }) {
      try {
        const { categories } = cache.readQuery({ query: QUERY_CATEGORIES });
        cache.writeQuery({
          query: QUERY_CATEGORIES,
          data: { categories: [...categories, addCategory] },
        });
      } catch (e) {
        console.error(e);
      }
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addCategory({
        variables: { name: categoryName },
      });
      setCategoryName('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="New category name"
        required
      />
      <button type="submit">Add Category</button>
      {error && <div>Failed to add category</div>}
    </form>
  );
}

export default AddCategory;