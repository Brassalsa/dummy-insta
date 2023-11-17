"use client";

import { UserContext } from "@/contexts/UserContext";
import { FormEvent, useContext, useState } from "react";

function Login({ onSuccess }: { onSuccess?: () => any }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { createUser } = useContext(UserContext);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createUser(name, email);
    onSuccess?.();
  }

  return (
    <section className="w-[80%] sm:w-[60%] max-w-3xl mt-4 flex flex-col gap-3 sm:mx-auto">
      <h1 className="text-2xl font-bold mb-9">Login</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-1"
          placeholder="Name"
        />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="p-1"
          placeholder="abc@xyz"
        />
        <button className="p-2 bg-blue-800 active:bg self-end mx-4">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
