import ScrollText from "@/src/components/ScrollText"
import ScrollView from "@/src/components/ScrollView"

const page = () => {
    return (
        <div className="flex gap-3.5 flex-grow justify-center items-center flex-col">
            {/* bloque invisibel para lograr hacer scroll */}
            <div className="h-200 w-50"></div>
            <ScrollText />
            <ScrollView />
        </div>
    )
}

export default page