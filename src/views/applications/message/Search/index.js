import PropTypes from 'prop-types';
import React from 'react';

const Search = (props) => {
  const { onChange } = props;
  return (
    <React.Fragment>
      <div className="h-list-header m-b-5">
        <div className="input-group">
          <input type="text" id="msg-friends" className="form-control" placeholder="Search Friend . . ." onChange={onChange} />
          <div className="input-group-text">
            <i className="feather icon-search" style={{ fontSize: 28, color: '#adb7be' }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Search.propTypes = {
  onChange: PropTypes.func
};

export default Search;
