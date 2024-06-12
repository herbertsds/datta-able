import React from 'react';
import { Row, Col, Card, Button, Table } from 'react-bootstrap';

import { notice, info, success, error, alert, defaultModules, Stack, PNotifyConfirm } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyDesktop from '@pnotify/desktop';

import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const defaultPNotify = () => {
  notice({
    title: 'Default Notice',
    text: "Check me out! I'm notice"
  });
};

const alertPNotify = () => {
  alert({
    title: 'Alert Notice',
    text: "Check me out! I'm notice"
  });
};

const successPNotify = () => {
  success({
    title: 'Success Notice',
    text: "Check me out! I'm notice"
  });
};

const infoPNotify = () => {
  info({
    title: 'Info Notice',
    text: "Check me out! I'm notice"
  });
};

const errorPNotify = () => {
  error({
    title: 'Error Notice',
    text: "Check me out! I'm notice"
  });
};

const successDesktopPNotify = () => {
  success({
    title: 'Success Desktop Notice',
    text: "I'm a success desktop notification, if you have given me a permission.",
    modules: new Map([...defaultModules, [PNotifyDesktop, {}]])
  }).on('click', (e) => {
    if (
      e.target.className.match('ui-pnotify-sticker') ||
      e.target.className.match('ui-pnotify-closer') ||
      e.target.className.match('brighttheme-icon-sticker') ||
      e.target.className.match('brighttheme-icon-closer')
    ) {
      return;
    }
    alert('Hey! You clicked the desktop notification!');
  });
};

const errorDesktopPNotify = () => {
  error({
    title: 'Error Desktop Notice',
    text: "I'm a error desktop notification, if you have given me a permission.",
    modules: new Map([...defaultModules, [PNotifyDesktop, {}]])
  }).on('click', (e) => {
    if (
      e.target.className.match('ui-pnotify-sticker') ||
      e.target.className.match('ui-pnotify-closer') ||
      e.target.className.match('brighttheme-icon-sticker') ||
      e.target.className.match('brighttheme-icon-closer')
    ) {
      return;
    }
    alert('Hey! You clicked the desktop notification!');
  });
};

const warningDesktopPNotify = () => {
  notice({
    title: 'Warning Desktop Notice',
    text: "I'm a warning desktop notification, if you have given me a permission.",
    modules: new Map([...defaultModules, [PNotifyDesktop, {}]])
  }).on('click', (e) => {
    if (
      e.target.className.match('ui-pnotify-sticker') ||
      e.target.className.match('ui-pnotify-closer') ||
      e.target.className.match('brighttheme-icon-sticker') ||
      e.target.className.match('brighttheme-icon-closer')
    ) {
      return;
    }
    alert('Hey! You clicked the desktop notification!');
  });
};

const infoDesktopPNotify = () => {
  info({
    title: 'Info Desktop Notice',
    text: "I'm a info desktop notification, if you have given me a permission.",
    modules: new Map([...defaultModules, [PNotifyDesktop, {}]])
  }).on('click', (e) => {
    if (
      e.target.className.match('ui-pnotify-sticker') ||
      e.target.className.match('ui-pnotify-closer') ||
      e.target.className.match('brighttheme-icon-sticker') ||
      e.target.className.match('brighttheme-icon-closer')
    ) {
      return;
    }
    alert('Hey! You clicked the desktop notification!');
  });
};

const topLeftPNotify = () => {
  if (typeof window.stackTopLeft === 'undefined') {
    window.stackTopLeft = new Stack({
      dir1: 'down',
      dir2: 'right',
      firstpos1: 25,
      firstpos2: 25,
      push: 'top',
      maxStrategy: 'close'
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    stack: window.stackTopLeft,
    type: 'success'
  };
  notice(opts);
};

const bottomLeftPNotify = () => {
  if (typeof window.stackBottomLeft === 'undefined') {
    window.stackBottomLeft = new Stack({
      dir1: 'right',
      dir2: 'up',
      firstpos1: 25,
      firstpos2: 25,
      push: 'top',
      maxStrategy: 'close'
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    stack: window.stackBottomLeft,
    type: 'success'
  };
  notice(opts);
};

const bottomRightPNotify = () => {
  if (typeof window.stackBottomRight === 'undefined') {
    window.stackBottomRight = new Stack({
      dir1: 'up',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
      push: 'top',
      maxStrategy: 'close'
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    stack: window.stackBottomRight,
    type: 'success'
  };
  notice(opts);
};

const customLeftPNotify = () => {
  if (typeof window.stackCustomLeft === 'undefined') {
    window.stackCustomLeft = new Stack({
      dir1: 'right',
      dir2: 'down',
      firstpos1: 200,
      firstpos2: 200,
      maxStrategy: 'close'
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    stack: window.stackCustomLeft,
    type: 'success'
  };
  success(opts);
};

const customBottomPNotify = () => {
  if (typeof window.stackCustomBottom === 'undefined') {
    window.stackCustomBottom = new Stack({
      dir1: 'left',
      dir2: 'up',
      firstpos1: 200,
      firstpos2: 200,
      maxStrategy: 'close'
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    stack: window.stackCustomBottom,
    type: 'success'
  };
  success(opts);
};

const barTopPNotify = () => {
  if (typeof window.stackBarTop === 'undefined') {
    window.stackBarTop = new Stack({
      dir1: 'down',
      firstpos1: 0,
      spacing1: 2
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    addClass: 'stack-bar-top',
    shadow: false,
    width: '100%',
    stack: window.stackBarTop
  };
  info(opts);
};

const barBottomPNotify = () => {
  if (typeof window.stackBarBottom === 'undefined') {
    window.stackBarBottom = new Stack({
      dir1: 'up',
      firstpos1: 0,
      spacing1: 2
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    stack: window.stackBarBottom,
    width: '100%',
    type: 'success'
  };
  info(opts);
};

const noTitlePNotify = () => {
  notice({
    title: false,
    text: "Check me out! I'm a notice without title.",
    icon: false
  });
};

const richContentPNotify = () => {
  notice({
    title: '<b>Rich content notice</b>',
    titleTrusted: true,
    text: `Look at my beautiful <strong>strong</strong>, <a href='#' class='alert-link'>linked</a>, <em>emphasized</em>, and <u>underlined</u> text with <i class='icon-make-group' /> icon.`,
    textTrusted: true
  });
};

const closeOnClickPNotify = () => {
  const notices = notice({
    title: 'Click Close Notice',
    text: 'Click me anywhere to dismiss me.',
    closer: false,
    sticker: false
  });
  notices.on('click', () => {
    notices.close();
  });
};

const customIconButtonPNotify = () => {
  notice({
    title: 'Custom Button Icons Notice',
    text: 'Check me out! My sticker and close buttons have custom icons!',
    hide: false,
    icons: {
      closer: 'fas fa-bomb',
      sticker: 'fas',
      stuck: 'fa-hourglass',
      unstuck: 'fa-anchor'
    }
  });
};

const dynamicProgressButtonPNotify = () => {
  let percent = 0;
  const notice = info({
    text: 'Please Wait',
    icon: 'fa fa-spinner fa-pulse',
    hide: false,
    shadow: false,
    width: '200px',
    closer: false,
    sticker: false
  });

  setTimeout(() => {
    notice.update({
      title: false
    });
    const interval = setInterval(() => {
      percent += 2;
      const options = {
        text: `${percent}% complete.`
      };
      if (percent === 80) {
        options.title = 'Almost There';
      }
      if (percent >= 100) {
        window.clearInterval(interval);
        options.title = 'Done!';
        options.type = 'success';
        options.hide = true;
        options.icon = 'fa fa-check';
        options.shadow = true;
        options.width = '360px';
        options.modules = {
          Buttons: {
            closer: true,
            sticker: true
          }
        };
      }
      notice.update(options);
    }, 120);
  }, 2000);
};

const multiLinePNotify = () => {
  const notices = notice({
    title: 'Input Needed',
    text: 'Write me a poem, please.',
    icon: 'fa fa-question-circle',
    hide: false,
    modules: new Map([
      ...defaultModules,
      [
        PNotifyConfirm,
        {
          prompt: true,
          promptMultiLine: true,
          promptValue: 'Roses are red,\nViolets are blue,\n'
        }
      ]
    ])
  });
  notices.on('pnotify:confirm', (e) => {
    notices.cancelClose();
    notices.update({
      title: 'Your Poem',
      text: e.detail.value,
      icon: true,
      type: 'success',
      hide: true,
      closer: true,
      sticker: true,
      modules: new Map(defaultModules)
    });
  });
  notices.on('pnotify:cancel', () => {
    notices.cancelClose();
    notices.update({
      title: "You Don't Like Poetry",
      text: 'Roses are dead,\nViolets are dead,\nI suck at gardening.',
      icon: true,
      type: 'info',
      hide: true,
      closer: true,
      sticker: true,
      modules: new Map(defaultModules)
    });
  });
};

const promptPNotify = () => {
  const notices = notice({
    title: 'Input Needed',
    text: 'What side would you like?',
    icon: 'fa fa-question-circle',
    hide: false,
    closer: false,
    sticker: false,
    destroy: true,
    modules: new Map([
      ...defaultModules,
      [
        PNotifyConfirm,
        {
          prompt: true
        }
      ]
    ])
  });
  notices.on('pnotify.confirm', (e) => {
    notices.cancelClose();
    notices.update({
      title: "You've Chosen a Side",
      text: `You want ${e.value}.`,
      icon: true,
      type: 'success',
      hide: true,
      closer: false,
      sticker: false,
      destroy: true,
      modules: new Map([
        ...defaultModules,
        [
          PNotifyConfirm,
          {
            prompt: true
          }
        ]
      ])
    });
  });
  notices.on('pnotify.cancel', () => {
    notices.cancelClose();
    notices.update({
      title: "You Don't Want a Side",
      text: 'No soup for you!',
      icon: true,
      type: 'error',
      hide: false,
      closer: false,
      sticker: false,
      destroy: true,
      modules: new Map([
        ...defaultModules,
        [
          PNotifyConfirm,
          {
            prompt: true
          }
        ]
      ])
    });
  });
};

const confirmPNotify = () => {
  const notices = notice({
    title: 'Confirmation Needed',
    text: 'Are you sure?',
    icon: 'fa fa-question-circle',
    hide: false,
    modules: new Map([
      ...defaultModules,
      [
        PNotifyConfirm,
        {
          confirm: true
        }
      ]
    ])
  });
  notices.on('pnotify.confirm', () => {
    alert('Ok, cool.');
  });
  notices.on('pnotify.cancel', () => {
    alert('Oh ok. Chicken, I see.');
  });
};

const stickeyPNotify = () => {
  notice({
    title: 'Sticky Notice',
    text: "Check me out! I'm a sticky notice. You'll have to close me yourself.",
    hide: false
  });
};

const permanentPNotify = () => {
  notice({
    title: 'Permanent Buttons Notice',
    text: "My buttons are really lonely, so they're gonna hang out with us.",
    closerHover: false,
    stickerHover: false
  });
};

const AdvancePNotify = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://www.npmjs.com/package/pnotify"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Notification Alert</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Default Notice</td>
                    <td>
                      <Button size="sm" variant="inverse" onClick={defaultPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>notice</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Alert Notice</td>
                    <td>
                      <Button size="sm" variant="primary" onClick={alertPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>notice</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Success Notice</td>
                    <td>
                      <Button size="sm" variant="success" onClick={successPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>success</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Info Notice</td>
                    <td>
                      <Button size="sm" variant="info" onClick={infoPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>info</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Error Notice</td>
                    <td>
                      <Button size="sm" variant="danger" onClick={errorPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>error</code> with <code>PNotify</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Desktop Alert</Card.Title>
            </Card.Header>
            <Card.Body className="btn-page">
              <Card.Text>
                Use variant method from notification alert and set <code>option</code> like,{' '}
                <code>{'modules:{ Desktop: { desktop: true}}'}</code> with <code>PNotify</code>
              </Card.Text>
              <Button variant="success" onClick={successDesktopPNotify}>
                <i className="feather icon-bell" /> Click Here!
              </Button>
              <Button variant="info" onClick={infoDesktopPNotify}>
                <i className="feather icon-bell" /> Click Here!
              </Button>
              <Button variant="warning" onClick={warningDesktopPNotify}>
                <i className="feather icon-bell" /> Click Here!
              </Button>
              <Button variant="danger" onClick={errorDesktopPNotify}>
                <i className="feather icon-bell" /> Click Here!
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Notification Position</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Top Left</td>
                    <td>
                      <Button size="sm" onClick={topLeftPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like,{' '}
                      <code>{"stack:{'dir1': 'down', 'dir2': 'right', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"}</code> with{' '}
                      <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Bottom Left</td>
                    <td>
                      <Button size="sm" onClick={bottomLeftPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like,{' '}
                      <code>{"stack:{'dir1': 'right', 'dir2': 'up', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"}</code> with{' '}
                      <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Bottom Right</td>
                    <td>
                      <Button size="sm" onClick={bottomRightPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like, <code>{"stack:{'dir1': 'up', 'dir2': 'left', 'firstpos1': 25, 'firstpos2': 25}"}</code>{' '}
                      with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Left</td>
                    <td>
                      <Button size="sm" onClick={customLeftPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like,{' '}
                      <code>{"stack:{'dir1': 'right', 'dir2': 'down', 'firstpos1': 200, 'firstpos2': 200}"}</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Right</td>
                    <td>
                      <Button size="sm" onClick={customBottomPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like,{' '}
                      <code>{"stack:{'dir1': 'left', 'dir2': 'up', 'firstpos1': 200, 'firstpos2': 200}"}</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Top</td>
                    <td>
                      <Button size="sm" onClick={barTopPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like, <code>{"stack:{'dir1': 'down', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"}</code>{' '}
                      with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Bottom</td>
                    <td>
                      <Button size="sm" onClick={barBottomPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like, <code>{"stack:{'dir1': 'up', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"}</code> with{' '}
                      <code>PNotify</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Notification Position</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>No Title</td>
                    <td>
                      <Button size="sm" onClick={noTitlePNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like, <code>{'title:false, icon: false'}</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Rich Title/Content</td>
                    <td>
                      <Button size="sm" onClick={richContentPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>option</code> like, <code>{'titleTrusted:true, textTrusted: true'}</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Click to Close</td>
                    <td>
                      <Button size="sm" onClick={closeOnClickPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>closeOnClickPNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Icon Button</td>
                    <td>
                      <Button size="sm" onClick={customIconButtonPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>customIconButtonPNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Dynamic Progress Button</td>
                    <td>
                      <Button size="sm" onClick={dynamicProgressButtonPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>dynamicProgressButtonPNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Multi Line Props</td>
                    <td>
                      <Button size="sm" onClick={multiLinePNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>multiLinePNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Prompt Button</td>
                    <td>
                      <Button size="sm" onClick={promptPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>promptPNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Confirm Button</td>
                    <td>
                      <Button size="sm" onClick={confirmPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>confirmPNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Stickey Button</td>
                    <td>
                      <Button size="sm" onClick={stickeyPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>stickeyPNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Permanent Button</td>
                    <td>
                      <Button size="sm" onClick={permanentPNotify}>
                        <i className="feather icon-bell" /> Click Here!
                      </Button>
                    </td>
                    <td>
                      Set <code>function</code> like, <code>permanentPNotify</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AdvancePNotify;
