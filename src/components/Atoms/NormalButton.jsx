import "./atoms.css"
export function NArBtn(prop){
    return(
        <button className="main-btn">
            {prop.text}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M11.3799 0.355408L23 11.8554M11.3799 23.3554L23 11.8554M23 11.8554H0" stroke="#000640"/>
            </svg>
        </button>
    )
}