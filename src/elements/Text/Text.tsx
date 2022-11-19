import React from 'react'

type Props = {
  children: string
  variant?: 'heading' | 'subHeading'
}

export const Text = ({ children, variant = 'heading' }: Props) => {
  return variant === 'heading' ? (
    <h4 className='uppercase text-2xl font-bold'>{children}</h4>
  ) : (
    <h6 className='text-base font-bold'>{children}</h6>
  )
}
