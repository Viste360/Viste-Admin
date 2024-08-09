"use client";

import UnAuthGuard from '@/hoc/UnAuthGuard';
import React from 'react'

const ResetPassword = () => {
  return (
    <div>ResetPassword</div>
  )
}

export default UnAuthGuard(ResetPassword);