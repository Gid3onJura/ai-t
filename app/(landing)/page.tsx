import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
      <div className="font-extralight absolute bottom-1">
        <Link href="https://www.flaticon.com/de/kostenlose-icons/kunstliche-intelligenz">
          Künstliche intelligenz Icons erstellt von Triangle Squad - Flaticon
        </Link>
        <Link href="https://www.flaticon.com/de/kostenlose-icons/nichts-gefunden">
          Empty Icons erstellt von Freepik - Flaticon
        </Link>
        <Link href="https://www.flaticon.com/free-icons/refresh">Refresh icons created by Dave Gandy - Flaticon</Link>
      </div>
    </div>
  )
}

export default LandingPage
