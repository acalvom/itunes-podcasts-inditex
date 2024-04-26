type MainProps = {
  children: JSX.Element | JSX.Element[]
}

export const Main = ({ children }: MainProps) => {
  return <main className="my-16 flex-1 p-8 px-12">{children}</main>
}
