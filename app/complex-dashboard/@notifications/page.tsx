import Card from '@/components/card'
import Link from "next/link"

export default function Notifications(){
    return <Card><h1>UnRead Notifications</h1>
    <Link href='/complex-dashboard/read-notification'>ALL</Link>
    </Card>
}