import React, { FC } from 'react'

interface Props {
  label: string;
  children: React.ReactNode;
}
const Field:FC<Props> = ({label, children}) => {
    return (
        <fieldset className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
            <span className="text-red-500 ml-1">*</span>
          </label>
    
          <div className="relative">
            {children}
          </div>
        </fieldset>
      );
}

export default Field