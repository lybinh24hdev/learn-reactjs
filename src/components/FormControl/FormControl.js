import classes from './FormControl.module.css'

const FormControl = (props) => {

    const { isValid, label,  id, type, value, onChange, onBlur} = props;

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
}

export default FormControl;