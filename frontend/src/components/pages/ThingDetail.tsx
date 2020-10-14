import { Layout, PageHeader } from 'antd'
import React from 'react'
import { RouteComponentProps } from 'react-router'

type Props = RouteComponentProps<{ id: string }>
export const ThingDetail = ({ match }: Props) => {
  return (
    <Layout.Content>
      <PageHeader title={`Details for thing: ${match.params.id}`} />
      <p>Change me at 'src/components/pages/ThingDetail.tsx'</p>
    </Layout.Content>
  )
}
