const InputHandler = ({
  labelName,
  placeholder,
  register,
  errors,
  nameInput,
  type = "text",
}) => {
  console.log(errors);

  return (
    <div className="inputHandler">
      <label>{labelName}</label>
      <input
        type={type}
        placeholder={`${placeholder}`}
        {...register(`${nameInput}`, { required: true, maxLength: 15 })}
      />
      {errors[nameInput] && <p>{errors[nameInput].message}</p>}
    </div>
  );
};

export default InputHandler;
