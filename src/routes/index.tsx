import { createFileRoute } from '@tanstack/react-router'
import Stories from '../components/shared/Stories'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Stories fullList={false} />
    </>
  )
}
