/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react"
import Button from "../button/button"
import styles from "./currentOpening.module.css"

const CurrentOpenings = ({ data }: any) => {
  console.log(data)
  const [showAll, setShowAll] = useState<boolean>(
    !(!!data && data.data.length > 5)
  )
  const [isLocationDropdownVisible, setLocationDropdownVisible] =
    useState<boolean>(false)

  const [selectedMode, setSelectedMode] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const displayedData = showAll ? data.data : data.data.slice(0, 5)

  const handleLocationClick = () => {
    setLocationDropdownVisible(!isLocationDropdownVisible)
  }

  const filteredData = displayedData
    .filter(
      (job: any) =>
        job.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
        job.experience
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        job.noOfOpenings
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        job.mode.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
    .filter((job: any) =>
      selectedMode === "All" ? true : job.mode === selectedMode
    )

  const handleModeSelect = (mode: string) => {
    setLocationDropdownVisible(false)
    setSelectedMode(mode)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      {!!data && data.isSearchAvailable == "true" && (
        <div className="mx-4 my-4 flex flex-wrap justify-between lg:mx-40">
          <div className="px-5 mb-4 border h-20 w-full flex items-center gap-4 md:w-[48%] md:mb-0">
            <img width={20} src="/images/search.svg" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="text-2xl font-medium text-[#BBC2CD] w-full outline-none"
            />
          </div>
          <div className="px-5 border h-20 w-[48%] flex items-center justify-between md:w-1/4">
            <span className="text-2xl font-medium text-[#1D3557]">
              All Job Shift
            </span>
            <img width={20} src="/images/arrowDown.svg" />
          </div>
          <div
            className="px-5 border h-20 w-[48%] flex items-center justify-between md:w-1/4 relative"
            onClick={handleLocationClick}
          >
            <span className="text-2xl font-medium text-[#1D3557]">
              {selectedMode === "All" ? "All Job Location" : selectedMode}
            </span>
            <img width={20} src="/images/arrowDown.svg" />

            {isLocationDropdownVisible && (
              <div className="absolute top-full left-0 w-full bg-white border shadow-md z-10">
                {/* "All" Option */}
                <div
                  className="px-4 py-2 text-xl text-[#617289] cursor-pointer hover:bg-gray-100"
                  onClick={() => handleModeSelect("All")}
                >
                  All Job Location
                </div>

                {/* Display unique modes */}
                {Array.from(
                  new Set(data.data.map((job: any) => job.mode)) as Set<string>
                ).map((uniqueMode: string, index: number) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-xl text-[#617289] cursor-pointer hover:bg-gray-100"
                    onClick={() => handleModeSelect(uniqueMode)}
                  >
                    {uniqueMode}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {!!data && filteredData.length > 0 ? (
        filteredData.map((i: any, index: number) => (
          <div key={index}>
            <div className="group mx-4 my-4 py-[30px] px-10 border flex flex-col justify-between hover:border-green-600 duration-700 md:flex-row lg:mx-40">
              <div className="flex flex-col gap-5 lg:justify-between">
                <h1 className="text-3xl font-medium text-[#1D3557]">
                  {i.title}
                </h1>
                <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row">
                  <span className="mx-1 flex gap-2.5 text-xl font-medium text-[#617289]">
                    <img
                      className="w-7"
                      src={
                        !!data && !!data.experienceIcon ? data.experienceIcon : ""
                      }
                    />
                    <p className="">
                      {!!data && !!data.experienceTitle ? data.experienceTitle : ""}
                    </p>
                    <p className="group-hover:underline duration-700">
                      {i.experience}
                    </p>
                  </span>
                  <span className="mx-1 flex gap-2.5 text-xl font-medium text-[#617289]">
                    <img
                      className="w-7"
                      src={
                        !!data && !!data.noOfOpeningsIcon ? data.noOfOpeningsIcon : ""
                      }
                    />
                    <p className="">
                      {!!data && !!data.noOfOpeningsTitle ? data.noOfOpeningsTitle : ""}
                    </p>
                    <p className="group-hover:underline duration-700">
                      {i.noOfOpenings}
                    </p>
                  </span>
                  <span className="mx-1 flex gap-2.5 text-xl font-medium text-[#617289]">
                    <img
                      className="w-7"
                      src={!!data && !!data.modeIcon ? data.modeIcon : ""}
                    />
                    <p className="">
                      {!!data && !!data.modeTitle ? data.modeTitle : ""}
                    </p>
                    <p className="group-hover:underline duration-700">
                      {i.mode}
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex md:items-end">
                <Button
                  text={i.buttonText}
                  variant="primary"
                  href=""
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10 text-xl text-[#1D3557]">
          No Data Found
        </div>
      )}

      {!showAll && (
        <div className="flex items-center justify-center pt-10">
          <button
            className={`${styles.tabButton} ${styles.viewbtn} mx-auto`}
            onClick={() => setShowAll(true)}
          >
            VIEW ALL
          </button>
        </div>
      )}
    </>
  )
}

export default CurrentOpenings
