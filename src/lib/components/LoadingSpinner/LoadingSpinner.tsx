import type { LoadingSpinnerProps } from "./LoadingSpinner.type";

const LoadingSpinner = ({ size = "100%", wight = "0.6rem" }: LoadingSpinnerProps) => {
  return (
    <div
      className="w-full h-full relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="w-full h-full rounded-[100%] border-transparent border-t-primary"
        style={{
          borderWidth: wight,
          animation: "loading_spinner 1s infinite ease",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
