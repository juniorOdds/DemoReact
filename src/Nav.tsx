import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>home</button>
      <button>login</button>
    </div>
  );
};
export default Nav;
