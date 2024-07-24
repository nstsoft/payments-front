import { IButtonProps } from "../../interfaces/props/buttonProps";

const Button = (props: IButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
