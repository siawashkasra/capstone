import { SortableContainer } from "react-sortable-hoc";
import StageItem from "./StageItem";

const StageList = SortableContainer(({ stages }) => {
  return (
    <div className="flex justify-between">
      {stages.map((stage, index) => (
        <StageItem stage={stage} key={`stage-${stage.id}`} index={index} />
      ))}
    </div>
  );
});

export default StageList;
