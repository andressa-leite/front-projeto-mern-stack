export function TextLimit({ text, limit }) {
  const TextLimited =
    text.lenght > limit ? `${text.substring(0, limit)}...` : text;

  return <p>TextLimited</p>;
}

/* //se esse texto form maior do que o limite, ele cai no substring que vai ditar o limite de caracteres.
    //se não for maior que o limite, ele mostra o texto completo. */
