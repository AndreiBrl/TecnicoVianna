import Link from "next/link"
import { useState } from "react"

const About = () => {
    const [msg, setMsg] = useState();
   const chama =  async () => {
        try {
            const resp = await fetch("https://localhost:7287/produtos/3", {
                "method": "GET",
            })
            if (resp.ok) {
                const data = await resp.json();
                console.log(data);
                setMsg(data)
            } else {
                console.error("Request error", request.status)
            }
        } catch (error) {
            console.error("deu erro: " + error);

        }
    }
    return (
        <div>

            <h1>About</h1>

            <Link href="/">about</Link>
            <button
            
            onClick={chama}
            >Pega Api</button>
        </div>
    )

}

export default About