import { useState } from "react";
export const MyInputs = () => {
  const [user, setUser] = useState({});

  const handleInutval = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={user.email}
        placeholder="email"
        onChange={(event) => handleInutval(event)}
      />
      <input
        name="password"
        type="password"
        className="password"
        value={user.password}
        placeholder="password"
        onChange={(event) => handleInutval(event)}
      />
      <input
        name="fName"
        type="text"
        value={user.fName}
        placeholder="first name"
        onChange={(event) => handleInutval(event)}
      />
      <input
        name="lName"
        type="text"
        value={user.lName}
        placeholder="last name"
        onChange={(event) => handleInutval(event)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
