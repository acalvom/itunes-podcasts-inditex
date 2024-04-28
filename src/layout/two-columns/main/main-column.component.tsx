interface MainDetailProps {
  children: JSX.Element | JSX.Element[]
}

export const MainColumn = ({ children }: MainDetailProps) => {
  return <main className="my-4 flex flex-1 flex-wrap px-4 py-8 md:ml-16">{children}</main>
}
