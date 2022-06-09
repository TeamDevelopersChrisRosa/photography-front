import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  min,
  max,
  className
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div /* className={value.length > 0 ? 'field field--has-content' : 'field'} */>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className={className? className : 'field-input'}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
      />
    </div>
  );
};

Field.propTypes = {
};

// Valeurs par défaut pour les props
Field.defaultProps = {
};

// == Export
export default Field;
