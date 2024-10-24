"use client";

const predefinedPositions = [
  { left: 17, top: 17 },
  { left: 29, top: 22 },
  { left: 39, top: 31 },
  { left: 55, top: 20 },
  { left: 68, top: 27 },
  { left: 80, top: 15 },
  { left: 88, top: 25 },
  { left: 20, top: 42 },
  { left: 80, top: 42 },
  { left: 90, top: 50 },
  { left: 16, top: 61 },
  { left: 25, top: 80 },
  { left: 35, top: 67 },
  { left: 44, top: 85 },
  { left: 55, top: 70 },
  { left: 65, top: 80 },
  { left: 75, top: 63 },
  { left: 80, top: 78 },
  { left: 8, top: 75 },
  { left: 10, top: 40 },
  { left: 92, top: 70 },
  { left: 95, top: 95 },
  { left: 15, top: 85 },
  { left: 5, top: 10 },
];

const TechnologyNewComponent = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: { icon: string; title: string }[];
}) => {
  return (
    <div className="h-[500px] text-black flex  text-center justify-center !overflow-hidden items-center relative transform transition-all duration-300 hover:scale-110">
      <div className="flex flex-col gap-2">
        <h1
          className="text-base md:text-2xl lg:text-3xl font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h4 className="w-[100px] md:w-[200px] lg:w-[300px] text-xs md:text-lg lg:text-xl">
          {description}
        </h4>
      </div>
      {images.map((pos, index) => (
        <div
          key={index}
          className="absolute opacity-90"
          style={{
            left: `${predefinedPositions[index].left}%`,
            top: `${predefinedPositions[index].top}%`,
            transform: "translate(-50%, -50%)", // Center the icon at the defined position
          }}
        >
          <div className="text-3xl md:text-4xl lg:text-2xl">
            {/* {images.ico[index % images.length]} */}
            <div className="flex flex-col gap-1 justify-center items-center">
              <img
                src={pos.icon}
                alt={pos.title}
                className="lg:w-[40px] md:w-[30px] w-[20px]"
              />
              <p className="lg:text-base md:text-sm text-xs">{pos.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyNewComponent;
