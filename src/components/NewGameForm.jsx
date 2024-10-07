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
      <TextImput value={title} setValue={setTitle} />
      <TextImput value={cover} setValue={setCover} />
      <button>Adicionar</button>
    </form>
  );
}

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};
