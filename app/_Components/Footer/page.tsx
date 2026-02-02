export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <p>Copyright &copy; {new Date().getFullYear()} VA Sub Shack</p>
      <p>Made with ❤️ by <a href="https://github.com/Defaulti0">Defaulti0</a></p>
    </div>
  )
}