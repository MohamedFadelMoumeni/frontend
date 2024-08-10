import {ClockLoader} from "react-spinners"
const LoadingSkeleton = () => (
    <div className="w-full h-screen flex items-center justify-center">
        <ClockLoader size={50} />
    </div>
)
export default LoadingSkeleton