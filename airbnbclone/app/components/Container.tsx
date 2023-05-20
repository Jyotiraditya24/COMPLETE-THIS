"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Contianer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w-[2520px] 
        mx-auto
        sm:px-2
        md:px-10
        xl:px-20
        px-4
        "
    >
      {children}
    </div>
  );
};

export default Contianer;

/* 1> children is anything we wrtie inside the container
   2> because children is of type React.ReactNode;
   3> be default this is server component
   4> we will make this clinet by 'use client' to avoid hydration problem , clinet component
*/
