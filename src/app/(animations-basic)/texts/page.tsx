import LetterforLetter from "@/src/components/LetterforLetter"
import TextoH1 from "@/src/components/TextoH1"
import TextoQueReaparece from "@/src/components/TextoQueReaparece"

const Texts = () => {
    return (
        <div className="flex justify-center items-center flex-grow flex-col">
            <TextoH1 />
            <LetterforLetter />
            <div className="py-3 px-2.5">
                <TextoQueReaparece />
            </div>
        </div>
    )
}

export default Texts