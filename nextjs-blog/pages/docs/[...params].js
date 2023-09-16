import { useRouter } from "next/router";


function doc(){
    const router = useRouter();
    const {params} = router.query
    console.log("quey",params)
    return <h1>Docs home page</h1>
}

export default doc;