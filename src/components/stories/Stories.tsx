import Hero from './Hero'
import StoriesWrapper from './StoriesWrapper'

export default function Stories() {
  return (
    <main>
      <Hero />
      <StoriesWrapper fullList={true} />
    </main>
  )
}
