import {useRouter} from 'next/router'

const Account = () =>{
    const router = useRouter()
    const {id} = router.query

    return <h1>Account : {id}</h1>
}

export default Account