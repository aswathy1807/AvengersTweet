import Link from "next/link";

const navItems=[
    {label:"Home",href:"/"},
    {label:"Explore",href:"/explore"},
    {label:"Notifications",href:"/notifications"},
    {label:"Profile",href:"/profile"},
];

export default function NavShell({children}:{children:React.ReactNode}){
    return(
        <div className="flex min-h-screen max-w-4xl mx-auto">
            <nav className="w-56 shrink-0 border-r border-gray-200 px-2 py-4 sticky top-0 h-screen">
                <div className="text-xl font-bold px-3 mb-6">Status</div>
                <ul className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link 
                            href={item.href} 
                            className="block px-3 py-2 rounded-full text-lg hover:bg-gray-100 transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="flex-1 border-r border-gray-200 min-h-screen">
                {children}
            </main>
        </div>
    );
}