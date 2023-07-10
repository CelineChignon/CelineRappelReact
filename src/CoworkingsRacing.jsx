const CoworkingsRacing = ({ coworkingsFromFakeApi }) => {
    const infoCoworking = (info) => { }

    return (
        <section className="containerCoworking">
            <h2>Les mieux notés:</h2>
            {coworkingsFromFakeApi.map((lieu) => {
                return (
                    <>
                        {lieu.rating >= 4 && (
                            <div>
                                <h2>{lieu.name}</h2>
                                <p>Adresse :{lieu.address}</p>
                                <p>Ville:{lieu.city}</p>
                                <img src={lieu.image} alt="image Coworking" />
                            </div>
                        )}
                    </>
                )

            })}
        </section>
    );
};

export default CoworkingsRacing;