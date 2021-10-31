import avatar from '../profile.jpg'

const Avatar = ({members}) => {
    return(
        <>
            {members.map((member) => 
                <div className="flex -space-x-2 overflow-hidden m-2">
                    <img
                    className="inline-block h-8 w-8 rounded-full ring-2"
                    src={avatar} 
                    alt=""
                    />
                </div>
            )}
        </>
    )
}

export default Avatar