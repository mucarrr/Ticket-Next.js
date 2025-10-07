
import { Ticket } from '@/types';
import { getTicket } from '@/utils/service';
import React, { FC } from 'react'
import Form from '@/components/form';

interface Props {
  params: {
    mode: string;
  }
}
const page:FC<Props> = async ({params}) => {
  const {mode} = await params;
  const isEdit = mode !== "add" ? true : false;
  let editItem:Ticket | null = null;
  if(isEdit){
    const response = await getTicket(mode);
    editItem = await response.ticket;
  }
    return (
        <div className="flex flex-col gap-3">
    
          <Form isEdit={isEdit} editItem={editItem} />
        </div>
      );
}

export default page