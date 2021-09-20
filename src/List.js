import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ item, index, deleteItem, editItem }) => {
  return (
    <div className='items'>
      <span className='list-item'>{item}</span>
      <button className='btn-edit' onClick={() => editItem(index)}>
        <FaEdit />
      </button>
      <button className='btn-delete' onClick={() => deleteItem(index)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default List;
