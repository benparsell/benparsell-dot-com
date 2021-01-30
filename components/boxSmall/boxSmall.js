export default function BoxSmall({background}) {
    const styling = {
        backgroundImage: `url(${background})`,
        height: `100%`,
        width: `auto`
    }

    return (
        <div style={styling} className="bg-no-repeat bg-center bg-cover">
            
        </div>
    )
}