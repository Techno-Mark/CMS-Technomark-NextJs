import React from "react"
import style from "./recrute.module.css"

const data = [
  { number: "01", title: "Screening" },
  { number: "02", title: "Technical round" },
  { number: "03", title: "practical round" },
  { number: "04", title: "final hr round" },
  { number: "05", title: "offer rollout" }
]

const Recrute = () => {
  return (
    <div className="bg-white py-20 text-black flex items-center justify-center space-x-4">
      <div className="grid grid-cols-5 gap-6 md:gap-8 lg:gap-12">
        {data.map((i, index) => (
          <div
            key={index}
            className={`relative ${
              style.card
            } bg-white border-t border-b border-[#E7E7E7] text-[#1D3557] font-semibold flex flex-col items-center justify-center text-[12px] lg:text-md ${
              index === 0 ? "border-l" : ""
            } ${index === data.length - 1 ? "border-r" : ""}`}
          >
            <div className="font-bold text-[#BBC2CD] text-3xl lg:text-5xl mb-1 lg:mb-2">
              {i.number}
            </div>
            <div>{i.title}</div>
            {index !== data.length - 1 && (
              <>
                <div
                  className={`absolute border-t ${style.rightTop1} ${style.border1}`}
                ></div>
                <div
                  className={`absolute border-t ${style.rightBottom1} ${style.border2}`}
                ></div>
              </>
            )}

            {index > 0 && (
              <>
                <div
                  className={`absolute border-t border-gray-400 ${style.rightTop2} ${style.border1}`}
                ></div>
                <div
                  className={`absolute border-t border-gray-400 ${style.rightBottom2} ${style.border2}`}
                ></div>
                <div
                  className={`absolute border-t  ${style.leftTop1} ${style.border1}`}
                ></div>
                <div
                  className={`absolute border-t ${style.leftBottom1} ${style.border2}`}
                ></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recrute
