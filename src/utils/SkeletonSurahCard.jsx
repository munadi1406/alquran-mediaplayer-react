

const SkeletonSurahCard = () => {
  return (
    <div className='p-2 rounded-lg my-2 bg-white/10 backdrop-blur-sm backdrop-filter '>
    <div className='m-3 flex justify-start items-center'>
      <div  className='animate-pulse bg-gray-300 w-8 h-8 rounded-full'></div>
    </div>
    <div className='flex justify-start items-center flex-row-reverse '>
      <div className='animate-pulse bg-gray-300 w-48 h-8 rounded-lg ml-2'></div>
      <div className='animate-pulse bg-gray-300 w-8 h-8 rounded-lg'></div>
      <div className=''></div>
    </div>
    <div className='animate-pulse bg-gray-300 w-48 h-8 rounded-lg my-1'></div>
    <div className='animate-pulse bg-gray-300 w-48 h-8 rounded-lg'></div>
  </div>
  )
}

export default SkeletonSurahCard