import { createFileRoute } from '@tanstack/react-router'
import Features from '../components/features/Features'

export const Route = createFileRoute('/features')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Features />
}
