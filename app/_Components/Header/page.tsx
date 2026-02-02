export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <h1>VA Sub Shack</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Menu">Menu</a></li>
                    <li><a href="/Catering">Catering</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}