const Card = ({children}: {children : React.ReactNode}) => {
    const cardStyle = {
        padding : "30px",
        margin : "10px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0, 0.2)",
        display : 'flex',
        justifyContect: "center",
        alignItems : "center"
    }
    return <div style={cardStyle}>{children}</div>
}

export default Card;