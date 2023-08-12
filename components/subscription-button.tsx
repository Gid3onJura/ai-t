"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { ZapIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "react-hot-toast"

interface SubscriptionButtonProps {
  isUpgraded: boolean
}

export const SubscriptionButton = ({ isUpgraded = false }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false)

  const onClick = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/stripe")

      window.location.href = response.data.url
    } catch (error) {
      toast.error("Something wrong!")
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button disabled={loading} variant={isUpgraded ? "default" : "premium"} onClick={onClick}>
      {isUpgraded ? "Manage Subscription" : "Upgrade"}
      {!isUpgraded && <ZapIcon className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  )
}
