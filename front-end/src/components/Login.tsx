import Input from "./Input";
import { useState } from "react";
import type { SyntheticEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!regexEmail.test(email)) {
      alert("Formato de email inválido");
      return;
    }
    if (!regexPassword.test(password)) {
      alert("Formato de senha inválido");
      return;
    }
    if (email === "" && password === "") {
      alert("Preencha todos os campos");
      return;
    }
    if (email != "" && password != "") {
      alert("Login realizado com sucesso");
      return;
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 bg-[#161410] justify-center items-center">
        <img src="./logoarrumada_120x120.png" alt="" />
        <Input
          id="eml"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative w-full">
          <Input
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src="iconeDoOlho_100x67.png"
            alt="Mostrar senha"
            draggable="false"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 cursor-pointer"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
            onMouseLeave={() => setShowPassword(false)}
          />
        </div>

        <button className="bg-[#C92A0E]  mt-4 w-full cursor-pointer py-2 rounded-md text-white font-bold text-sm">
          Login
        </button>

        <button
          type="button"
          className="bg-white mt-0 border-2 border-[#C92A0E] w-full cursor-pointer py-2 rounded-md text-[#C92A0E] font-bold text-sm"
        >
          Não tenho uma conta
        </button>
      </div>
    </form>
  );
};

export default Login;
