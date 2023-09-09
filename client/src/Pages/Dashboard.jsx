import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Accordian from '../Components/Accordian'
import collection from '../assets/collection.svg'
// import { Chart } from '../Components/Chart'
import { AppContext } from '../App'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const Dashboard = () => {
    const [date, setDate] = useState(new Date())
    const { fetchData, userData,checkAuthState } = useContext(AppContext)

    useEffect(() => {
        setDate(new Date())
        fetchData()
        checkAuthState()
        console.log("dashboarddddd")
        console.log('userData', userData)
    }, [])
    return (
        <>
            <Navbar />
            <div className='flex items-start justify-between py-24 sm:mx-0 mx-3'>

                <section className='max-w-7xl flex flex-col md:flex-row gap-12 md:gap-0 items-center sm:items-start justify-between bg-orange-'>
                    <div className='w-[340px] sm:w-auto sm:mx-4 lg:mx-24 flex flex-col gap-3'>
                        <div className='flex items-center gap-2 mb-4'>
                            <img src={collection} className='w-8' alt="collection" />
                            <h2 className='text-xl'>Your Collections</h2>
                        </div>
                        <div className='max-w-full flex flex-wrap gap-8'>
                            {
                                userData?.collections?.map((c, key) => {
                                    return (
                                        <Accordian title={c.title} key={key} tasks={c.tasks} />
                                    )
                                })
                            }
                        </div>

                        {/* <Accordian title="Fitness-2023" />
                    <Accordian title="Travel" /> */}
                    </div>
                    {/* <div className='w-[300px] mx-10'>
                    <Chart />
                </div> */}
                </section>

                <section className='mx-4 lg:mx-24 bg-teal-00 hidden sm:flex justify-between items-start bg-teal-0'>
                    {/* <p className='text-3xl text-gray-400'>Good Morning<br /><span className='text-2xl text-[var(--text)]'>Shreedhar</span></p> */}
                    <div className='flex flex-col items-center'>
                        <p className='text-sm'>{weekdays[date.getDay()]}</p>
                        <p className='text-[var(--primary)] text-4xl'>{date.getDate()}</p>
                        <p className='text-sm'>{months[date.getMonth()]}</p>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Dashboard
