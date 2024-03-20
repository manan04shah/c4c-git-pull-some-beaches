import { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom";


export default function Output(){
    const [fake_percent,setFakePercent] = useState('')
    const [type,setType] = useState('')

    const navigate = useNavigate();

    const handleClick = () => { 
        if(type === 'image'){
            navigate('/')
        } else if(type === 'audio'){
            navigate('/audio')
        }
    }

    useEffect(() => {
        setFakePercent(localStorage.getItem('fake_percent'))
        setType(localStorage.getItem('type'))
    }
    ,[])

    return <main className="bg-black min-h-screen w-screen ">
            <Navbar />
            <section className="px-[20vw] py-[8vh] flex flex-col items-center  justify-center h-[88vh]">
                <div className=" h-full w-full flex flex-col items-center justify-center">
                    <img src="./panda.svg" className="h-3/5 my-5" />
                    <h1 className="text-white font-bold text-4xl mb-5">The image is {fake_percent} likely to be generated by AI</h1>
                    <button onClick={handleClick} className="text-white bg-main-purple px-5 py-3 rounded-full">Upload another file</button>
                </div>
                </section>
        </main>
}