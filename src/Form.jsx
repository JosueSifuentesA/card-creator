import { useForm } from "react-hook-form";
import "./form.css";
import InputHandler from "./InputHandler";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const form = (
    <form className="container_form" onSubmit={handleSubmit(onSubmit)}>
      <InputHandler
        labelName={"CARDHOLDER NAME"}
        nameInput={"name"}
        placeholder={"e.g Jane Appleseed"}
        register={register}
        errors={errors}
        maxCharacterProp={15}
      />

      <InputHandler
        labelName={"CARD NUMBER"}
        type={"number"}
        nameInput={"number"}
        placeholder={"e.g 1234 5678 9123 0000"}
        register={register}
        errors={errors}
        maxCharacterProp={16}
        minCharacterProp={16}
      />
      <div className="inputHandler_threeComponent">
        <div className="inputHandler inputHandler_expDate">
          <label>EXP. DATE (MM/YY)</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              placeholder="MM"
              style={{ maxWidth: "40px" }}
              {...register("month", {
                required: { value: true, message: "Este campo es obligatorio" },
                maxLength: { value: 2, message: "Maximo 2 caracteres" },
                minLength: { value: 2, message: "Minimo 2 caracteres" },
              })}
            />
            {errors.month && (
              <p style={{ color: "red" }}>
                {errors.month?.type === "required"
                  ? errors.month.message
                  : null}
                {errors.month?.type === "maxLength"
                  ? errors.month.message
                  : null}
                {errors.month?.type === "minLength"
                  ? errors.month.message
                  : null}
              </p>
            )}
            <input
              type="text"
              placeholder="YY"
              style={{ maxWidth: "40px" }}
              {...register("year", {
                required: { value: true, message: "Este campo es obligatorio" },
                maxLength: { value: 2, message: "Maximo 2 caracteres" },
                minLength: { value: 2, message: "Minimo 2 caracteres" },
              })}
            />
            {errors.year && (
              <p style={{ color: "red" }}>
                {errors.year?.type === "required" ? errors.year.message : null}
                {errors.year?.type === "maxLength" ? errors.year.message : null}
                {errors.year?.type === "minLength" ? errors.year.message : null}
              </p>
            )}
          </div>
        </div>

        <div className="inputHandler inputHandler_cvc">
          <label>CVC</label>
          <input
            {...register("cvc", {
              required: { value: true, message: "Este campo es obligatorio" },
              maxLength: { value: 3, message: "Maximo 3 caracteres" },
              minLength: { value: 3, message: "Minimo 3 caracteres" },
            })}
            type="text"
            placeholder="e.g 123"
            style={{ maxWidth: "80px" }}
          />

          {errors.cvc && (
            <p style={{ color: "red" }}>
              {errors.cvc?.type === "required" ? errors.cvc.message : null}
              {errors.cvc?.type === "maxLength" ? errors.cvc.message : null}
              {errors.cvc?.type === "minLength" ? errors.cvc.message : null}
            </p>
          )}
        </div>
      </div>
      <button className="form_button" type="submit">
        Confirm
      </button>
    </form>
  );

  return form;
};

export default Form;
