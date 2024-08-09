'use client';

import AuthGuard from '@/hoc/AuthGuard';
import React from 'react'

const Orders = () => {
  return (
    <div>Orders</div>
  )
}

export default AuthGuard( Orders);