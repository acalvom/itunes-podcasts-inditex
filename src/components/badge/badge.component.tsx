interface BadgeProps {
  content: number | string
}

export const Badge = ({ content }: BadgeProps) => {
  return (
    <div className="bg-blue-main m-auto p-2 font-semibold text-white rounded-lg">{content}</div>
  )
}
