const assets = import.meta.glob(
  [
    '../assets/img/**/*',
    '../assets/svg/united-states.svg',
    '../assets/svg/thailand.svg',
  ],
  { eager: true, import: 'default' }
)

export function getImagePath(image: string): string {
  const key = `../assets/${image}`
  return (assets[key] as string) ?? ''
}