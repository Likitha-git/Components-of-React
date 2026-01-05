import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Components</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/button">Button</Link></li>
        <li><Link to="/input">Input</Link></li>
        <li><Link to="/toggle">Toggle</Link></li>
        <li><Link to="/loader">Loader</Link></li>
        <li><Link to="/card">Card</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
