import backgroundImg from "../assets/react-logo-background.png"

export default function MainContent() {
  return (
    <main className="page-main inter-text">
      <h1 className="main__header">React: Like LEGO for the Web!</h1>
      <ul className="main__list">
        <li className="list__item">React lets you build with blocks, not chaos.</li>
        <li className="list__item">Components = LEGO bricks for UI.</li>
        <li className="list__item">Break stuff? React just shrugs and warns.</li>
        <li className="list__item">JSX is sweet HTML with superpowers.</li>
        <li className="list__item">Vanilla JS feels ancient after React.</li>
      </ul>

      <img src={backgroundImg} alt="react logo" className="background-logo" />
    </main>
  )
}