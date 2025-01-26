import { useNavigate } from "react-router-dom";
const CustomButton = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (props.to) {
      navigate(props.to); //  Navigate to the specified route
    }
    if (props.onClick) {
      props.onClick(e); // Optionally call additional onclick logic
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        props.style
          ? props.style
          : "bg-[#228B22] rounded-[0.25rem] text-white p-[0.625rem] font-semibold"
      }
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
