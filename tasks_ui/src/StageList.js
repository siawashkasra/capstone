import StageItem from "./StageItem";


const StageList = ({ stages }) => {
  
  return (
    <div className="flex justify-between">
      {stages.map((stage, index) => (
        <StageItem key={stage.id} stage={stage} index={index} />
      ))}
    </div>
  );
};

export default StageList;
