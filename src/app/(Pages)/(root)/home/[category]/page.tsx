import { redirect } from 'next/navigation'

async function page({params}: {params: Promise<{category: string}> }) {


    const category = (await params).category

    redirect(`/home/${category}/1`)

}

export default page
