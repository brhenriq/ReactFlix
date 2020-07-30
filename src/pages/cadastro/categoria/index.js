import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import FormField from '../../../components/FormField'


function CadastroCategoria() {
  const valoresIniciais ={
    nome: '',
    descricao: '',
    cor: ''
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]:valor
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  function handleValues(e) {
    //const { getAttribute, value } = e.target;
    setValue(
      e.target.getAttribute('name'), 
      e.target.value
      );
  }

  return (
    <TemplateBase>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          value={values.nome}
          onChange={handleValues}
        />

          <div>
          <label>
            Descrição:
            <textarea
              value={values.descricao}
              name="descricao"
              onChange={handleValues}
            />
          </label>
        </div>
        
        <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleValues}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>
      
      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </TemplateBase>
  )
}

export default CadastroCategoria;