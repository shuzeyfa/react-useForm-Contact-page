import { useForm, SubmitHandler } from "react-hook-form";
import "./contact.css";

function Contact() {
  type val = {
    username: String;
    email: String;
    message: String;
  };

  const { register, handleSubmit, formState: {errors} } = useForm<val>();

  function submit() {
    alert("submitted seccessfully!");
  }

  function fail(){
    alert("There is an error!!")
  }
  return (
    <>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("username", {
            required: { value: true, message: "Empty Name is not allowed!" },
            minLength: { value: 3, message: "Min 3 Char!" },
          })}
        />
        <br />
        {errors.username && <p>{errors.username.message}</p>}
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          {...register("email", {
            required: {
              value: true,
              message: "Empty Email is not allowed!",
            },
            pattern: {
              value: /^[a-zA-Z0-9.+_%]+@gmail\.com$/i,
              message: "Invalid email format!",
            },
          })}
        />
        <br /> {errors.email && <p>{errors.email.message}</p>} <br />
        <textarea
          id=""
          placeholder="Enter your Message"
          {...register("message", {
            required: {
              value: true,
              message: "you should Enter your message first!",
            },
            minLength: {
              value: 10,
              message: "Message should have at least 10char"
            }
          })}
        />
        <br />
        {errors.message && <p>{errors.message.message}</p>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact;
