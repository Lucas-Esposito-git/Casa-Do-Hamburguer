import Input from "./Input";
import { useState } from "react";
import type { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

const registerSchema = z
  .object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
    cep: z
      .string()
      .regex(/^\d{5}-\d{3}$/, "CEP deve estar no formato 00000-000"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = registerSchema.safeParse({
      nome,
      email,
      password: Password,
      confirmPassword,
      cep,
    });

    if (!result.success) {
      alert("Dados inválidos");
      return;
    }

    alert("Cadastro válido!");
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 bg-[#161410] justify-center items-center">
        <img src="./logoarrumada_120x120.png" alt="" />
        <Input
          id=""
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          id="eml"
          placeholder="E-mail"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative w-full">
          <Input
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            value={Password}
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
        <Input
          id=""
          placeholder="Confirme sua senha"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          id=""
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <button className="bg-[#C92A0E]  mt-4 w-full cursor-pointer py-2 rounded-md text-white font-bold text-sm">
          Criar conta
        </button>
        <button
          type="button"
          className="bg-white mt-0 border-2 border-[#C92A0E] w-full cursor-pointer py-2 rounded-md text-[#C92A0E] font-bold text-sm"
          onClick={() => navigate("/login")}
        >
          Já tenho uma conta
        </button>
      </div>
    </form>
  );
};

export default Register;
