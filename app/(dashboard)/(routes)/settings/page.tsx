import { Heading } from "@/components/heading"
import { SubscriptionButton } from "@/components/subscription-button"
import { checkSubscription } from "@/lib/subscription"
import { SettingsIcon } from "lucide-react"

const SettingPage = async () => {
  const isUpgraded = await checkSubscription()
  return (
    <div>
      <Heading
        title="Settings"
        description="Settings"
        icon={SettingsIcon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isUpgraded ? "You are currently upgraded" : "You are currently on a free plan"}
        </div>
        <SubscriptionButton isUpgraded={isUpgraded} />
      </div>
    </div>
  )
}

export default SettingPage
