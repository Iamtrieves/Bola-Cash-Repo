import data from "../../objectives";

const ObjectivesGrid = () => {
  return (
    <div className="lg:mx-[3.5rem] mx-[1.3rem] lg:my-[14rem] my-[1.875rem]">
      <div className="flex flex-col lg:gap-[2rem] gap-[0.9rem]">
        <h1 className="font-semibold lg:text-[2.5rem] text-[1.5rem] lg:leading-[3.0475rem] leading-[1.815625rem]">
          Objectives
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-[3.125rem] lg:gap-y-0">
          {data.map((objectives) => (
            <div key={objectives.id} className="lg:mb-[1rem] mb-[1.875rem]">
              <h2 className="font-semibold lg:text-[1.5rem] lg:leading-[1.82875rem] text-[1rem] leading-[1.21rem]">
                {objectives.title}
              </h2>
              <p className="lg:text-[1.25rem] lg:leading-[1.875rem] text-justify text-[0.875rem] leading-[1.05875rem]">
                {objectives.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjectivesGrid;
