
import Format from '@/layout';
import { useFetcher } from '@/lib/fetcher';
import { getPost } from '@/lib/helper';
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'

export default function Page({ fallback }){

    const router = useRouter()
    const { postId } = router.query;
    const { data, isError, isLoading } = useFetcher(`post/${postId}`);

    // if(isLoading) return <Spinner></Spinner>
    // if(isError) return <ErrorComponent></ErrorComponent>

    console.log(data);
    return (
        <SWRConfig value={ { fallback }}>
            <Article {...data}></Article>
        </SWRConfig>
    )

}

function Article({ title, img, subtitle, description, author }){

    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                {/* <div className='flex justify-center'>
                <Auther user={data.author} />
                </div>

                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{title || "No Title"}</h1>

                    <p className='text-gray-500 text-xl text-center'>{subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600}></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        {description || "No Description"}
                    </div>

                </div>  

                <Ralated></Ralated> */}
            </section>
        </Format>
    )
}


export async function getStaticProps( { params } ){
    const posts = await getPost(params.postId)

    return {
       props : {
            fallback : {
                'post' : posts
            }
       }
    }
}

export async function getStaticPaths(){
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params : {
                postId : value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    }

}