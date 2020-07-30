import React from 'react';

function FormField({ nome, onChange }) {
  return (
    <div>
      <label>
        Nome da Categoria:
            <input
          type="text"
          name="nome"
          value={nome}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;