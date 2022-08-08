import userEvent from "@testing-library/user-event";

export default function Banner() {
    return (
        <div className="banner-container">
            <h1> Bonjour </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}