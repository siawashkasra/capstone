const Avatar = ({ members }) => {
  let membersList = members;
  if (members.length > 4) {
    membersList = members.slice(0, 4);
  }

  return (
    <>
      {membersList.map((member) => (
        <div
          key={member.id}
          className="flex justify-start -space-x-1 overflow-hidden m-1"
        >
          <img
            className="inline-block h-8 w-8 rounded-full"
            src={member.avatar}
            alt=""
          />
        </div>
      ))}
      {members.length > 5 ? (
        <div className="text-green-600">+{members.length - 4}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default Avatar;
