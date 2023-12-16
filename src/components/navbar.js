function Navbar() {
    function autoSwitchTheme() {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      
      }
      autoSwitchTheme();
     const openMenu =()=>{
        if(document.getElementById('theme-selector').classList.contains('hidden')){
            document.getElementById('theme-selector').classList.remove('hidden')
            console.log(document.getElementById('theme-selector'))
        }else{
            document.getElementById('theme-selector').classList.add('hidden')
        }
        // console.log("theme btn clicked")
      };
      const setDark =()=>{
        localStorage.theme = 'dark'
          document.getElementById('theme-selector').classList.add('hidden')
          autoSwitchTheme()
      }
      const setLight =()=>{
        localStorage.theme = 'light'
          document.getElementById('theme-selector').classList.add('hidden')
          autoSwitchTheme();
      }
      const setSystem =()=>{
        localStorage.removeItem('theme')
              document.getElementById('theme-selector').classList.add('hidden')
              autoSwitchTheme()
      }
    return (
        <>
           
        <div className=" ">
          
                <ul className="bg-white border-spacing-2 border-b-2 border-black dark:bg-slate-950 font-bold scroll-smooth flex justify-evenly items-center p-4 mb-3">
                    <li className="nav-item">
                        <a className="nav-link" href="#introduction">Introduction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#module1">Module 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#module2">Module 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#module3">Module 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#module4">Module 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#module5">Module 5</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" >Learn More</button>
                    </li>
                    <li>
                    <button
                        id="theme"
                        className="m-5"
                        onClick={openMenu}
                    >
                        <span className="dark:hidden" ><img className="w-5 rounded-full " src="imgs/brightness.png" alt="bright" /></span>
                        <span className="hidden dark:inline filter invert"><img className="w-5 rounded-full " src="imgs/moon.png" alt="dark" /></span>
                    </button>
                </li>
                </ul>
                <ul id="theme-selector" className=" cursor-pointer shadow-sm mt-4 p-2 fixed z-50 right-10 top-16 bg-white dark:bg-slate-700 border border-slate-900 border-solid rounded-md  dark:text-white hidden ">
                <li onClick={setLight} id="light" className="hover:bg-slate-50  hover:text-black focus:bg-slate-50 p-1 flex justify-start items-center rounded-sm"><span className="mx-1" ><img className="w-5 rounded-full " src="imgs/brightness.png" alt=""/></span><span>Light</span></li>
                <li onClick={setDark} id="dark" className="hover:bg-slate-50 hover:text-black focus:bg-slate-50 p-1 flex justify-start items-center rounded-sm"><span className="mx-1" ><img className="w-5 rounded-full " src="imgs/moon.png" alt=""/></span><span>Dark</span></li>
                <li onClick={setSystem} id="system" className="hover:bg-slate-50 hover:text-black focus:bg-slate-50 p-1 flex justify-start items-center rounded-sm"><span className="mx-1" ><img className="w-5 rounded-full " src="imgs/monitor.png" alt=""/></span><span>System</span></li>
            </ul>
           
        </div>
  
        </>
    )
}

export default Navbar;