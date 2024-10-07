import { useState } from "react";
import PropTypes from "prop-types";
import TextImput from "./TextInput";

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextImput id="title" label="Título: " value={title} setValue={setTitle} />
      <TextImput id="cover" label="Capa:" value={cover} setValue={setCover} />
      <button>Adicionar à Biblioteca</button>
    </form>
  );
}

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};
