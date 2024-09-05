import React from 'react'

const ShimmerButton = ({title, icon, position, handleClick, otherClasses} : {title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string;}) => {
  return (
    
        // Button code
        <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors md:w-60 gap-2" onClick={handleClick}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>
  )
}

export default ShimmerButton