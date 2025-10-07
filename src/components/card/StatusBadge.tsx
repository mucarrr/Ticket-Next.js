import { statusBadgeColors } from '@/utils/constants';
import React, { FC } from 'react'

interface Props {
    status:"open" | "in_progress" | "closed";
}

const StatusBadge:FC<Props> = ({status}) => {
    const color = statusBadgeColors[status];
    return <div className={`${color} text-white px-3 py-1 text-xs rounded-full`}>{status}</div>;
}

export default StatusBadge