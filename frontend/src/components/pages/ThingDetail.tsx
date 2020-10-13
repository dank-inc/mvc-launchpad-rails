import { PageHeader } from 'antd'
import React from 'react'
import { RouteComponentProps } from 'react-router'

type Props = RouteComponentProps<{ id: string }>
export const ThingDetail = ({ match }: Props) => {
  return (
    <>
      <PageHeader title={`Details for thing: ${match.params.id}`} />
    </>
  )
}
