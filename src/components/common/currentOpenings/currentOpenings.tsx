import React, { useEffect, useState } from "react"
import Button from "../button/button"
import styles from "./currentOpening.module.css"
import axios from "axios"

const CurrentOpenings = ({ data }: any) => {
  const [currentOpeningData, setCurrentOpeningData] = useState<any>([])
  const [showAll, setShowAll] = useState<boolean>(
    !(currentOpeningData.length > 5)
  )
  const [isLocationDropdownVisible, setLocationDropdownVisible] =
    useState<boolean>(false)
  const [isShiftDropdownVisible, setShiftDropdownVisible] =
    useState<boolean>(false)

  const [selectedMode, setSelectedMode] = useState<string>("All")
  const [selectedLocation, setSelectedLocation] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const displayedData = showAll
    ? currentOpeningData
    : currentOpeningData.slice(0, 5)

  const handleShiftClick = () => {
    setShiftDropdownVisible(!isShiftDropdownVisible)
  }

  const handleLocationClick = () => {
    setLocationDropdownVisible(!isLocationDropdownVisible)
  }

  const filteredData = displayedData
    .filter(
      (job: any) =>
        job.jobTitle
          .toString()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        job.yearsOfExperience
          .toString()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        job.numberOfPosition
          .toString()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        job.location
          .toString()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        job.mode
          .toString()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
    )
    .filter((job: any) =>
      selectedMode === "All" ? true : job.mode === selectedMode
    )
    .filter((job: any) =>
      selectedLocation === "All" ? true : job.location === selectedLocation
    )

  const handleModeSelect = (mode: string) => {
    setShiftDropdownVisible(false)
    setSelectedMode(mode)
  }

  const handleLocationSelect = (location: string) => {
    setLocationDropdownVisible(false)
    setSelectedLocation(location)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const apiCall = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}career/list`,
        {
          headers: {
            referal: process.env.REFERAL_HEADER || "http://localhost:3001"
          }
        }
      )

      const data = res?.data?.data
      if (data) {
        setCurrentOpeningData(data.careers || [])
      }
    } catch (error) {
      console.error(`Error fetching data:`, error)
    }
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <>
      {!!data && data.isSearchAvailable == "true" && (
        <div className="mx-4 my-4 flex flex-wrap justify-between lg:mx-40 mt-10">
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
          <div
            className="px-5 border h-20 w-[48%] flex items-center justify-between md:w-1/4 relative"
            onClick={handleShiftClick}
          >
            <span className="text-2xl font-medium text-[#1D3557]">
              {selectedMode === "All" ? "All Job Shift" : selectedMode}
            </span>
            <img width={20} src="/images/arrowDown.svg" />

            {isShiftDropdownVisible && (
              <div className="absolute top-full left-0 w-full bg-white border shadow-md z-10">
                {/* "All" Option */}
                <div
                  className="px-4 py-2 text-xl text-[#617289] cursor-pointer hover:bg-gray-100"
                  onClick={() => handleModeSelect("All")}
                >
                  All Job Shift
                </div>

                {/* Display unique modes */}
                {Array.from(
                  new Set(
                    currentOpeningData.map((job: any) => job.mode)
                  ) as Set<string>
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
          <div
            className="px-5 border h-20 w-[48%] flex items-center justify-between md:w-1/4 relative"
            onClick={handleLocationClick}
          >
            <span className="text-2xl font-medium text-[#1D3557]">
              {selectedLocation === "All"
                ? "All Job Location"
                : selectedLocation}
            </span>
            <img width={20} src="/images/arrowDown.svg" />

            {isLocationDropdownVisible && (
              <div className="absolute top-full left-0 w-full bg-white border shadow-md z-10">
                {/* "All" Option */}
                <div
                  className="px-4 py-2 text-xl text-[#617289] cursor-pointer hover:bg-gray-100"
                  onClick={() => handleLocationSelect("All")}
                >
                  All Job Location
                </div>

                {/* Display unique Location */}
                {Array.from(
                  new Set(
                    currentOpeningData.map((job: any) => job.location)
                  ) as Set<string>
                ).map((uniqueLocation: string, index: number) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-xl text-[#617289] cursor-pointer hover:bg-gray-100"
                    onClick={() => handleLocationSelect(uniqueLocation)}
                  >
                    {uniqueLocation}
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
                  {i.jobTitle}
                </h1>
                <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row">
                  <span className="mx-1 flex gap-2.5 text-xl font-medium text-[#617289]">
                    <img
                      className="w-7"
                      src={
                        !!data && !!data.experienceIcon
                          ? data.experienceIcon
                          : ""
                      }
                    />
                    <p className="">
                      {!!data && !!data.experienceTitle
                        ? data.experienceTitle
                        : ""}
                    </p>
                    <p className="group-hover:underline duration-700">
                      {i.yearsOfExperience}+ Years
                    </p>
                  </span>
                  <span className="mx-1 flex gap-2.5 text-xl font-medium text-[#617289]">
                    <img
                      className="w-7"
                      src={
                        !!data && !!data.noOfOpeningsIcon
                          ? data.noOfOpeningsIcon
                          : ""
                      }
                    />
                    <p className="">
                      {!!data && !!data.noOfOpeningsTitle
                        ? data.noOfOpeningsTitle
                        : ""}
                    </p>
                    <p className="group-hover:underline duration-700">
                      {i.numberOfPosition}
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
                  text="Apply now"
                  variant="primary"
                  href={`/careerdetails/${i.slug}`}
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
