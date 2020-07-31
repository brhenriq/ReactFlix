import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import FormField from '../../../components/FormField'


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    });
  }

  function handleSubmit(e) {
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

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    fetch(url).then(async (response) => {
      const res = await response.json();
      setCategorias([
        ...res,
      ]);
    });
  }, []);

  return (
    <TemplateBase>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleValues}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleValues}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleValues}
        />

        <button>
          Cadastrar
        </button>
      </form>

      {categorias.length === 0 &&(
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
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