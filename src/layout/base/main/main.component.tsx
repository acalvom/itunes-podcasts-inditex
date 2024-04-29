type MainProps = {
  children: JSX.Element | JSX.Element[]
}

export const Main = ({ children }: MainProps) => {
  return <main className="my-16 flex flex-1 flex-wrap px-8 py-8 lg:px-12">{children}</main>
}
