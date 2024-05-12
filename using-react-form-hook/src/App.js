import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "124324",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((res) =>
        setTimeout(() => {
          res();
        }, 1000),
      );
      throw new Error("aslfj");
      console.log(data);
    } catch (error) {
      setError("root", { message: "from main" });
    }
  };
  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "must includes @";
            }
            return true;
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && <div>{errors.email.message}</div>}
      <input
        {...register("password", {
          minLength: { value: 3, message: "miniLen" },
          required: "password is required",
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <div>{errors.password.message}</div>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "...Loading" : "submit"}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
}

export default App;
