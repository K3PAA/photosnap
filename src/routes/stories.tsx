import { createFileRoute } from '@tanstack/react-router'
import Stories from '../components/stories/Stories'

export const Route = createFileRoute('/stories')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Stories />
}
