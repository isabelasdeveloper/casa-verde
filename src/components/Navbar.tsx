import { Link } from "./Link";
import logo from "../assets/logo.svg";

type Props = React.ComponentProps<"nav">;

export function Navbar({ ...rest }: Props) {
  return (
    <nav {...rest} className="flex flex-1 items-end justify-between  my-4">
      <img
        src={logo}
        className="w-44.25 h-[44.84px]"
        alt="Logo da casa verde"
      />
      <div className="flex gap-4">
        <Link>Como fazer</Link>
        <span>/</span>
        <Link>Ofertas</Link>
        <span>/</span>
        <Link>Depoimentos</Link>
        <span>/</span>
        <Link>Vídeos</Link>
        <span>/</span>
        <Link>Meu carrinho</Link>
      </div>
    </nav>
  );
}
