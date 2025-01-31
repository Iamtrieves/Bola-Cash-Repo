import { useNavigate } from "react-router-dom";

const CustomButton = (props) => {
  let navigate;
  try {
    navigate = useNavigate();
  } catch (error) {
    navigate = null; // Prevents crashes
  }

  const handleClick = (e) => {
    if (props.to && navigate) {
      navigate(props.to);
    }
    if (props.onClick) {
      props.onClick(e);
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
