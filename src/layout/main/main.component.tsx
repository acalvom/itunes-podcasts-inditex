type MainProps = {
  children: JSX.Element | JSX.Element[]
}

export const Main = ({ children }: MainProps) => {
  return <main className="flex-1 px-12 p-8 my-16">{children}</main>
}
