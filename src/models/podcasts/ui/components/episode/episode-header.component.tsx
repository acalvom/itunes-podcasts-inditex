export const EpisodeHeader = () => {
  return (
    <div className="grid grid-cols-50/30/20 gap-2 px-2 py-2 md:grid-cols-60/20/15">
      <p className="font-semibold">Title</p>
      <p className="text-center font-semibold md:text-start">Date</p>
      <p className="text-center font-semibold">Duration</p>
    </div>
  )
}
