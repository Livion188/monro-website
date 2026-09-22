export default function NavBar() {
  return (
    <nav className="flex bg-white px-10 py-5 justify-between w-full fixed">
      <span className="text-xl font-bold"><i class="bi bi-mastodon"></i>MONRO</span>
      <ul className="flex gap-4 text-mist-800 text-sm font-semibold">
        <li>Home</li>
        <li>Shop</li>
        <li>Our Story</li>
        <li>Contacts</li>
      </ul>
      <button className="bg-mauve-800 text-white px-4 py-2 rounded-md">
       <a href="https://www.shopmonroe.com.au/">Sign In</a>
      </button>
    </nav>
    
  );
}
