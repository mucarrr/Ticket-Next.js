'use client';

import { Ticket } from '@/types';
import React, { FC } from 'react'
import Field from './Field';
import { TICKET_CATEGORIES, TICKET_PRIORITIES, TICKET_STATUSES, PRIORITY_LABELS } from '@/utils/constants';
import { updateTicketAction, createTicketAction } from '@/utils/actions';

interface Props {
    isEdit: boolean;
    editItem: Ticket | null;
}

const Form:FC<Props> = ({isEdit, editItem}) => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {isEdit ? 'Edit Ticket' : 'Create New Ticket'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {isEdit ? 'Update ticket information' : 'Fill in the details to create a new ticket'}
            </p>
          </div>
          
          <form action={isEdit ? updateTicketAction : createTicketAction} className="flex flex-col gap-6">
            {/* bu componenti use client yapmadan click islemini tetikleyemem. bu yuzden onClick degil form action kullaniyorum */}
            <input type="text" name="id" value={editItem?.id} readOnly hidden /> 
            {/* next de formData anahatari form icindeki degerleri otomatik alir apiye gondermek icin. bu sebebple formun icine gorunmeyen bir input alani koydum ki, formData ile id degerini de alabileyim. */}
    
            <Field label="Title">
              <input type="text" name="title" required maxLength={100} className="input" defaultValue={editItem?.title} />
            </Field>
    
            <Field label="Description">
              <textarea
                required
                maxLength={100}
                name="description"
                className="input resize-y min-h-20 max-h-96"
                defaultValue={editItem?.description}
              />
            </Field>
    
            <Field label="Category">
              <select name="category" className="input" required defaultValue={editItem?.category}>
                <option value="">Select Category</option>
    
                {TICKET_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </Field>
    
            <Field label="Priority">
              <div className="flex flex-wrap items-center gap-3">
                {TICKET_PRIORITIES.map((priority, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      id={`${priority}`}
                      type="radio"
                      name="priority"
                      value={priority}
                      required
                      defaultChecked={editItem?.priority === priority}
                      className="size-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2"
                    />
    
                    <label htmlFor={`${priority}`} className="text-sm font-medium cursor-pointer hover:text-blue-400">
                      {priority} - {PRIORITY_LABELS[priority]}
                    </label>
                  </div>
                ))}
              </div>
            </Field>
    
            <Field label="Progress">
              <div className="space-y-2">
                <input 
                  type="range" 
                  name="progress" 
                  min={0} 
                  max={100} 
                  step={5} 
                  defaultValue={editItem?.progress || 0}
                  className="w-full h-2 bg-gray-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>0%</span>
                  <span className="font-medium">{editItem?.progress || 0}%</span>
                  <span>100%</span>
                </div>
              </div>
            </Field>
    
            <Field label="Status">
              <select name="status" className="input" required defaultValue={editItem?.status}>
                <option value="">Select Status</option>
    
                {TICKET_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </Field>
    
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {isEdit ? "Update Ticket" : "Create Ticket"}
              </button>
              
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-6 py-3 border border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
}

export default Form