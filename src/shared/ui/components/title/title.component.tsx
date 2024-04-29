export const Title = ({ title }: { title: string }) => {
  return (
    <div className="w-full rounded-sm align-middle shadow-xl xl:mx-6">
      <h3 className="px-4 py-6 text-2xl font-bold">{title}</h3>
    </div>
  )
}
