import DefaultLayout from "../layouts/defaultLayout"

function Placeholder() {
    return (
        <DefaultLayout>
            <div className="text-center m-5">
                <h1>Wystąpił błąd serwera</h1>
                <p>Odświerz stronę lub spróbuj ponownie później</p>
            </div>
        </DefaultLayout>
    );
}

export default Placeholder;