import { useState } from "react";

type Props = React.ComponentProps<"form">;

export function Newsletter({ ...rest }: Props) {
  const [email, setEmail] = useState("");

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(email);
  }

  return (
    <form action="submit" {...rest} onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        placeholder="Insira seu e-mail"
        className="p-7 border-none outline-none font-text bg-white w-95.25"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="p-7 border-none outline-none font-text cursor-pointer bg-yellow-nl text-white">
        Assinar newsletter
      </button>
    </form>
  );
  1;
}
