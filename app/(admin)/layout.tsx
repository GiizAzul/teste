// app/(admin)/layout.tsx

export const metadata = {
  title: 'Sanity Studio',
  description: 'Admin panel for PureCompound',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}