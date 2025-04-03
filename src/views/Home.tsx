import Countdown from './Countdown'

const Home = () => {
    const targetDate = '2025-04-01T23:59:59'

    return (
        <div className="flex flex-col items-center justify-center  text-white">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg w-4/5 max-w-md">
                <h2 className="text-3xl font-extrabold text-[#343333] mb-4">
                    Project : Avashyakm
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    The clock is ticking! Stay focused and achieve your goal
                    before the deadline.
                </p>
                <div className="flex justify-center">
                    <Countdown targetDate={targetDate} />
                </div>
            </div>
        </div>
    )
}

export default Home
