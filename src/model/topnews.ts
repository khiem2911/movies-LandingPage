type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"


interface topnews{
    key?:string,
    published_at?:string,
    name?:string,
    horizon:FlexDirection,
    gap:string
}
export default topnews