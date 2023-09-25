

export function UserCard({user}) {
    return <div className="card">
        <img src={user.ImageUrl} alt={user.nom} />
        <h1>{user.nom} {user.prenom}</h1>
        <p>{user.email}</p>
    </div>;
}

