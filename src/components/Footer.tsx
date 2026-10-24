export default function Footer({ name }: { name: string }) {
  return (
    <footer className="site-container mt-auto py-6">
      <span>
        &copy; {new Date().getFullYear()} {name}
      </span>
    </footer>
  );
}
