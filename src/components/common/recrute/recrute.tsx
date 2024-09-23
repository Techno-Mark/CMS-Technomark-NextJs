import React from "react"
import style from "./recrute.module.css"

const Recrute = ({ props }: any) => {
  return (
    <div className="bg-white py-10 text-black flex items-center justify-center space-x-4">
      <div className={`flex gap-12 justify-center ${style.gridContainer}`}>
        {props.data.map((i: any, index: number) => (
          <div
            key={index}
            className={`relative ${
              style.card
            } bg-white border-t border-b border-[#E7E7E7] text-[#1D3557] font-semibold flex flex-col items-center justify-center text-[12px] md:text-[10px] lg:text-md ${
              index === 0 ? "border-l" : ""
            } ${index === props.data.length - 1 ? "border-r" : ""}`}
          >
            <div
              className={`flex flex-col items-center justify-center ${style.cardContent}`}
            >
              <div className="font-bold text-[#BBC2CD] text-3xl lg:text-5xl mb-1 lg:mb-2">
                {i.title}
              </div>
              <div className="text-center">{i.description}</div>
            </div>
            {index !== props.data.length - 1 && (
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
