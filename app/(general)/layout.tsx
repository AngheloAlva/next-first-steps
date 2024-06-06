export default function GeneralLayout (
  { children }: { children: React.ReactElement }
): React.ReactElement {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {children}
    </main>
  )
}
