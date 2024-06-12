import PropTypes from 'prop-types';
import React, { createRef, useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { ValidationForm, TextInputGroup } from 'react-bootstrap4-form-validation';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const BasicToDo = (props) => {
  const formRef = createRef();
  const [newNote, setNewNote] = useState('');
  const [basicTodo, setBasicTodo] = useState([]);

  const { todoList } = props.todoList ? props : [];

  useEffect(() => {
    setBasicTodo(todoList);
  }, [todoList]);

  const completeHandler = async (e, key) => {
    await axios
      .post('/api/todo/basic/complete', {
        key: key,
        complete: e.target.checked
      })
      .then((response) => {
        setBasicTodo(response.data.basicTodo);
      });
  };

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('/api/todo/basic/add', {
        note: newNote
      })
      .then((response) => {
        resetForm();
        setBasicTodo(response.data.basicTodo);
        setNewNote('');
      });
  };

  const resetForm = () => {
    formRef.current.resetValidationState(true);
  };

  const handleErrorSubmit = () => {
    //console.log(errorInputs);
  };

  const deleteHandler = async (key) => {
    await axios
      .post('/api/todo/basic/delete', {
        key: key
      })
      .then((response) => {
        setBasicTodo(response.data.basicTodo);
      });
  };

  const todoListHTML = basicTodo.map((item, index) => {
    return (
      <div key={index}>
        <div className="to-do-list mb-3">
          <div className="d-inline-block">
            <div
              className={[
                item.complete ? 'form-check done-task' : '',
                'form-check check-task custom-control custom-checkbox d-flex justify-content-center'
              ].join(' ')}
            >
              <input
                type="checkbox"
                className="form-check-input custom-control-input"
                id={`chktodo-${index}`}
                defaultChecked={item.complete}
                onChange={(e) => completeHandler(e, index)}
              />
              <label className="form-check-label custom-control-label ms-2" htmlFor={`chktodo-${index}`}>
                {item.note}
              </label>
            </div>
          </div>
          <div className="float-end">
            <Link to="#" className="delete_todolist" onClick={() => deleteHandler(index)}>
              <i className="fa fa-trash-alt" />
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ValidationForm ref={formRef} onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
            <Row>
              <Form.Group as={Col}>
                <TextInputGroup
                  name="newNote"
                  id="newNote"
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
            </Row>
          </ValidationForm>
          <div className="new-task mt-3">{todoListHTML}</div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
BasicToDo.propTypes = {
  todoList: PropTypes.array
};

export default BasicToDo;
