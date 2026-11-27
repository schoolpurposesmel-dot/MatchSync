import { navigate } from '../../hooks/useHashRoute';
import ScrimFilterBar from './ScrimFilterBar';
import ScrimCardGrid from './ScrimCardGrid';


function Scrims(){
    return (
        <div className="min-h-screen bg-[#080b14] text-white px-6 py-10">
            <div className = "max-w-7xl mx-auto">

                 <button
            type="button"
            onClick={() => navigate('dashboard')}
            className="text-purple-400 hover:text-purple-300 mb-6 cursor-pointer transition"


            >

                 ← Back to Dashboard

            </button>
            

            <div className = "mb-8">
                <h1 className = "text-3xl font-bold">
                    Find Scrims
                </h1>

                <p className = "text-slate-400 mt-2">
                    Find teams to compete against and schedule your next match.
                </p>
            </div>

            <ScrimFilterBar />

            <ScrimCardGrid />
            
           
            </div>
        </div>
    )
}

export default Scrims;