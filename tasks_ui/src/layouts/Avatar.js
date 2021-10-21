const Avatar = ({members}) => {
    return(
        <>
            {members.map((member) => 
                <div className="flex -space-x-2 overflow-hidden">
                    <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={member.photo}
                    alt=""
                    />
                </div>
            )}
        </>
    )
}

export default Avatar