import {useAppSelector} from "@/store/hooks";
import {selectUser} from "@/store/auth/authSlice";

export default function Home() {
    const user = useAppSelector(selectUser)
    return <div>
        <h1>Hello, {user.email}</h1>
    </div>
}
