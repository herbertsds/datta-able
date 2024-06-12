import PropTypes from 'prop-types';
import React, { createRef, useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { ValidationForm, TextInputGroup } from 'react-bootstrap4-form-validation';

import complete from '../../assets/images/complete.png';
import axios from '../../utils/axios';

const CardToDo = (props) => {
  const formRef = createRef();
  const [newNote, setNewNote] = useState('');
  const [cardTodo, setCardTodo] = useState([]);

  const { todoList } = props.todoList ? props : [];

  useEffect(() => {
    setCardTodo(todoList);
  }, [todoList]);

  const completeHandler = async (key) => {
    await axios
      .post('/api/todo/card/complete', {
        key: key
      })
      .then((response) => {
        setCardTodo(response.data.cardTodo);
      });
  };

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('/api/todo/card/add', {
        note: newNote
      })
      .then((response) => {
        resetForm();
        setCardTodo(response.data.cardTodo);
        setNewNote('');
      });
  };

  const resetForm = () => {
    formRef.current.resetValidationState(true);
  };

  const handleErrorSubmit = () => {
    //console.log(errorInputs);
  };

  const completeStyle = {
    backgroundImage: `url(${complete})`,
    position: 'absolute',
    top: '5px',
    right: '5px',
    content: '',
    width: '55px',
    height: '55px',
    backgroundSize: '100%'
  };

  const todoListHtml = cardTodo.map((item, index) => {
    return (
      // eslint-disable-next-line
      <li
        key={index}
        className={item.complete ? 'complete' : ''}
        onKeyUp={() => completeHandler(index)}
        onClick={() => completeHandler(index)}
      >
        {item.complete ? <span style={completeStyle} /> : ''}
        <p>{item.note}</p>
      </li>
    );
  });

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ValidationForm ref={formRef} onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
            <Form.Group as={Col} className="mb-3">
              <TextInputGroup
                name="newNoteCard"
                id="newNoteCard"
                placeholder="Create your task list"
                required
                append={
                  <Button type="submit" variant="secondary" className="btn-icon">
                    <i className="fa fa-plus" />
                  </Button>
                }
                value={newNote}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>
          </ValidationForm>
          <section id="task-container">
            <ul id="task-list">{todoListHtml}</ul>
          </section>
        </Col>
      </Row>
    </React.Fragment>
  );
};

CardToDo.propTypes = {
  todoList: PropTypes.array
};

export default CardToDo;
