import style from "./modal.module.scss";

export const Modal = () => {
  return (
    <div className={[style["modal"]]}>
      <button>x</button>
      <p>Modfal content</p>
    </div>
  );
};
