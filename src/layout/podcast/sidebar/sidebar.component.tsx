export const SideBar = () => {
  return (
    <div className="flex flex-col divide-y rounded-sm px-4 py-8 shadow-xl md:mr-8 md:w-1/3 lg:w-1/4">
      <div className="my-3 flex justify-center rounded-lg">
        <img className="max-w-48 rounded-lg" src="http://via.placeholder.com/60x60" />
      </div>
      <div className="flex flex-col p-4 align-middle">
        <p className="font-semibold">Name of the podcast</p>
        <p className="italic">by Author of the podcast</p>
      </div>
      <div className="flex flex-col p-2 align-middle">
        <p className="text-sm font-semibold">Description:</p>
        <p className="text-sm font-light italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam eget libero id
          volutpat. Praesent rhoncus enim id augue consectetur
        </p>
      </div>
    </div>
  )
}
