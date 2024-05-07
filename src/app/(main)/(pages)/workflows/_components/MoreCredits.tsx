'use client'
import React from 'react'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { useBilling } from '@/provider/billing-provider'

type Props = {}

const MoreCredits = (props: Props) => {
  const { credits } = useBilling()
  return credits !== '0' ? (
    <></>
  ) : (
    <Card>
      <CardContent className="p-6">
        <CardDescription>You are out of credits</CardDescription>
      </CardContent>
    </Card>
  )
}

export default MoreCredits