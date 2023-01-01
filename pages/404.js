import {useRouter} from "next/router";

export default function PageNotFound() {
    const {back} = useRouter();

    return (
        <>
            <p>Ooops ... page not found. </p>
            <button onClick={back}>Back</button>
        </>
    )
}