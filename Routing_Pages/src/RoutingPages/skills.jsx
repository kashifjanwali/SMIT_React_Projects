import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <>
      <h3>My Skills</h3>
      <h5>My Skills in web development</h5>
      <ul>
        <li>
          <Link to="/frontend-skills">Frontend Skills:</Link>
        </li>
        <li>
          <Link to="/backend-skills">Backend Skills:</Link>
        </li>
      </ul>
    </>
  );
}
