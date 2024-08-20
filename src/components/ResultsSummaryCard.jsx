import React from 'react'
import ReactionIcon from '../assets/images/icon-reaction.svg'
import MemoryIcon from '../assets/images/icon-memory.svg'
import VerbalIcon from '../assets/images/icon-verbal.svg'
import VisualIcon from '../assets/images/icon-visual.svg'

const ResultsSummaryCard = () => {

    const SummaryTabs = [
        {
          "category": "Reaction",
          "score": 80,
          "icon": ReactionIcon,
          "backgroundColor":"bg-Light-red",
          "textColor":"text-Light-red"
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": MemoryIcon,
          "backgroundColor":"bg-Orangey-yellow",
          "textColor":"text-Orangey-yellow"
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": VerbalIcon,
          "backgroundColor":"bg-Green-teal",
          "textColor":"text-Green-teal"
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": VisualIcon,
          "backgroundColor":"bg-Cobalt-blue",
          "textColor":"text-Cobalt-blue"
        }
      ]
      

    return (
        <div className='grid md:grid-cols-2 sm:rounded-3xl shadow-lg overflow-hidden w-full sm:w-3/4 max-w-2xl sm:my-10 md:my-0'>
            <div className='bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue text-center text-White p-10 sm:rounded-3xl rounded-b-3xl grid gap-5'>
                <h3 className='text-Light-lavender text-xl font-bold'>Your Result</h3>
                <div className='rounded-full h-36 w-36 grid place-content-center mx-auto bg-gradient-to-b from-Violet-blue to-Persian-blue'>
                    <h1 className='font-extrabold text-5xl'>76</h1>
                    <span className='text-Light-lavender text-sm'>of 100</span>
                </div>
                <h2 className='font-bold text-2xl'>Great</h2>
                <p className='text-Light-lavender sm:w-4/5 mx-auto'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className='p-7 md:p-10 grid gap-6'>
                <h3 className='font-bold text-xl'>Summary</h3>
                <div className='grid gap-4'>
                    {SummaryTabs.map((tab,index)=>(
                        <SummaryTab key={index} Tab={tab}/>
                    ))}
                </div>
                <button className='bg-Dark-gray-blue text-White rounded-full lg:py-2 py-3 w-full font-medium hover:bg-gradient-to-b hover:from-Light-slate-blue hover:to-Light-royal-blue text-center transition-all duration-200 ease-in-out'>Continue</button>
            </div>
        </div>
    )
}

const SummaryTab = ({Tab}) => {
    return (
        <div className={`rounded-lg px-4 py-3 flex justify-between gap-3 bg-opacity-10 font-bold ${Tab.backgroundColor}`}>
            <img src={Tab.icon} alt="" />
            <p className={`flex-1 ${Tab.textColor}`}>{Tab.category}</p>
            <p className='text-Light-lavender '><span className='text-Dark-gray-blue font-extrabold'>{Tab.score}</span>  / 100</p>
        </div>
    )
}

export default ResultsSummaryCard