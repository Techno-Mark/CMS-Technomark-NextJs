/* eslint-disable react-hooks/rules-of-hooks */
import Loading from "@/components/common/loading/loading"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const Index = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/home")
  }, [router])
  return <Loading />
}

export default Index
