import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import { useSession } from "next-auth/react"

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // const apiLimitCount = await getApiLimitCount()
  // const isUpgraded = await checkSubscription()

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        {/* <Sidebar isUpgraded={isUpgraded} apiLimitCount={apiLimitCount} /> */}
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
