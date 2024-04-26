interface BadgeProps {
  content: number | string
}

export const Badge = ({ content }: BadgeProps) => {
  return (
    <div className="m-auto rounded-lg bg-blue-main p-2 font-semibold text-white">{content}</div>
  )
}
