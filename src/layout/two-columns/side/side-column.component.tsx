interface LeftSideProps {
  children: JSX.Element | JSX.Element[]
}

export const LeftSideColumn = ({ children }: LeftSideProps) => {
  return <div className="flex px-4 py-8  md:mr-8 md:w-1/3">{children}</div>
}
