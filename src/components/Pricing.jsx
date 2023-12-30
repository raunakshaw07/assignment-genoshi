import React, {useState} from 'react'

import cardOneBg from '../images/card1.jpg'
import cardTwoBg from '../images/card2.jpg'
import cardThreeBg from '../images/card3.jpg'

const Pricing = () => {
    const [isClicked, setIsClicked] = useState({basic: false, pro: false, enterprise: false});
    const [selected, setSelected] = useState(null);

    const handleSelection = () => {
        if (isClicked.basic) setSelected('Basic')
        else if (isClicked.pro) setSelected('Pro')
        else setSelected('Enterprise')

        if (selected !== null) console.log(`Selected Plan : ${selected}`)
        else console.log('No plan selected')
    }

  return (
    <div className='flex flex-col items-center w-full h-full'>
        <p className='text-white text-xl bg-rose-700 py-2 px-6 rounded-full mb-8'>Pricing</p>
        <p className='text-white font-bold text-5xl mb-4 text-center'>Tailored Pricing Solution</p>
        <p className='text-white text-center'>Our services are designed to cater to your specific needs and goals</p>

        <div className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-5/6'>
            <div 
                className={`rounded-lg overflow-hidden shadow-lg px-6 py-8 w-full lg:mr-auto hover:scale-110 transition-all duration-300 cursor-pointer ${isClicked.basic ? 'focus:border-gray-500 focus:border-8' : ''}`} 
                style={{ background: `url(${cardThreeBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                onClick={() => setIsClicked({ basic: true, pro: false, enterprise: false })}
            >
                <div className="font-bold text-4xl mt-4 mb-8 text-center">Basic Plan</div>
                <ul className='px-6 flex flex-col gap-2 list-disc'>
                    <li className='text-lg font-semibold'>Up to 10 graphs</li>
                    <li className='text-lg font-semibold'>Up to 500 chatbot queries</li>
                </ul>
                <p className='text-xl mx-auto mt-8 mb-4 p-2 text-center bg-violet-800 text-white rounded-full'>$4/month/user</p>
            </div>

            <div 
                className={`rounded-lg overflow-hidden shadow-lg px-6 py-8 w-full lg:mr-auto hover:scale-110 transition-all duration-300 cursor-pointer ${isClicked.pro ? 'focus:border-gray-500 focus:border-8' : ''}`} 
                style={{ background: `url(${cardOneBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                onClick={() => setIsClicked({ basic: false, pro: true, enterprise: false })}
            >
                <div className="font-bold text-4xl mt-4 mb-8 text-center">Pro Plan</div>
                <ul className='px-6 flex flex-col gap-2 list-disc'>
                    <li className='text-lg font-semibold'>Up to 50 graphs</li>
                    <li className='text-lg font-semibold'>Up to 1000 chatbot queries</li>
                    <li className='text-lg font-semibold'>Email + live chat support</li>
                </ul>
                <p className='text-xl mx-auto mt-8 mb-4 p-2 text-center bg-teal-800 text-white rounded-full'>$8/month/user</p>
            </div>

            <div 
                className={`rounded-lg overflow-hidden shadow-lg px-6 py-8 w-full lg:mr-auto hover:scale-110 transition-all duration-300 cursor-pointer ${isClicked.enterprise ? 'focus:border-gray-500 focus:border-8' : ''}`}
                style={{ background: `url(${cardTwoBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                onClick={() => setIsClicked({ basic: false, pro: false, enterprise: true })}
            >
                <div className="font-bold text-4xl mt-4 mb-8 text-center">Enterprise Plan</div>
                <ul className='px-6 flex flex-col gap-2 list-disc'>
                    <li className='text-lg font-semibold'>Unlimited graphs</li>
                    <li className='text-lg font-semibold'>Ability to upload custom PDFs</li>
                    <li className='text-lg font-semibold'>24/7 phone + email support</li>
                </ul>
                <p className='text-xl mx-auto mt-8 mb-4 p-2 text-center bg-amber-800 text-white rounded-full'>Contact for price</p>
            </div>
        </div>

        <button className='px-8 py-4 bg-violet-800 text-white font-semibold rounded-full mb-4' onClick={handleSelection}>Continue</button>
        <button className='px-8 py-4 bg-amber-400 font-semibold rounded-full absolute right-8' onClick={() => window.location.href = '/dashboard'}>Go To Dashboard</button>


    </div>
  )
}

export default Pricing