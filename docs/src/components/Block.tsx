import clsx from 'clsx'

export default function Block({
  classNames,
}: {
  classNames?: string
}) {
  return <div className={clsx('bg-primary-500', classNames)}></div>
}
