export default function Footer({ name }: { name: string }) {
  return (
    <footer className="site-container mt-auto py-6">
      <span className="text-small">
        &copy; {new Date().getFullYear()} {name}
      </span>
    </footer>
  );
}
