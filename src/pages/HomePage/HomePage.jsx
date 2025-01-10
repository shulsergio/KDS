import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.box}>
        <div className={css.logo}></div>
        <h1>KDS</h1>
        <p>Let’s Start</p>
      </div>
    </>
  );
}
