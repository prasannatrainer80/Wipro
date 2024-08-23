import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email("Please Enter Valid Email Address").required("Please Enter Email Mandetory"),
    password: yup.string().min(8, "Minimum 8 characters").max(32, "Max 32 charactrs").required("Please Enter Password"),
  });

const Test = () => {
const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    alert(data);
    console.log({ data });
    reset();
  };
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <h2>Lets sign you in.</h2>
          <br />
        Email : 
          <input {...register("email")} placeholder="email" type="email" />
            <p>{errors.email?.message}</p>
            <br />
        Password : 
            <input
                {...register("password")}
                placeholder="password"
                type="password"
                
                    />
                <p>{errors.password?.message}</p>
      <br />
    
          <button type="submit">Sign in</button>
        </form>
      );
}

export default Test;