import CardTab from "./CardTab"

const CardDetails = () => {
  return (
    <div className="mt-10 flex just flex-col gap-5 sm:mt-40">
        <div className="flex flex-col justify-center items-center font-bold sm:flex-row sm:gap-1 sm:text-xl">
            <p className="text-4xl">Everything you need to </p>
            <p className="text-4xl">manage documents</p>
        </div>
        <div className="sm:flex justify-center" >
            <p className="text-center">Powerful features designed to make document </p>
            <p className="text-center">sharing and collaboration effortless</p>
        </div>
       <CardTab/>
    </div>
  )
}

export default CardDetails