type Props = React.ComponentProps<"a">;

export function Link({ children, ...rest }: Props) {
  return (
    <a {...rest} className="font-text text-[1rem] cursor-pointer font-semibold">
      {children}
    </a>
  );
}
