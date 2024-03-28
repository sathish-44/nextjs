import Link from "next/link"

export default function ProductList(){
    return (
    <>
    <h1>PRODUCT LIST</h1>
    <h3><Link href='/products/1'>Product 1</Link></h3>
    <h3><Link href='/products/2'>Product 2</Link></h3>
    {/* replace will take you to home page */}
    <h3><Link href='/products/3' replace>Product 3</Link></h3>
    <Link href='/'>HOME</Link>
    </>
    )
}