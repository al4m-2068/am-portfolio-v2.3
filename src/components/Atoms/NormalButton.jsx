import "./atoms.css"
export function NArBtn({className, text, icon}){
    const iconMap = {
        'arr-up-r': (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64053 3.80308L19.2781 3.72183M19.1969 19.3594L19.2781 3.72183M19.2781 3.72183L3.72178 19.2782" stroke="currentColor" strokeWidth="0.956522"/>
            </svg>
        ),
        'arr-r': (
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3851 0.5L22.5 11.5M11.3851 22.5L22.5 11.5M22.5 11.5H0.5" stroke="currentColor" strokeWidth="0.956522"/>
            </svg>
        ),
    };
    const iconSrc = iconMap[icon] || iconMap['arr-r'];

    return(
        <button className={`${className + " "} rounded-full flex gap-12 p-4.5 text-sm font-bold text-trim uppercase border border-white hover:bg-white hover:text-amdb cursor-pointer items-center transition-colors duration-200`}>
            {text}
            {iconSrc}
        </button>
    )
}