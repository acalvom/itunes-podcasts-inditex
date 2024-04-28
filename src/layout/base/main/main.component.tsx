type MainProps = {
  children: JSX.Element | JSX.Element[]
}

export const Main = ({ children }: MainProps) => {
  return <main className="my-16 flex flex-1 flex-wrap px-12 py-8">{children}</main>
}
