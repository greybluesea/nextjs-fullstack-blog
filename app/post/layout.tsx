export default function PostModificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-3/4 md:w-2/4 m-auto max-w-xl">{children}</div>;
}
