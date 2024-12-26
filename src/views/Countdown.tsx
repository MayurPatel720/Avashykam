/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

interface CountdownProps {
    targetDate: string
}

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft | null => {
        const now = new Date()
        const difference = new Date(targetDate).getTime() - now.getTime()

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        return null // Countdown finished
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
        calculateTimeLeft(),
    )

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!timeLeft) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h2 className="text-2xl font-bold text-red-600">
                    The countdown has ended!
                </h2>
            </div>
        )
    }

    return (
        <div className="flex space-x-4">
            <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold text-blue-600">
                    {timeLeft.days}
                </span>
                <span className="text-sm text-gray-600">Days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold text-blue-600">
                    {timeLeft.hours}
                </span>
                <span className="text-sm text-gray-600">Hours</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold text-blue-600">
                    {timeLeft.minutes}
                </span>
                <span className="text-sm text-gray-600">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold text-blue-600">
                    {timeLeft.seconds}
                </span>
                <span className="text-sm text-gray-600">Seconds</span>
            </div>
        </div>
    )
}

export default Countdown
