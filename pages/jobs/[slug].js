import SanityClient from '../../client'

const individualJob = ({title}) => {
    console.log(title)
    return ( 
        <>
        job {title}
        </>
     );
}
 
export const getServerSideProps = async(jobContext) => {
    const jobSlug = jobContext.query.slug

    const query = `*[ _type == "post" && slug.current == $jobSlug][0]{
        title,
        location,
        mainImage,
        publishedAt,
        id,
        description
    }`

    const res = await SanityClient.fetch(query, {jobSlug})
    const job = await res.json
    if(!job) {
        return {
            props: null,
            notFound: true
        }
    }else {
        return{
            props: {
                title: job.title,
                location: job.location,
                mainImage: job.mainImage,
                publishedAt: job.publishedAt,
                id: job.id,
                description: job.description
            }
        }
    }
}

export default individualJob;