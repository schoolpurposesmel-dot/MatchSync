
function HostInfoCard({teamName}){
    return(
          <div className="bg-[#111522] border border-white/10 rounded-xl p-5 mt-8">

            <h2 className="text-lg font-bold text-white">
                Hosted By:
            </h2>

            <p className="text-slate-400 mt-3">
                {teamName}
            </p>

        </div>
    )
}

export default HostInfoCard;