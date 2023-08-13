import { useState } from "react";

export default function Form() {
  const [Firstname, SetFirstname] = useState("");
  let [Lastname, Setlastname] = useState("");
  const [Fullname, setFullName] = useState("");

  function handleFirstNameChange(e) {
    SetFirstname(e.target.value);
    setFullName(e.target.value + " " + Setlastname);
  }
  function handleLastNameChange(e) {
    Setlastname(e.target.value);
    setFullName(Firstname + " " + e.target.value);
  }

  return (
    <>
      <h1>Let's type your name first & Last</h1>
      <label>FirstName:</label>
      <input type="text" value={Firstname} onChange={handleFirstNameChange} />

      <br />
      <br />
      <label>LastName:</label>
      <input
        type="text"
        value={Lastname}
        onChange={handleLastNameChange}
      />
      <br />

      <h4> your first name is here == {Firstname}</h4>
      <h4>Your last name is here=== {Lastname}</h4>
      <h4>your CNIC name is here== {`${Firstname} ${Lastname}`}</h4>
      <h4>your CNIC name is here== {Fullname}</h4>
    </>
  );
}
