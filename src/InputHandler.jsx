const InputHandler = ({
  maxCharacterProp = 0,
  minCharacterProp = 0,
  labelName,
  placeholder,
  register,
  errors,
  nameInput,
  type = "text",
}) => {
  const maxCharacter = parseInt(maxCharacterProp);
  const minCharacter = parseInt(minCharacterProp);

  //console.log(typeof maxCharacterProp);
  return (
    <div className="inputHandler">
      <label>{labelName}</label>
      <input
        type={type}
        placeholder={`${placeholder}`}
        {...register(`${nameInput}`, {
          required: true,
          maxLength: maxCharacter,
          minLength: minCharacterProp,
        })}
      />
      {errors[nameInput] && (
        <p style={{ color: "red", height: "22px" }}>
          {errors[nameInput]?.type === "required"
            ? "Este espacio es obligatorio"
            : null}
          {errors[nameInput]?.type === "maxLength"
            ? `El nombre solo puede tener un maximo de ${maxCharacter}`
            : null}
          {errors[nameInput]?.type === "minLength"
            ? `El nombre solo puede tener un minimo de ${minCharacter}`
            : null}
        </p>
      )}
    </div>
  );
};

export default InputHandler;
