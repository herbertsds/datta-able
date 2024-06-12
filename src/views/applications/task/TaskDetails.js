import React from 'react';
import { Row, Col, Card, Form, Table, Dropdown } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import { Link } from 'react-router-dom';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

const TaskDetails = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={4} className="task-detail-right">
          <Card className="border-0">
            <Card.Body className="bg-c-blue">
              <div className="counter text-center">
                <h4 id="timer" className="text-white m-0">
                  <Timer initialTime={60000 * 60 * 24 * 10 - 1000} direction="backward">
                    {() => (
                      <React.Fragment>
                        <b>
                          <Timer.Days />
                        </b>
                        days :{' '}
                        <b>
                          <Timer.Hours />
                        </b>
                        h :{' '}
                        <b>
                          <Timer.Minutes />
                        </b>
                        m :{' '}
                        <b>
                          <Timer.Seconds />
                        </b>
                        s
                      </React.Fragment>
                    )}
                  </Timer>
                </h4>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Task Details</Card.Title>
            </Card.Header>
            <Card.Body className="task-details">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <i className="mx-1 fas fa-adjust m-r-5" /> Project:
                    </td>
                    <td className="text-end">
                      <span>
                        <Link to="#" className="text-secondary">
                          {' '}
                          Singular app
                        </Link>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mx-1 fas fa-calendar m-r-5" /> Updated:
                    </td>
                    <td className="text-end">12 May, 2015</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mx-1 fas fa-credit-card m-r-5" /> Created:
                    </td>
                    <td className="text-end">25 Feb, 2015</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mx-1 fas fa-chart-line m-r-5" /> Priority:
                    </td>
                    <td className="text-end">
                      <div className="btn-group">
                        <Link to="#" className="text-secondary">
                          <i className="mx-1 fas fa-upload m-r-5" /> Highest
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mx-1 fas fa-sync m-r-5" /> Revisions:
                    </td>
                    <td className="text-end">29</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mx-1 fas fa-user-plus m-r-5" /> Added by:
                    </td>
                    <td className="text-end">
                      <Link to="#" className="text-secondary">
                        Winnie
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="mx-1 fas fa-thermometer-half m-r-5" /> Status:
                    </td>
                    <td className="text-end">Published</td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <span>
                  <Link to="#" className="text-muted f-16 m-r-10">
                    <i className="mx-1 fas fa-random" />{' '}
                  </Link>
                </span>
                <span className="m-r-10">
                  <Link to="#" className="text-muted f-16">
                    <i className="mx-1 fas fa-ellipsis-v" />
                  </Link>
                </span>
                <div className="btn-group d-inline-block">
                  <Dropdown className="me-1">
                    <Dropdown.Toggle variant="primary" size="sm" className="drp-icon">
                      <span className="feather icon-thumbs-up" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="#">
                        Check in
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#" className="active">
                        Attach Screenshots
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#">
                        Reassign
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item as={Link} to="#">
                        Edit task
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#">
                        Remove
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Task settings</Card.Title>
            </Card.Header>
            <Card.Body className="task-setting btn-page">
              <div className="form-group">
                <Form>
                  <Form.Check className="custom-form-check" type="switch" id="custom-switch" label="Publish after save" defaultChecked />
                  <Form.Check className="custom-form-check" type="switch" id="custom-switch" label="Allow comments" defaultChecked />
                  <Form.Check
                    className="custom-form-check"
                    type="switch"
                    id="custom-switch"
                    label="Allow users to edit the task"
                    defaultChecked
                  />
                  <Form.Check className="custom-form-check" type="switch" id="custom-switch" label="Use task timer" />
                  <Form.Check className="custom-form-check" type="switch" id="custom-switch" label="Auto saving" />
                  <Form.Check className="custom-form-check" type="switch" id="custom-switch" label="Auto saving" />
                  <Form.Check className="custom-form-check" type="switch" id="custom-switch" label="Allow attachments" />
                </Form>
                <div className="row text-center mt-2">
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-secondary ">
                      Reset
                    </button>
                    <button type="button" className="btn btn-primary  ">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Revisions</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="taskboard-right-revision user-box">
                <div className="d-flex align-items-start">
                  <div className="media-left mx-2">
                    <Link to="#" className="btn btn-outline-primary btn-icon" role="button">
                      <i className="mx-1 fas fa-user-secret" />
                    </Link>
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <div className="chat-header f-w-400 mb-1">Drop the IE specific hacks for temporal inputs</div>
                    <p className="chat-header  text-muted">4 minutes ago</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="media-left mx-2">
                    <Link className="btn btn-outline-danger btn-icon" role="button">
                      <i className="mx-1 fas fa-anchor" />
                    </Link>
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <div className="chat-header f-w-400 mb-1">Add full font overrides for popovers and tooltips</div>
                    <p className="chat-header text-muted">36 minutes ago</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="media-left mx-2">
                    <Link to="#" className="btn btn-outline-warning btn-icon" role="button">
                      <i className="mx-1 fas fa-desktop" />
                    </Link>
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <div className="chat-header f-w-400 mb-1">created a new Design branch</div>
                    <p className="chat-header text-muted">2 month ago</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="media-left mx-2">
                    <Link to="#" className="btn btn-outline-success btn-icon" role="button">
                      <i className="mx-1 fas fa-briefcase" />
                    </Link>
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <div className="chat-header">merged Master and Dev branches</div>
                    <p className="chat-header  text-muted">6 month ago</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Attached Files</Card.Title>
            </Card.Header>
            <Card.Body className="task-attachment">
              <ul className="media-list p-0">
                <li className="mx-1 d-flex align-items-start m-b-15">
                  <div className="m-r-20 file-attach">
                    <i className="mx-1 far fa-file-word f-28 text-muted" />
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <Link to="#" className="m-b-5 d-block text-secondary">
                      Overdrew_scowled.doc
                    </Link>
                    <div className="text-muted">
                      <span>Size: 1.2Mb</span>
                      <span>
                        Added by{' '}
                        <Link to="#" className="text-secondary">
                          Winnie
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="float-end text-muted">
                    <i className="mx-1 fas fa-download f-18" />
                  </div>
                </li>
                <li className="mx-1 d-flex align-items-start m-b-15">
                  <div className="m-r-20 file-attach">
                    <i className="mx-1 far fa-file-powerpoint f-28 text-muted" />
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <Link to="#" className="m-b-5 d-block text-secondary">
                      And_less_maternally.pdf
                    </Link>
                    <div className="text-muted">
                      <span>Size: 0.11Mb</span>
                      <span>
                        Added by{' '}
                        <Link to="#" className="text-secondary">
                          Eugene
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="float-end text-muted">
                    <i className="mx-1 fas fa-download f-18" />
                  </div>
                </li>
                <li className="mx-1 d-flex align-items-start m-b-15">
                  <div className="m-r-20 file-attach">
                    <i className="mx-1 far fa-file-pdf f-28 text-muted" />
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <Link to="#" className="m-b-5 d-block text-secondary">
                      The_less_overslept.pdf
                    </Link>
                    <div className="text-muted">
                      <span>Size:5.9Mb</span>
                      <span>
                        Added by{' '}
                        <Link to="#" className="text-secondary">
                          Natalie
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="float-end text-muted">
                    <i className="mx-1 fas fa-download f-18" />
                  </div>
                </li>
                <li className="mx-1 d-flex align-items-start m-b-15">
                  <div className="m-r-20 file-attach">
                    <i className="mx-1 far fa-file-excel f-28 text-muted" />
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <Link to="#" className="m-b-5 d-block text-secondary">
                      Well_equitably.mov
                    </Link>
                    <div className="text-muted">
                      <span>Size:20.9Mb</span>
                      <span>
                        Added by{' '}
                        <Link to="#" className="text-secondary">
                          Jenny
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="float-end text-muted">
                    <i className="mx-1 fas fa-download f-18" />
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Assigned Users</Card.Title>
            </Card.Header>
            <Card.Body className="user-box assign-user">
              <div className="d-flex align-items-start">
                <div className="media-left media-middle me-3">
                  <Link to="#">
                    <img className="img-radius" src={avatar1} alt="chat-user" />
                  </Link>
                </div>
                <div style={{ flex: 'auto' }}>
                  <h6>Sortino media</h6>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="media-left media-middle me-3">
                  <Link to="#">
                    <img className="img-radius" src={avatar2} alt="chat-user" />
                  </Link>
                </div>
                <div style={{ flex: 'auto' }}>
                  <h6>Larry heading </h6>
                  <p>Web Designer</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="media-left media-middle me-3">
                  <Link to="#">
                    <img className="img-radius" src={avatar3} alt="chat-user" />
                  </Link>
                </div>
                <div style={{ flex: 'auto' }}>
                  <h6>Mark</h6>
                  <p>Chief Financial Officer (CFO)</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="media-left media-middle me-3">
                  <Link to="#">
                    <img className="img-radius" src={avatar1} alt="chat-user" />
                  </Link>
                </div>
                <div style={{ flex: 'auto' }}>
                  <h6>John Doe</h6>
                  <p>Senior Marketing Designer</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={8}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">
                <i className="fas fa-ticket-alt m-r-5" /> Ticket List Doesn&apos;t Support Commas
              </Card.Title>
              <button className="btn btn-primary float-end">
                <i className="fas fa-bell m-r-5" />
                Check in
              </button>
            </Card.Header>
            <Card.Body>
              <div className="m-b-20">
                <h6>Overview</h6>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="m-b-20">
                <h6>What we need</h6>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <div className="m-b-20 col-sm-12">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="text-primary f-14 m-b-10">1. The standard Lorem Ipsum passage</div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="text-primary f-14 m-b-10">2. The standard Lorem Ipsum passage</div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
              <div>
                <h6>Requirements</h6>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Table responsive>
                  <thead>
                    <tr className="text-uppercase">
                      <th className="text-center">#</th>
                      <th className="text-center">Task</th>
                      <th className="text-center">Due Date</th>
                      <th className="text-center">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-muted">
                    <tr>
                      <td>1</td>
                      <td>Design mockup</td>
                      <td>
                        {' '}
                        <i className="mx-1 fas fa-calendar" /> 22 December, 16
                      </td>
                      <td>The standard Lorem Ipsum</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Software Engineer</td>
                      <td>
                        {' '}
                        <i className="mx-1 fas fa-calendar" /> 01 December, 16
                      </td>
                      <td>The standard Lorem passage</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Photoshop And Illustrator</td>
                      <td>
                        {' '}
                        <i className="mx-1 fas fa-calendar" /> 15 December, 16
                      </td>
                      <td>The standard Lorem Ipsum</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Allocated Resource</td>
                      <td>
                        {' '}
                        <i className="mx-1 fas fa-calendar" /> 28 December, 16
                      </td>
                      <td>The standard Lorem passage</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Financial Controlle</td>
                      <td>
                        {' '}
                        <i className="mx-1 fas fa-calendar" /> 20 December, 16
                      </td>
                      <td>The standard Lorem Ipsum</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="float-start">
                <span className=" txt-primary">
                  {' '}
                  <i className="mx-1 fas fa-chart-line" /> Status:
                </span>
                <div className="dropdown-secondary d-inline-block">
                  <Dropdown className="ms-1">
                    <Dropdown.Toggle variant="primary" size="sm">
                      Open
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="#">
                        Show all
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#" className="active">
                        Open
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#">
                        On hold
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#">
                        Resolved
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#">
                        Closed
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item as={Link} to="#">
                        Duplicate
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#">
                        Don&apos;t fix
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="float-end d-flex m-t-10">
                <span>
                  <Link to="#" className="text-muted m-r-10 f-16">
                    <i className="mx-1 fas fa-pencil-alt" />{' '}
                  </Link>
                </span>
                <span className="m-r-10">
                  <Link to="#" className="text-muted f-16">
                    <i className="mx-1 fas fa-trash" />
                  </Link>
                </span>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">
                <i className="mx-1 fas fa-plus m-r-5" />
                Comments
              </Card.Title>
              <button type="button" className="btn btn-icon btn-primary float-end m-0">
                <i className="mx-1 fas fa-plus" />
              </button>
            </Card.Header>
            <Card.Body className="task-comment">
              <ul className="media-list p-0">
                <li className="mx-1 d-flex align-items-start">
                  <div className="media-left me-3">
                    <Link to="#">
                      <img className="media-object img-radius comment-img" src={avatar1} alt="Generic placeholder" />
                    </Link>
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <h6 className="media-heading txt-primary">
                      Lorem Ipsum <span className="f-12 text-muted ms-1">Just now</span>
                    </h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="m-t-10 m-b-25">
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Reply
                        </Link>
                      </span>
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Edit
                        </Link>{' '}
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-startmt-2">
                      <Link to="#" className="media-left me-3">
                        <img className="media-object img-radius comment-img" src={avatar2} alt="Generic placeholder" />
                      </Link>
                      <div style={{ flex: 'auto' }}>
                        <h6 className="media-heading txt-primary">
                          Lorem Ipsum <span className="f-12 text-muted ms-1">Just now</span>
                        </h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                          industry&apos;s standard dummy text ever since the 1500s.
                        </p>
                        <div className="m-t-10 m-b-25">
                          <span>
                            <Link to="#" className="m-r-10 text-secondary">
                              Reply
                            </Link>
                          </span>
                          <span>
                            <Link to="#" className="m-r-10 text-secondary">
                              Edit
                            </Link>{' '}
                          </span>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mx-1 d-flex align-items-startmt-2">
                  <div className="media-left me-3">
                    <Link to="#">
                      <img className="media-object img-radius comment-img" src={avatar3} alt="Generic placeholder" />
                    </Link>
                  </div>
                  <div style={{ flex: 'auto' }}>
                    <h6 className="media-heading txt-primary">
                      Lorem ipsum<span className="f-12 text-muted mx-1">Just now</span>
                    </h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="m-t-10 m-b-25">
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Reply
                        </Link>
                      </span>
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Edit
                        </Link>{' '}
                      </span>
                    </div>
                    <hr />
                  </div>
                </li>
              </ul>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add Task..." />
                <div className="input-group-append">
                  <button className="btn btn-primary btn-icon" type="button">
                    <i className="mx-1 fas fa-search" />
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TaskDetails;
