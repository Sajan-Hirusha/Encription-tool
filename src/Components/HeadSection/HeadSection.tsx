import './headSection.css'

function HeadSection() {
    return (
        <div
            className=" headSection1 flex items-center justify-center text-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../public/images/headerBg.jpg")`
            }}
        >
            <div>
                <p id="heading" className="text-2xl !font-bold sm:text-3xl md:text-4xl lg:text-5xl min-[1900px]:text-6xl !mb-5">
                    Encrypt & Decrypt Text Online
                </p>
                <p className="text-[10px] !text-lg min-[1900px]:text-2xl">
                    Secure Your Words, Simplify Your Privacy.
                </p>
            </div>
        </div>
    );
}

export default HeadSection;
