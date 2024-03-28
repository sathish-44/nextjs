import { Metadata } from "next"

type Props = {
    params : {
        productId : string;
    }
}

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const title = await new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`bike ${params.productId}`)
        }, 100);
    })
    return {
        title : `product ${title}`,
        description : `product ${params.productId}`
    }
}

export default function ProductDetail({params}: {params : {productId : string}}){
    return (
    <>
    <h1>PRODUCT DETAIL ID : {params.productId} </h1>
    </>
    )
}
