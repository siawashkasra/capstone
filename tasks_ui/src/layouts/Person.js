const Person = ({ person }) => {
  return (
    <div
      key={person.id}
      className="flex items-center -space-x-2 overflow-hidden"
    >
      <img
        className="inline-block h-8 w-8 rounded-full"
        src={person.avatar}
        alt=""
      />
      <h5 className="inline-block px-3">{person.first_name}</h5>
    </div>
  );
};

export default Person;
