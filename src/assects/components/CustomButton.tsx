import React, {FC} from 'react';

interface ICustomButton {
    onClick: () => void;
    searchMode: boolean;
}

export const CustomButton:FC<ICustomButton> = ({searchMode, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{searchMode ? 'Off navigation' : 'On navigation'}</button>
    </div>
  );
};
