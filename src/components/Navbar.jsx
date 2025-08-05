import reactLogo from "../assets/react-logo.png"

export default function Navbar() {
  return (
    <header className="page-header">
      <nav className="page-nav">
        <img src={reactLogo} alt="react logo" className="react-logo"/>
        <span className="react-text inter-text">React Simple Project</span>
      </nav>
    </header>
  )
}