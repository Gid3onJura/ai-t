import { UserButton } from "@clerk/nextjs"
import MobileSideBar from "@/components/mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount()
  const isUpgraded = await checkSubscription()

  return (
    <div className="flex items-center p-4">
      <MobileSideBar isUpgraded={isUpgraded} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
