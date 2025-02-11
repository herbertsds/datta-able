import PropTypes from 'prop-types';
import React, { createRef, useState, useEffect } from 'react';
import { Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import axios from '../../utils/axios';

const ModalToDo = (props) => {
  const formRef = createRef();
  const [newNote, setNewNote] = useState('');
  const [modalTodo, setModalTodo] = useState([]);
  const [isBasic, setIsBasic] = useState(false);

  const { todoList } = props.todoList ? props : [];

  useEffect(() => {
    setModalTodo(todoList);
  }, [todoList]);

  const completeHandler = async (e, key) => {
    await axios
      .post('/api/todo/modal/complete', {
        key: key,
        complete: e.target.checked
      })
      .then((response) => {
        setModalTodo(response.data.modalTodo);
      });
  };

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('/api/todo/modal/add', {
        note: newNote
      })
      .then((response) => {
        resetForm();
        setModalTodo(response.data.modalTodo);
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
      .post('/api/todo/modal/delete', {
        key: key
      })
      .then((response) => {
        setModalTodo(response.data.modalTodo);
      });
  };

  const todoListHtml = modalTodo.map((item, index) => {
    return (
      <div key={index}>
        <div className="to-do-list mb-3">
          <div className="d-inline-block ">
            <div className={[item.complete ? 'form-check done-task' : '', 'check-task form-check d-flex justify-content-center'].join(' ')}>
              <input
                type="checkbox"
                className="form-check-input custom-control-input"
                id={`chkmdltodo-${index}`}
                defaultChecked={item.complete}
                onChange={(e) => completeHandler(e, index)}
              />
              <label className="form-check-label custom-control-label ms-2" htmlFor={`chkmdltodo-${index}`}>
                {item.note}
              </label>
            </div>
          </div>
          <div className="float-end">
            <a href="#!" className="delete_todolist" onClick={() => deleteHandler(index)}>
              <i className="fa fa-trash-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Row>
        <Col>
          <div className="new-task">{todoListHtml}</div>
          <Button variant="primary" onClick={() => setIsBasic(true)}>
            ADD NEW TASK
          </Button>
          <Modal show={isBasic} onHide={() => setIsBasic(false)}>
            <ValidationForm ref={formRef} onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
              <Modal.Header closeButton>
                <Modal.Title as="h5">Add New Todo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Form.Group as={Col}>
                    <TextInput
                      name="newNoteModal"
                      id="newNoteModal"
                      placeholder="Create your task list"
                      required
                      value={newNote}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Form.Group>
                </Row>
              </Modal.Body>
              <Modal.Footer className="p-3">
                <Button variant="primary" type="submit" onClick={() => setIsBasic(false)}>
                  Save
                </Button>
                <Button variant="light" onClick={() => setIsBasic(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </ValidationForm>
          </Modal>
        </Col>
      </Row>
    </React.Fragment>
  );
};

ModalToDo.propTypes = {
  todoList: PropTypes.object
};

export default ModalToDo;
