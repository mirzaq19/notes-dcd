const NoteDetailSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col items-start gap-4">
      <div className="bg-gray-500 dark:bg-gray-400 h-8 w-2/3 rounded"></div>
      <div className="bg-gray-500 dark:bg-gray-400 h-4 w-1/4 rounded"></div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="h-5 bg-gray-500 dark:bg-gray-400 rounded col-span-2"></div>
        <div className="h-5 bg-gray-500 dark:bg-gray-400 rounded col-span-1"></div>
      </div>
      <div className="bg-gray-500 dark:bg-gray-400 h-5 w-full rounded"></div>
      <div className="bg-gray-500 dark:bg-gray-400 h-5 w-full rounded"></div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="h-5 bg-gray-500 dark:bg-gray-400 rounded col-span-1"></div>
        <div className="h-5 bg-gray-500 dark:bg-gray-400 rounded col-span-2"></div>
      </div>
      <div className="bg-gray-500 dark:bg-gray-400 h-5 w-full rounded"></div>
      <div className="bg-gray-500 dark:bg-gray-400 h-5 w-full rounded"></div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="h-5 bg-gray-500 dark:bg-gray-400 rounded col-span-2"></div>
        <div className="h-5 bg-gray-500 dark:bg-gray-400 rounded col-span-1"></div>
      </div>
    </div>
  )
}

export default NoteDetailSkeleton
