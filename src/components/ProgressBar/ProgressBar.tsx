import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

interface ProgressBarProps {
  step: number;
  className?: string;
}
interface BarTrackProps {
  className?: string;
  progress: number;
}

const BarFill = styled.div`
  width: ${(props: BarTrackProps) => props.progress * 100}%;
`;

export const BarTrack: FunctionComponent<BarTrackProps> = ({ className, progress }) => {
  return (
    <div className={`w-full h-1 bg-grey-lighter ${className}`}>
      <BarFill
        className="h-1 w-full bg-teal transition duration-1000 ease-out"
        progress={progress}
      />
    </div>
  );
};

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ className, step }) => {
  const description = ["Choose Type", "Fill Form", "Issue Document(s)"];

  return (
    <div className={`max-w-sm ${className}`}>
      <div className="text-grey-dark font-bold text-base" data-testid={"progress-bar"}>
        {`Step ${step}/3: ${description[step - 1]}`}
      </div>
      <div className="mt-3 mb-6">
        <BarTrack progress={step / 3} />
      </div>
    </div>
  );
};
