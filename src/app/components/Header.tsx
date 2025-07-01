// Component to show header content on landing page.

export default function Header() {
  return (
    <header>
        <div className="flex w-full mb-4 items-center">
            <div className="ml-auto flex flex-col mt-3">
                <h1 className="text-2xl font-bold self-center mb-4">Library</h1>
                <p className="text-sm">Browse for assets needed to report and present analysis</p>
            </div>
            <button className="ml-auto bg-slate-600 text-white px-4 py-2 rounded-md text-sm h-fit self-start">
                 {/* Added bolt icon from Font Awesome as icon in the design is not specified. */}
                <i className="fa-solid fa-bolt mr-1"></i> Request
            </button>
        </div>
    </header>
  );
}
