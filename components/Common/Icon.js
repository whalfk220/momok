const Icon = ({
  icon,
  style,
  className,
}) => {
  if (!icon) {
    return
  }

  const classList = [
    `icon icon-${icon}`,
    className,
  ].join(' ')

  return (
    <i
      className={classList}
      style={style}
    ></i>
  )
}

export default Icon
