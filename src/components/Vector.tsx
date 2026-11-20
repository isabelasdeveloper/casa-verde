import vector from "../assets/Vector.svg";
import tree from "../assets/imagem-hero.svg";

export function Vector() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 right-0 -z-10 w-[900px] pointer-events-none select-none"
    >
      <img src={vector} alt="" className="w-full" />
      <img
        src={tree}
        alt=""
        className="absolute top-[10%] left-[-10%] w-[72%]"
      />
    </div>
  );
}
