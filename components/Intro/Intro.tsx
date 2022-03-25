import Title from './Title'

export default function Intro() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <h1 className="font-title text-6xl font-medium italic">
        {' '}
        <p className="mb-4">Hi,</p>
        <p className="mb-4">I'm Maxime </p>
      </h1>

      <Title />
    </div>
  )
}
