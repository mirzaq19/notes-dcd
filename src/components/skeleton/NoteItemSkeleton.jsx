const NoteItemSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col justify-center gap-3 p-4 border border-secondary rounded-md shadow-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-gray-500 dark:bg-gray-400 h-6 w-2/3 rounded"></div>
        <div className="bg-gray-500 dark:bg-gray-400 h-3 w-1/2 rounded"></div>
      </div>
      <hr className="border-0 border-b border-secondary" />
      <div className="bg-gray-500 dark:bg-gray-400 h-4 w-full rounded"></div>
      <div className="bg-gray-500 dark:bg-gray-400 h-4 w-full rounded"></div>
      <div className="bg-gray-500 dark:bg-gray-400 h-4 w-full rounded"></div>
      <div className="bg-gray-500 dark:bg-gray-400 h-4 w-full rounded"></div>
      <div className="bg-gray-500 dark:bg-gray-400 h-4 w-full rounded"></div>
    </div>
  )
}

export default NoteItemSkeleton
