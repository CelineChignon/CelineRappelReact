const Coworkings = ({ coworkingsFromFakeApi }) => {

    return (
        <section className="containerCoworking">
            <h1>Tous nos Coworkings:</h1>
            {coworkingsFromFakeApi.map((lieu) => {

                return (
                    <div>
                        <h2>{lieu.name}</h2>
                        <p>Adresse :{lieu.address}</p>
                        <p>Ville:{lieu.city}</p>
                        <img src={lieu.image} alt="image Coworking" />
                    </div>
                )

            })}
        </section>
    );
};

export default Coworkings;