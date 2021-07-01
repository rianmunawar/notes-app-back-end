/* eslint-disable no-trailing-spaces */
/* eslint-disable import/extensions */
import { 
  addNoteHandler, 
  deleteNoteByIHandler, 
  editNoteByIdHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler, 
} from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIHandler,
  },
];

export default routes;
