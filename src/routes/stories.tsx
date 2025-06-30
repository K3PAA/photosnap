import { createFileRoute } from '@tanstack/react-router'
import Stories from '../components/shared/Stories'

export const Route = createFileRoute('/stories')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Stories fullList={true} />
    </div>
  )
}
