import CardHover from "@/src/components/CardHover"
import TarjetaMagica from "@/src/components/tajetamagica"

const Targets = () => {
    return (
        <div className="flex justify-center items-center-safe flex-grow gap-3.5">
            <TarjetaMagica />
            <CardHover />
        </div>
    )
}

export default Targets