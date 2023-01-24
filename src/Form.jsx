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
      />

      <InputHandler
        labelName={"CARD NUMBER"}
        type={"number"}
        nameInput={"number"}
        placeholder={"e.g 1234 5678 9123 0000"}
        register={register}
        errors={errors}
      />
      <div className="inputHandler_threeComponent">
        <div className="inputHandler inputHandler_expDate">
          <label>EXP. DATE (MM/YY)</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              placeholder="MM"
              {...register("month")}
              style={{ maxWidth: "40px" }}
            />
            <input
              type="text"
              placeholder="YY"
              {...register("year")}
              style={{ maxWidth: "40px" }}
            />
          </div>
        </div>

        <div className="inputHandler inputHandler_cvc">
          <label>CVC</label>
          <input
            {...register("cvc")}
            type="text"
            placeholder="e.g 123"
            style={{ maxWidth: "80px" }}
          />
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
