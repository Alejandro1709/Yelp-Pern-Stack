import React from 'react';

type Props = {
  message: string;
  variant: string;
};

function Alert({ message, variant }: Props) {
  return (
    <div className={`flex justify-between alert alert--${variant} my-2`}>
      <p>{message}</p>
      <span>X</span>
    </div>
  );
}

export default Alert;
