import DefaultLayout from "./defaultLayout";
import Link from "next/link";

function WorkInProgress() {
    return (
        <DefaultLayout title="Strona w trakcie tworzenia!">
            <div className="text-center mt-5">
                <h1>Nad tą stroną nadal trwają prace</h1>
                <h2>Zapraszam na <Link href='/'>Stronę główną</Link></h2>
            </div>
        </DefaultLayout>
    );
}

export default WorkInProgress;